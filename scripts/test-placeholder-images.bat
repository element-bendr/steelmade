@echo off

REM Create test directory for chairs/director-series
mkdir "public\images\chairs\director-series"

REM Copy placeholder image to test directory
copy "public\images\wepik-export-20230426125449.png" "public\images\chairs\director-series\cover.jpg"

echo Test directory created and placeholder image copied successfully!
