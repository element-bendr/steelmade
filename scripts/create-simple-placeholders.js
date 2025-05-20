const fs = require('fs');
const path = require('path');

// Ensure directories exist
['chairs', 'desks', 'storage'].forEach(category => {
  const dir = path.join('public', 'images', 'products', category);
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created directory: ${dir}`);
});

// Simple WebP image data (1x1 gray pixel)
const placeholderData = Buffer.from([
  0x52, 0x49, 0x46, 0x46, 0x1A, 0x00, 0x00, 0x00, 0x57, 0x45, 0x42, 0x50,
  0x56, 0x50, 0x38, 0x20, 0x0E, 0x00, 0x00, 0x00, 0x30, 0x01, 0x00, 0x9D,
  0x01, 0x2A, 0x08, 0x00, 0x00, 0x00, 0x00, 0x07
]);

// Function to create a placeholder image
function createPlaceholder(category, variant) {
  const filePath = path.join('public', 'images', 'products', category, `${variant}-${category}.webp`);
  
  try {
    fs.writeFileSync(filePath, placeholderData);
    console.log(`Created: ${filePath}`);
  } catch (error) {
    console.error(`Error creating ${filePath}:`, error);
  }
}

const variants = ['standard', 'premium', 'executive', 'compact', 'lite', 'comfort', 'modern', 'classic'];
const categories = ['chairs', 'desks', 'storage'];

console.log('Creating placeholder images...');

categories.forEach(category => {
  variants.forEach(variant => {
    createPlaceholder(category, variant);
  });
  createPlaceholder(category, 'placeholder');
});

console.log('Done creating placeholder images.');
