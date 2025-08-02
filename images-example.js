/**
 * Example: How to add more images to the system
 * 
 * This file shows examples of how to add different types of images
 * to the IMAGES object in images.js
 */

// Example 1: Adding a new profile image
const newProfileImage = {
    original: 'new-profile.jpg',
    optimized: 'new-profile-optimized.jpg',
    webp: 'new-profile-optimized.webp',
    thumbnail: 'new-profile-thumb.jpg',
    thumbnailWebp: 'new-profile-thumb.webp',
    alt: 'Yusufbek - Professional SMM Specialist'
};

// Example 2: Adding portfolio images
const portfolioImages = {
    project1: {
        original: 'portfolio/project1-before.jpg',
        optimized: 'portfolio/project1-before-optimized.jpg',
        webp: 'portfolio/project1-before.webp',
        thumbnail: 'portfolio/project1-before-thumb.jpg',
        alt: 'Instagram Account Before Optimization'
    },
    project1After: {
        original: 'portfolio/project1-after.jpg',
        optimized: 'portfolio/project1-after-optimized.jpg',
        webp: 'portfolio/project1-after.webp',
        thumbnail: 'portfolio/project1-after-thumb.jpg',
        alt: 'Instagram Account After Optimization'
    },
    project2: {
        original: 'portfolio/video-project.jpg',
        optimized: 'portfolio/video-project-optimized.jpg',
        webp: 'portfolio/video-project.webp',
        thumbnail: 'portfolio/video-project-thumb.jpg',
        alt: 'Video Editing Project Example'
    }
};

// Example 3: Adding background images
const backgroundImages = {
    hero: {
        original: 'backgrounds/hero-bg.jpg',
        optimized: 'backgrounds/hero-bg-optimized.jpg',
        webp: 'backgrounds/hero-bg.webp',
        alt: 'Hero Section Background'
    },
    pattern: {
        original: 'backgrounds/pattern.png',
        optimized: 'backgrounds/pattern-optimized.png',
        alt: 'Decorative Pattern'
    }
};

// Example 4: Adding review avatars (actual images instead of emojis)
const reviewAvatars = {
    avatar1: {
        original: 'avatars/client1.jpg',
        optimized: 'avatars/client1-optimized.jpg',
        webp: 'avatars/client1.webp',
        thumbnail: 'avatars/client1-thumb.jpg',
        alt: 'Aziza Karimova'
    },
    avatar2: {
        original: 'avatars/client2.jpg',
        optimized: 'avatars/client2-optimized.jpg',
        webp: 'avatars/client2.webp',
        thumbnail: 'avatars/client2-thumb.jpg',
        alt: 'Dilshod Rakhimov'
    },
    avatar3: {
        original: 'avatars/client3.jpg',
        optimized: 'avatars/client3-optimized.jpg',
        webp: 'avatars/client3.webp',
        thumbnail: 'avatars/client3-thumb.jpg',
        alt: 'Malika Yusupova'
    }
};

// Example 5: Adding service preview images
const serviceImages = {
    smm: {
        original: 'services/smm-preview.jpg',
        optimized: 'services/smm-preview-optimized.jpg',
        webp: 'services/smm-preview.webp',
        thumbnail: 'services/smm-preview-thumb.jpg',
        alt: 'SMM Management Service Preview'
    },
    video: {
        original: 'services/video-preview.jpg',
        optimized: 'services/video-preview-optimized.jpg',
        webp: 'services/video-preview.webp',
        thumbnail: 'services/video-preview-thumb.jpg',
        alt: 'Video Production Service Preview'
    },
    design: {
        original: 'services/design-preview.jpg',
        optimized: 'services/design-preview-optimized.jpg',
        webp: 'services/design-preview.webp',
        thumbnail: 'services/design-preview-thumb.jpg',
        alt: 'Graphic Design Service Preview'
    }
};

