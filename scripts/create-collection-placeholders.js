const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function createCollectionPlaceholder() {
  const width = 800;
  const height = 800;
  const placeholderDir = path.join(process.cwd(), 'public', 'images', 'collections');

  try {
    // Create directory if it doesn't exist
    await fs.mkdir(placeholderDir, { recursive: true });

    // Create a placeholder image with a gradient background
    await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 240, g: 240, b: 240, alpha: 1 }
      }
    })
    .webp()
    .toFile(path.join(placeholderDir, 'placeholder-collection.webp'));

    console.log('Collection placeholder created successfully');
  } catch (error) {
    console.error('Error creating collection placeholder:', error);
  }
}

createCollectionPlaceholder();
