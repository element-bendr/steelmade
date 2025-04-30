@echo off

REM Create directories for chairs
mkdir "public\images\chairs\director-series"
mkdir "public\images\chairs\executive-series"
mkdir "public\images\chairs\ergonomic-series"

REM Create directories for desks
mkdir "public\images\desks\series-a"
mkdir "public\images\desks\series-b"
mkdir "public\images\desks\series-c"

REM Create directories for storage
mkdir "public\images\storage\series-a"
mkdir "public\images\storage\series-b"
mkdir "public\images\storage\series-c"

REM Copy placeholder image to each directory
copy "public\images\wepik-export-20230426125449.png" "public\images\chairs\director-series\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\chairs\executive-series\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\chairs\ergonomic-series\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\desks\series-a\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\desks\series-b\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\desks\series-c\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\storage\series-a\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\storage\series-b\cover.jpg"
copy "public\images\wepik-export-20230426125449.png" "public\images\storage\series-c\cover.jpg"

echo All directories created and placeholder images copied successfully!
