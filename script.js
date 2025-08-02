// Profile image functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        // Try to load a custom image first
        profileImg.src = './profile_image.jpg';

        profileImg.onerror = function() {
            // If image fails to load, use placeholder
            this.src = 'https://via.placeholder.com/120x120/8b5cf6/ffffff?text=Y';
        };
    }
});

// Add hover effects and smooth interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add parallax effect to floating elements
    document.addEventListener('mousemove', (e) => {
        const floatingElements = document.querySelectorAll('.floating-icon');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });


});

// Add typing effect animation
function addTypingEffect() {
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #8b5cf6';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

// Add loading animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
        addTypingEffect();
    }, 500);
});

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8254692752:AAGxX68rvtollbo_aqeip2EThnaAqSGI6Go';
const TELEGRAM_CHAT_ID = '8107614946';

// Service prices mapping with ranges
const servicePrices = {
    'SMM Boshqaruv': { min: 1000000, max: 3000000 },
    'Video Suratga Olish': { min: 100000, max: 500000 },
    'Video Montaj': { min: 200000, max: 800000 },
    'Grafik Dizayn': { min: 100000, max: 300000 },
    'Target Reklama': { min: 600000, max: 2000000 },
    'Akkount Qadoqlash': { min: 150000, max: 400000 }
};



// Format number with spaces
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Open modal function
function openModal(serviceName, minPrice, maxPrice = null) {
    const modal = document.getElementById('orderModal');
    
    if (modal) modal.style.display = 'block';
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('orderModal');
    if (modal) modal.style.display = 'none';
}

// Show success animation
function showSuccessAnimation() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.style.display = 'block';
        
        // Add confetti effect
        createConfetti();
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            closeSuccessModal();
        }, 5000);
    }
}

// Close success modal
function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.style.display = 'none';
    }
}

// Create additional confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#a8e6cf', '#dcedc1'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '2px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '2001';
            confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 100);
    }
}

// Send message to Telegram
async function sendToTelegram(orderData) {
    const message = `
🎯 New Order Received!

👤 Client: ${orderData.name}
📱 Phone: ${orderData.phone}
📲 Telegram: ${orderData.telegram}

📝 Project Details:
${orderData.details}

🕒 Time: ${new Date().toLocaleString('uz-UZ')}
`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        return response.ok;
    } catch (error) {
        console.error('Error sending message:', error);
        return false;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const serviceCards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('orderModal');
    const closeModalBtn = document.querySelector('.close');
    const orderForm = document.getElementById('orderForm');

    // Add click events to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.getAttribute('data-service');
            const minPrice = parseInt(card.getAttribute('data-min-price'));
            const maxPrice = parseInt(card.getAttribute('data-max-price'));
            openModal(serviceName, minPrice, maxPrice);
        });
    });

    // Close modal events
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
        
        // Close success modal when clicking outside
        const successModal = document.getElementById('successModal');
        if (event.target === successModal) {
            closeSuccessModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.style.display === 'block') {
                closeModal();
            }
            
            const successModal = document.getElementById('successModal');
            if (successModal && successModal.style.display === 'block') {
                closeSuccessModal();
            }
        }
    });



    // Form submission
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(orderForm);
            const orderData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                telegram: formData.get('telegram'),
                details: formData.get('details')
            };

            // Send to Telegram
            const success = await sendToTelegram(orderData);

            if (success) {
                // Close order modal
                closeModal();
                
                // Reset form
                orderForm.reset();
                
                // Show success animation
                showSuccessAnimation();
            } else {
                alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
            }
        });
    }

    // Profile image functionality
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.onerror = function() {
            this.src = 'https://via.placeholder.com/120x120/8b5cf6/ffffff?text=Y';
        };
    }

    // Add typing effect
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #8b5cf6';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };

        setTimeout(typeWriter, 1000);
    }
});