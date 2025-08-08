// Global variables
let currentPage = 1;
const totalPages = 6;
let musicPlaying = false;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeConfetti();
    initializeMusicControl();
    initializePhotoGallery();
    
    // Show first page with a slight delay for smooth transition
    setTimeout(() => {
        showPage(1);
    }, 100);
});

// Navigation System
function initializeNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });
    
    // Dot navigation clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPage(index + 1);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft':
                if (currentPage > 1) showPage(currentPage - 1);
                break;
            case 'ArrowRight':
                if (currentPage < totalPages) showPage(currentPage + 1);
                break;
            case 'Home':
                showPage(1);
                break;
            case 'End':
                showPage(totalPages);
                break;
        }
    });
    
    // Touch/swipe navigation for mobile
    let startX = 0;
    let endX = 0;
    
    document.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentPage < totalPages) {
                // Swipe left - next page
                showPage(currentPage + 1);
            } else if (diff < 0 && currentPage > 1) {
                // Swipe right - previous page
                showPage(currentPage - 1);
            }
        }
    }
}

// Show specific page with smooth transitions
function showPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    const currentPageElement = document.querySelector('.page.active');
    const newPageElement = document.getElementById(`page${pageNumber}`);
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Update current page
    currentPage = pageNumber;
    
    // Hide current page with exit animation
    if (currentPageElement) {
        currentPageElement.style.opacity = '0';
        currentPageElement.style.transform = 'translateX(-100px)';
        
        setTimeout(() => {
            currentPageElement.classList.remove('active');
            currentPageElement.style.display = 'none';
        }, 300);
    }
    
    // Show new page with enter animation
    setTimeout(() => {
        newPageElement.style.display = 'flex';
        newPageElement.style.opacity = '0';
        newPageElement.style.transform = 'translateX(100px)';
        newPageElement.classList.add('active');
        
        // Trigger reflow
        newPageElement.offsetHeight;
        
        // Animate in
        newPageElement.style.opacity = '1';
        newPageElement.style.transform = 'translateX(0)';
        
        // Trigger page-specific animations
        triggerPageAnimations(pageNumber);
        
    }, 350);
    
    // Update navigation dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === pageNumber);
    });
    
    // Update navigation buttons
    prevBtn.disabled = pageNumber === 1;
    nextBtn.disabled = pageNumber === totalPages;
    
    // Update navigation button styles
    prevBtn.style.opacity = pageNumber === 1 ? '0.3' : '1';
    nextBtn.style.opacity = pageNumber === totalPages ? '0.3' : '1';
}

// Trigger page-specific animations
function triggerPageAnimations(pageNumber) {
    switch(pageNumber) {
        case 1:
            // Welcome page - restart confetti if needed
            if (document.querySelectorAll('.confetti').length === 0) {
                createConfetti();
            }
            break;
        case 5:
            // Love list page - animate items with staggered delay
            const loveItems = document.querySelectorAll('.love-item');
            loveItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-50px)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
            break;
        case 6:
            // Final page - animate floating hearts
            const hearts = document.querySelectorAll('.floating-hearts span');
            hearts.forEach((heart, index) => {
                heart.style.animationDelay = `${index * 0.5}s`;
            });
            break;
    }
}

// Confetti Animation System
function initializeConfetti() {
    createConfetti();
    
    // Recreate confetti every 10 seconds on the welcome page
    setInterval(() => {
        if (currentPage === 1) {
            createConfetti();
        }
    }, 10000);
}

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    if (!container) return;
    
    // Clear existing confetti
    container.innerHTML = '';
    
    // Create new confetti pieces
    for (let i = 0; i < 50; i++) {
        createConfettiPiece(container);
    }
}

function createConfettiPiece(container) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random colors
    const colors = ['#ff69b4', '#dda0dd', '#ffb6c1', '#f0e6ff', '#ffd1dc'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Random position and properties
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    
    // Random shapes
    if (Math.random() > 0.5) {
        confetti.style.borderRadius = '50%';
    }
    
    container.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
        }
    }, 5000);
}

