#!/usr/bin/env python3
"""
Image optimization script for yusufbekprosmm.uz
Optimizes images for web use with different sizes and formats
"""

from PIL import Image
import os

def optimize_image(input_path, output_path, max_size=(800, 800), quality=85):
    """Optimize image for web use"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Resize if larger than max_size
            if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save optimized version
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            print(f"✅ Optimized: {input_path} -> {output_path}")
            print(f"   Size: {img.size}, Quality: {quality}%")
            
    except Exception as e:
        print(f"❌ Error optimizing {input_path}: {e}")

def create_webp_version(input_path, output_path, max_size=(800, 800), quality=85):
    """Create WebP version of image"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Resize if larger than max_size
            if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save WebP version
            img.save(output_path, 'WEBP', quality=quality, optimize=True)
            print(f"✅ WebP created: {input_path} -> {output_path}")
            print(f"   Size: {img.size}, Quality: {quality}%")
            
    except Exception as e:
        print(f"❌ Error creating WebP {input_path}: {e}")

def main():
    """Main optimization function"""
    print("🚀 Starting image optimization...")
    
    # Input image
    input_image = "img.PNG"
    
    if not os.path.exists(input_image):
        print(f"❌ Input image not found: {input_image}")
        return
    
    # Create optimized versions
    optimize_image(input_image, "img-optimized.jpg", max_size=(400, 400), quality=85)
    optimize_image(input_image, "img-thumbnail.jpg", max_size=(200, 200), quality=80)
    
    # Create WebP versions (better compression)
    try:
        create_webp_version(input_image, "img-optimized.webp", max_size=(400, 400), quality=85)
        create_webp_version(input_image, "img-thumbnail.webp", max_size=(200, 200), quality=80)
    except Exception as e:
        print(f"⚠️  WebP creation failed (Pillow might not support WebP): {e}")
    
    print("🎉 Image optimization completed!")

if __name__ == "__main__":
    main() 