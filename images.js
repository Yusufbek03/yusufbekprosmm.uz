/**
 * Images Management System for yusufbekprosmm.uz
 * 
 * This file contains all images used on the website.
 * To add, remove, or modify images, simply edit this file.
 * No need to change HTML, CSS, or other JavaScript files.
 */

const IMAGES = {
    // Profile Images - All existing profile images
    profile: {
        main: {
            original: 'img.PNG',
            optimized: 'img-optimized.jpg',
            webp: 'img-optimized.webp',
            thumbnail: 'img-thumbnail.jpg',
            thumbnailWebp: 'img-thumbnail.webp',
            alt: 'Yusufbek - SMM Mutaxassisi'
        },
        // Alternative profile images (if needed)
        alternative: {
            original: 'img.PNG',
            optimized: 'img-optimized.jpg',
            webp: 'img-optimized.webp',
            thumbnail: 'img-thumbnail.jpg',
            thumbnailWebp: 'img-thumbnail.webp',
            alt: 'Yusufbek - Alternative Profile'
        }
    },
    
    // Service Icons (Font Awesome icons - no actual images needed)
    services: {
        smm: 'fas fa-mobile-alt',
        video: 'fas fa-video',
        editing: 'fas fa-cut',
        design: 'fas fa-palette',
        advertising: 'fas fa-bullseye',
        account: 'fas fa-user-cog'
    },
    
    // Social Media Icons (Font Awesome icons)
    social: {
        telegram: 'fab fa-telegram-plane',
        instagram: 'fab fa-instagram',
        whatsapp: 'fab fa-whatsapp'
    },
    
    // Review Avatars (Emoji placeholders - can be replaced with actual images)
    reviews: {
        avatar1: '👤',
        avatar2: '👤',
        avatar3: '👤'
    },
    
    // Background Images (if needed in future)
    backgrounds: {
        // Add background images here if needed
    },
    
    // Portfolio Images (for future use)
    portfolio: {
        // Add portfolio images here
        // Example:
        // project1: {
        //     original: 'portfolio/project1.jpg',
        //     thumbnail: 'portfolio/project1-thumb.jpg',
        //     alt: 'Project 1 Description'
        // }
    },
    
    // All existing image files in the project
    existing: {
        // Original profile image
        originalProfile: {
            original: 'img.PNG',
            optimized: 'img-optimized.jpg',
            webp: 'img-optimized.webp',
            thumbnail: 'img-thumbnail.jpg',
            thumbnailWebp: 'img-thumbnail.webp',
            alt: 'Yusufbek - Original Profile Image'
        },
        
        // Optimized versions
        optimizedJpg: {
            original: 'img-optimized.jpg',
            alt: 'Yusufbek - Optimized JPG'
        },
        
        optimizedWebp: {
            original: 'img-optimized.webp',
            alt: 'Yusufbek - Optimized WebP'
        },
        
        thumbnailJpg: {
            original: 'img-thumbnail.jpg',
            alt: 'Yusufbek - Thumbnail JPG'
        },
        
        thumbnailWebp: {
            original: 'img-thumbnail.webp',
            alt: 'Yusufbek - Thumbnail WebP'
        }
    },
    
    // System images (logos, icons, etc.)
    system: {
        // Placeholder for system images
        placeholder: {
            original: 'https://via.placeholder.com/120x120/8b5cf6/ffffff?text=Y',
            alt: 'Profile Placeholder'
        }
    }
};

/**
 * Image Management Functions
 */

// Get image by path
function getImage(category, subcategory, type = 'optimized') {
    if (IMAGES[category] && IMAGES[category][subcategory]) {
        const image = IMAGES[category][subcategory];
        if (typeof image === 'string') {
            return image;
        } else if (typeof image === 'object') {
            return image[type] || image.original;
        }
    }
    return null;
}

// Get all images in a category
function getImagesByCategory(category) {
    return IMAGES[category] || {};
}

// Get all existing images in the project
function getAllExistingImages() {
    return IMAGES.existing;
}

// Get all profile images
function getAllProfileImages() {
    return IMAGES.profile;
}

// Get all optimized versions of an image
function getOptimizedVersions(imageName) {
    const image = IMAGES.existing[imageName];
    if (image) {
        return {
            original: image.original,
            optimized: image.optimized,
            webp: image.webp,
            thumbnail: image.thumbnail,
            thumbnailWebp: image.thumbnailWebp
        };
    }
    return null;
}

// Add new image
function addImage(category, name, imageData) {
    if (!IMAGES[category]) {
        IMAGES[category] = {};
    }
    IMAGES[category][name] = imageData;
}

// Remove image
function removeImage(category, name) {
    if (IMAGES[category] && IMAGES[category][name]) {
        delete IMAGES[category][name];
    }
}

// Update image
function updateImage(category, name, imageData) {
    if (IMAGES[category]) {
        IMAGES[category][name] = imageData;
    }
}

// Get image with fallback
function getImageWithFallback(category, subcategory, type = 'optimized') {
    const image = getImage(category, subcategory, type);
    if (image) {
        return image;
    }
    
    // Fallback images - using existing images from the project
    const fallbacks = {
        profile: IMAGES.existing.optimizedJpg.original,
        service: 'fas fa-cog',
        social: 'fas fa-share-alt',
        review: '👤',
        existing: IMAGES.existing.originalProfile.original,
        system: IMAGES.system.placeholder.original
    };
    
    return fallbacks[category] || fallbacks.profile;
}

// Initialize images on page load
function initializeImages() {
    // Set profile image with picture element
    const profileImg = document.getElementById('profileImg');
    const profileWebp = document.getElementById('profileWebp');
    const profileJpg = document.getElementById('profileJpg');
    
    if (profileImg && profileWebp && profileJpg) {
        const profileData = IMAGES.profile.main;
        
        // Set WebP source
        if (profileData.webp) {
            profileWebp.srcset = profileData.webp;
        }
        
        // Set JPEG source
        if (profileData.optimized) {
            profileJpg.srcset = profileData.optimized;
        }
        
        // Set main image
        profileImg.src = profileData.optimized || profileData.original;
        profileImg.alt = profileData.alt;
        
        // Set fallback if image fails to load
        profileImg.onerror = function() {
            this.src = getImageWithFallback('profile');
        };
    }
    
    // Set service icons (already handled by Font Awesome)
    // Set social icons (already handled by Font Awesome)
    
    // Set review avatars
    const reviewAvatars = document.querySelectorAll('.reviewer-avatar');
    reviewAvatars.forEach((avatar, index) => {
        const avatarKey = `avatar${index + 1}`;
        const avatarImage = getImage('reviews', avatarKey);
        if (avatarImage) {
            avatar.textContent = avatarImage;
        }
    });
    
    // Log all existing images for reference
    console.log('📁 All existing images in project:', getAllExistingImages());
    console.log('👤 All profile images:', getAllProfileImages());
    console.log('✅ Images initialized successfully');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        IMAGES, 
        getImage, 
        addImage, 
        removeImage, 
        updateImage, 
        getImageWithFallback,
        getAllExistingImages,
        getAllProfileImages,
        getOptimizedVersions,
        getImagesByCategory
    };
}

// Auto-initialize when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeImages);
} 