// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('nav a, .nav-link');

if (navToggle && navMenu) {
    // Toggle menu when hamburger clicked
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ===== TAB SWITCHING FUNCTION =====
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the data-tab attribute value
        const tabId = button.getAttribute('data-tab');
        
        // Show corresponding tab content
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ===== ANIMATE ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { 
    threshold: 0.1 
});

// Apply animation to elements
document.querySelectorAll('.exp-card, .project-card, .timeline-item, .skill-description').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// ===== SKILL BARS ANIMATION =====
// Removed as skills now use descriptions instead of bars

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to Miranda Dewi Portfolio!', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with 💖', 'color: #FF1493; font-size: 14px;');