const fs = require('fs');
const path = require('path');

// Ensure directories exist
['chairs', 'desks', 'storage', 'collections'].forEach(category => {
  const dir = path.join('public', 'images', category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Small gray image with text "Image Placeholder" - 400x300px WebP
const placeholderBase64 = `
data:image/webp;base64,UklGRu4CAABXRUJQVlA4WAoAAAAQAAAAXwAAWAAAQUxQSC0AAAABcFpt27YhZ3fvXhBERERERPQPRNcREdE/1HVEREQkIiIREQkJAQAA9P8E6P8JkFZQOCBuAgAA0BcAnQEqYABZAD5tNphJpCMhoS0YqEAGCWlu4XdhG/ML4zPrO+41gvmX9EDzq+gL7A/5j/5vVY9Ir1FfoB6RHpteKf52v/t6S/8O9ID/nf+l7Sv+J/0H/Y/9P3tP9m/t3+q9Yj/Xv7X/av9h/t3Wx/yn+zf2//Qetj/ZP7J/cv9l/sH9g/sX9k/2H+1/2T+u/2f+wf3/+0/2H+1/2T+yf2X+x/2L+xf2T+yf2T+x/23/H/ZwGE5JzLLOMc1k4VhQVVFe6jybfx72AAAAPt3zd8T1qm5ZzW+mZYD76/RSwzQhDmJ4YcUOYsGQCgJ3XHeZZxjmsnlxNrSorpxbsgxU4YzFDqAacIL0SWrm8xsUiJ6sW8LFXjXDpscb+iuxuPoTKRc5dE5tV/Z5iwZHxYq8a4dNjjf0V2Nx9CZSLnLonNqv7PMWDLNWb0i5y6JzapuWc1voKBkevy+/joG+LFXjXDpscb+iuxuPoTKRc5dE5tV/Z5iwZHxYq8a4dNjjf0V2Nx9CZSLnLonNqv7PMWDLNWb0i5y6JzapuWZdreFYUFVRXuo8m38e9gAAAD7d83fE9apuWc1vpmWA++v0UsM0IQ5ieGHFDmLBkAoCd1x3mWcY5rJ5cTa0qK6cW7IMVOGMxQ6gGnCC9Elq5vMbFIierFvCxV41w6bHG/orsbj6EykXOXRObVf2eYsGR8WKvGuHTY439FdjcfQmUi5y6Jzar+zzFgyzVm9IucuiCQz4y2jPMS3M2YLCgqqK91Hk2/j3sAAAAA+3fN3xPWqblnNb6ZlgPvr9FLDNCEOYnhhxQ5iwZAKAndcd5lnGOayeXE2tKiunFuyDFThjMUOoBpwgvRJaubzGxSInqxbwsVeNcOmxxv6K7G4+hMpFzl0Tm1X9nmLBkfFirxrh02ON/RXY3H0JlIucuic2q/s8xYMs1ZvSLnLonNqm5ZzW+goGR4/L7+Ogb4sVeNcOmxxv6K7G4+hMpFzl0Tm1X9nmLBkfFirxrh02ON/RXY3H0JlIucuic2q/s8xYMs1ZvSLnLonNqm5ZzW8KwoKqivdR5Nv497AAAAA==`;

// Function to create a placeholder image from base64 data
function createPlaceholder(category, variant) {
  const imageData = placeholderBase64.replace(/^data:image\/webp;base64,/, '');
  const buffer = Buffer.from(imageData, 'base64');
  const filePath = path.join('public', 'images', category, `${variant}-${category}.webp`);
  
  try {
    fs.writeFileSync(filePath, buffer);
    console.log(`Created ${filePath}`);
  } catch (error) {
    console.error(`Error creating ${filePath}:`, error);
  }
}

const variants = ['standard', 'premium', 'executive', 'compact', 'lite', 'comfort', 'modern', 'classic'];
const categories = ['chairs', 'desks', 'storage', 'collections'];

// Create collection placeholder separately
const collectionImageData = placeholderBase64.replace(/^data:image\/webp;base64,/, '');
const collectionBuffer = Buffer.from(collectionImageData, 'base64');
const collectionPath = path.join('public', 'images', 'collections', 'placeholder-collection.webp');

try {
  fs.writeFileSync(collectionPath, collectionBuffer);
  console.log(`Created ${collectionPath}`);
} catch (error) {
  console.error(`Error creating ${collectionPath}:`, error);
}

// Create placeholder for each variant in each category
categories.forEach(category => {
  variants.forEach(variant => {
    createPlaceholder(category, variant);
  });
  
  // Create category placeholder
  createPlaceholder(category, 'placeholder');
});

console.log('Placeholder images have been created successfully!');