// Example 6: Adding certificate images
const certificates = {
    certificate1: {
        original: 'certificates/smm-certificate.jpg',
        optimized: 'certificates/smm-certificate-optimized.jpg',
        webp: 'certificates/smm-certificate.webp',
        thumbnail: 'certificates/smm-certificate-thumb.jpg',
        alt: 'SMM Management Certificate'
    },
    certificate2: {
        original: 'certificates/video-certificate.jpg',
        optimized: 'certificates/video-certificate-optimized.jpg',
        webp: 'certificates/video-certificate.webp',
        thumbnail: 'certificates/video-certificate-thumb.jpg',
        alt: 'Video Editing Certificate'
    }
};

// Example 7: Adding logo variations
const logos = {
    main: {
        original: 'logo/logo.png',
        optimized: 'logo/logo-optimized.png',
        webp: 'logo/logo.webp',
        thumbnail: 'logo/logo-thumb.png',
        alt: 'Yusufbek Logo'
    },
    white: {
        original: 'logo/logo-white.png',
        optimized: 'logo/logo-white-optimized.png',
        webp: 'logo/logo-white.webp',
        alt: 'Yusufbek Logo - White Version'
    },
    dark: {
        original: 'logo/logo-dark.png',
        optimized: 'logo/logo-dark-optimized.png',
        webp: 'logo/logo-dark.webp',
        alt: 'Yusufbek Logo - Dark Version'
    }
};

// Example 8: Adding testimonial images
const testimonials = {
    testimonial1: {
        original: 'testimonials/testimonial1.jpg',
        optimized: 'testimonials/testimonial1-optimized.jpg',
        webp: 'testimonials/testimonial1.webp',
        thumbnail: 'testimonials/testimonial1-thumb.jpg',
        alt: 'Client Testimonial - Before and After'
    },
    testimonial2: {
        original: 'testimonials/testimonial2.jpg',
        optimized: 'testimonials/testimonial2-optimized.jpg',
        webp: 'testimonials/testimonial2.webp',
        thumbnail: 'testimonials/testimonial2-thumb.jpg',
        alt: 'Client Testimonial - Results'
    }
};

// Example 9: Adding team member images
const team = {
    yusufbek: {
        original: 'team/yusufbek.jpg',
        optimized: 'team/yusufbek-optimized.jpg',
        webp: 'team/yusufbek.webp',
        thumbnail: 'team/yusufbek-thumb.jpg',
        alt: 'Yusufbek - Founder & SMM Specialist'
    },
    assistant: {
        original: 'team/assistant.jpg',
        optimized: 'team/assistant-optimized.jpg',
        webp: 'team/assistant.webp',
        thumbnail: 'team/assistant-thumb.jpg',
        alt: 'Team Assistant'
    }
};

// Example 10: Adding gallery images
const gallery = {
    work1: {
        original: 'gallery/work1.jpg',
        optimized: 'gallery/work1-optimized.jpg',
        webp: 'gallery/work1.webp',
        thumbnail: 'gallery/work1-thumb.jpg',
        alt: 'Instagram Post Design'
    },
    work2: {
        original: 'gallery/work2.jpg',
        optimized: 'gallery/work2-optimized.jpg',
        webp: 'gallery/work2.webp',
        thumbnail: 'gallery/work2-thumb.jpg',
        alt: 'Video Editing Project'
    },
    work3: {
        original: 'gallery/work3.jpg',
        optimized: 'gallery/work3-optimized.jpg',
        webp: 'gallery/work3.webp',
        thumbnail: 'gallery/work3-thumb.jpg',
        alt: 'Logo Design'
    }
};

// How to use these examples in images.js:

/*
// Add to IMAGES object in images.js:

IMAGES.portfolio = portfolioImages;
IMAGES.backgrounds = backgroundImages;
IMAGES.reviews = reviewAvatars;
IMAGES.services = { ...IMAGES.services, ...serviceImages };
IMAGES.certificates = certificates;
IMAGES.logos = logos;
IMAGES.testimonials = testimonials;
IMAGES.team = team;
IMAGES.gallery = gallery;

// Or add individual images:

IMAGES.portfolio.project1 = portfolioImages.project1;
IMAGES.backgrounds.hero = backgroundImages.hero;
*/ 