// Music Control System
function initializeMusicControl() {
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('backgroundMusic');
    
    if (!musicBtn || !audio) return;
    
    musicBtn.addEventListener('click', () => {
        if (musicPlaying) {
            audio.pause();
            musicBtn.textContent = '🎵 Play Birthday Music';
            musicPlaying = false;
        } else {
            // For demo purposes, we'll create a simple tone
            // In real implementation, you would load an actual audio file
            playBirthdayTune();
            musicBtn.textContent = '⏸️ Pause Music';
            musicPlaying = true;
        }
    });
}

// Simple birthday tune using Web Audio API
function playBirthdayTune() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [
        { freq: 261.63, duration: 0.5 }, // C
        { freq: 261.63, duration: 0.5 }, // C
        { freq: 293.66, duration: 1.0 }, // D
        { freq: 261.63, duration: 1.0 }, // C
        { freq: 349.23, duration: 1.0 }, // F
        { freq: 329.63, duration: 2.0 }, // E
    ];
    
    let currentTime = audioContext.currentTime;
    
    notes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(note.freq, currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + note.duration);
        
        oscillator.start(currentTime);
        oscillator.stop(currentTime + note.duration);
        
        currentTime += note.duration;
    });
    
    // Reset music button after tune finishes
    setTimeout(() => {
        document.getElementById('musicBtn').textContent = '🎵 Play Birthday Music';
        musicPlaying = false;
    }, currentTime * 1000);
}

// Photo Gallery System
function initializePhotoGallery() {
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    
    photoPlaceholders.forEach((placeholder, index) => {
        placeholder.addEventListener('click', () => {
            handlePhotoUpload(placeholder, index);
        });
        
        // Drag and drop functionality
        placeholder.addEventListener('dragover', (e) => {
            e.preventDefault();
            placeholder.style.borderColor = '#ff69b4';
            placeholder.style.background = 'rgba(255, 105, 180, 0.1)';
        });
        
        placeholder.addEventListener('dragleave', () => {
            placeholder.style.borderColor = '#ffb6c1';
            placeholder.style.background = 'rgba(255, 255, 255, 0.8)';
        });
        
        placeholder.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                loadImage(files[0], placeholder);
            }
        });
    });
}

function handlePhotoUpload(placeholder, index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            loadImage(file, placeholder);
        }
    });
    
    input.click();
}

function loadImage(file, placeholder) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '15px';
        
        // Clear placeholder content and add image
        placeholder.innerHTML = '';
        placeholder.appendChild(img);
        
        // Add a nice hover effect
        placeholder.style.border = '3px solid #ff69b4';
        
        // Add click to view larger
        img.addEventListener('click', () => {
            showImageModal(e.target.result);
        });
    };
    
    reader.readAsDataURL(file);
}

function showImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(255, 105, 180, 0.5);
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: #ff69b4;
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Trigger animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Utility Functions
function addHeartAnimation() {
    // Add floating hearts animation to any page
    const hearts = ['💕', '💖', '💝', '💗', '💓'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: 2rem;
                pointer-events: none;
                z-index: 1000;
                animation: heartFloat 4s ease-out forwards;
            `;
            
            // Add the heart float animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes heartFloat {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 4000);
        }, i * 500);
    }
}

// Add special interactions
document.addEventListener('click', (e) => {
    // Add heart burst on certain clicks
    if (e.target.classList.contains('heart-pulse') || 
        e.target.classList.contains('floating-hearts')) {
        addHeartAnimation();
    }
});

// Auto-advance feature (optional - can be enabled)
function enableAutoAdvance(intervalSeconds = 15) {
    setInterval(() => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        } else {
            showPage(1); // Loop back to beginning
        }
    }, intervalSeconds * 1000);
}

// Uncomment the line below to enable auto-advance every 15 seconds
// enableAutoAdvance(15);