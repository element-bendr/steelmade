import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import * as fs from 'fs/promises';
import * as path from 'path';
import sharp from 'sharp';
import dotenv from 'dotenv';
import { collections } from '../lib/data/collections-data';
import type { CategoryCollections } from '../types/collections';

// Load environment variables
dotenv.config();

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

// Type for tracking image mappings
interface ImageMapping {
  originalPath: string;
  newS3Url: string;
}

// Configuration
const config = {
  imageDirs: ['images', 'public/images'],
  s3BucketName: process.env.AWS_BUCKET_NAME!,
  maxConcurrentUploads: 5, // Limit concurrent uploads
  imageQuality: 80, // Optimize quality vs size
  imageSizes: {
    thumbnail: { width: 300, height: 300 },
    regular: { width: 800, height: 600 },
    large: { width: 1200, height: 900 }
  }
};

// Function to generate standardized image name
function generateStandardizedName(
  collection: string,
  series: string,
  counter: number,
  variant: string,
  ext: string
): string {
  return `${collection}-${series}-${String(counter).padStart(3, '0')}-${variant}${ext}`;
}

// Process and optimize image
async function processImage(
  imagePath: string,
  width: number,
  height: number
): Promise<Buffer> {
  return sharp(imagePath)
    .resize(width, height, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .webp({ quality: config.imageQuality })
    .toBuffer();
}

// Upload file to S3 with retries
async function uploadToS3(
  buffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: config.s3BucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000' // Cache for 1 year
    }
  });

  await upload.done();
  return `https://${config.s3BucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}

// Process images in batches
async function processBatch<T>(
  items: T[],
  batchSize: number,
  processor: (item: T) => Promise<void>
): Promise<void> {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(processor));
  }
}

// Main function to process and upload images
async function processAndUploadImages(): Promise<ImageMapping[]> {
  const imageMappings: ImageMapping[] = [];
  const processedPaths = new Set<string>();
  
  // Collect all image paths from collections data
  function collectImagePaths(collections: CategoryCollections) {
    const paths: string[] = [];
    
    Object.entries(collections).forEach(([category, subcategories]) => {
      if (typeof subcategories === 'object' && subcategories !== null) {
        Object.entries(subcategories).forEach(([series, data]) => {
          // Collect cover image
          if (data.metadata.coverImage?.url) {
            paths.push(data.metadata.coverImage.url);
          }
          
          // Collect metadata images
          data.metadata.images?.forEach(img => {
            if (img.url) paths.push(img.url);
          });
          
          // Collect product images
          if (data.products) {
            Object.values(data.products).forEach(product => {
              product.images?.forEach(img => {
                if (img.url) paths.push(img.url);
              });
            });
          }
        });
      }
    });
    
    return paths;
  }

  const imagePaths = collectImagePaths(collections);

  // Process each image
  for (let i = 0; i < imagePaths.length; i++) {
    const imagePath = imagePaths[i];
    if (processedPaths.has(imagePath)) continue;
    processedPaths.add(imagePath);

    const parsedPath = path.parse(imagePath);
    const pathParts = parsedPath.dir.split('/').filter(Boolean);
    const collection = pathParts[1] || 'unknown'; // e.g., 'chairs'
    const series = pathParts[2] || 'unknown'; // e.g., 'designer-series'
    
    try {
      // Get absolute path
      const absolutePath = path.join(process.cwd(), 'public', imagePath);
      const imageExists = await fs.access(absolutePath).then(() => true).catch(() => false);
      
      if (!imageExists) {
        console.warn(`Image not found: ${absolutePath}`);
        continue;
      }

      // Process different sizes
      const variants = Object.keys(config.imageSizes);
      for (const variant of variants) {
        const size = config.imageSizes[variant as keyof typeof config.imageSizes];
        const newFileName = generateStandardizedName(
          collection,
          series,
          i + 1,
          variant,
          '.webp'
        );
        
        const buffer = await processImage(absolutePath, size.width, size.height);
        const s3Key = `images/${collection}/${series}/${newFileName}`;
        const s3Url = await uploadToS3(buffer, s3Key, 'image/webp');

        // Store mapping for the regular size to update collections data
        if (variant === 'regular') {
          imageMappings.push({
            originalPath: imagePath,
            newS3Url: s3Url
          });
        }
      }
    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error);
    }
  }

  return imageMappings;
}

// Update collections data with new S3 URLs
async function updateCollectionsData(imageMappings: ImageMapping[]): Promise<void> {
  const collectionsPath = path.join(process.cwd(), 'lib/data/collections-data.ts');
  let content = await fs.readFile(collectionsPath, 'utf8');

  imageMappings.forEach(mapping => {
    content = content.replace(
      new RegExp(`"${mapping.originalPath}"`, 'g'),
      `"${mapping.newS3Url}"`
    );
  });

  await fs.writeFile(collectionsPath, content, 'utf8');
}

// Main execution
async function main() {
  try {
    console.log('Starting image processing and upload...');
    
    // Validate environment variables
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || 
        !process.env.AWS_REGION || !process.env.AWS_BUCKET_NAME) {
      throw new Error('Missing required AWS environment variables');
    }

    const imageMappings = await processAndUploadImages();
    console.log(`Successfully processed and uploaded ${imageMappings.length} images`);

    await updateCollectionsData(imageMappings);
    console.log('Successfully updated collections data with new S3 URLs');

  } catch (error) {
    console.error('Error in main execution:', error);
    process.exit(1);
  }
}

// Execute if running directly
if (require.main === module) {
  main();
}

export { processAndUploadImages, updateCollectionsData };
