#!/bin/bash

# Create base directories
mkdir -p public/images/products/{chairs,desks,storage}

# Function to create placeholder images for a category
create_category_images() {
  local category=$1
  local variants=("standard" "premium" "executive" "compact" "lite" "comfort" "modern" "classic")
  
  # Create category placeholder
  convert -size 1200x630 xc:gray -gravity center -pointsize 60 \
    -draw "text 0,0 '${category^} Collection'" \
    -quality 80 "public/images/products/${category}/placeholder.webp"
  
  # Create variant images
  for variant in "${variants[@]}"; do
    # Create product image (800x600 for detail view)
    convert -size 800x600 xc:gray -gravity center -pointsize 40 \
      -draw "text 0,-20 '${variant^} ${category^}'" \
      -pointsize 20 -draw "text 0,20 'Product Image Placeholder'" \
      -quality 80 "public/images/products/${category}/${variant}-${category}.webp"
  done
}

# Create images for each category
create_category_images "chairs"
create_category_images "desks"
create_category_images "storage"

echo "Placeholder images have been created successfully!"
