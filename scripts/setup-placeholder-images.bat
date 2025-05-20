@echo off
setlocal enabledelayedexpansion

:: Check if ImageMagick is installed
where magick >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: ImageMagick is not installed or not in PATH
    echo Please install ImageMagick from https://imagemagick.org/
    pause
    exit /b 1
)

:: Create base directories
mkdir "public\images\products\chairs" 2>nul
mkdir "public\images\products\desks" 2>nul
mkdir "public\images\products\storage" 2>nul

:: Function to create images for a category
for %%c in (chairs desks storage) do (
    echo Creating images for %%c...
    
    :: Create category placeholder
    magick -size 1200x630 xc:gray -gravity center -pointsize 60 ^
        -fill white -draw "text 0,0 '%%c Collection'" ^
        -quality 80 "public\images\products\%%c\placeholder.webp" ^
        || echo Error creating placeholder for %%c
    
    :: Create product variants
    for %%v in (standard premium executive compact lite comfort modern classic) do (
        echo Creating %%v-%%c...
        magick -size 800x600 xc:gray -gravity center -pointsize 40 ^
            -fill white -draw "text 0,-20 '%%v %%c'" ^
            -pointsize 20 -draw "text 0,20 'Product Image Placeholder'" ^
            -quality 80 "public\images\products\%%c\%%v-%%c.webp" ^
            || echo Error creating %%v-%%c
    )
)

if exist "public\images\products\chairs\standard-chairs.webp" (
    echo Placeholder images have been created successfully!
) else (
    echo ERROR: Failed to create images. Please check if ImageMagick is working correctly.
)

pause
