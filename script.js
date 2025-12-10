// ===== TAB SWITCHING FUNCTION =====
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const btns = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    btns.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

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
document.querySelectorAll('.exp-card, .project-card, .timeline-item').forEach(el => {
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
const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-fill');
    const skillsSection = document.querySelector('.skills');
    
    if (!skillsSection) return;
    
    const skillsTop = skillsSection.offsetTop;
    const skillsHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > skillsTop + (skillsHeight / 3)) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = width;
        });
    }
};

window.addEventListener('scroll', animateSkills);

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to Miranda Dewi Portfolio!', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with 💖', 'color: #FF1493; font-size: 14px;');