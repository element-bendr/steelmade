#!/bin/bash

# Create directories
mkdir -p public/images/chairs/director-series
mkdir -p public/images/chairs/executive-series
mkdir -p public/images/chairs/ergonomic-series
mkdir -p public/images/desks/series-a
mkdir -p public/images/desks/series-b
mkdir -p public/images/desks/series-c
mkdir -p public/images/storage/series-a
mkdir -p public/images/storage/series-b
mkdir -p public/images/storage/series-c

# Copy placeholder image to each directory
PLACEHOLDER="public/images/wepik-export-20230426125449.png"

cp "$PLACEHOLDER" "public/images/chairs/director-series/cover.jpg"
cp "$PLACEHOLDER" "public/images/chairs/executive-series/cover.jpg"
cp "$PLACEHOLDER" "public/images/chairs/ergonomic-series/cover.jpg"
cp "$PLACEHOLDER" "public/images/desks/series-a/cover.jpg"
cp "$PLACEHOLDER" "public/images/desks/series-b/cover.jpg"
cp "$PLACEHOLDER" "public/images/desks/series-c/cover.jpg"
cp "$PLACEHOLDER" "public/images/storage/series-a/cover.jpg"
cp "$PLACEHOLDER" "public/images/storage/series-b/cover.jpg"
cp "$PLACEHOLDER" "public/images/storage/series-c/cover.jpg"
