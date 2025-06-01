// Smooth scrolling for navigation links
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

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Timeline events animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline events
document.querySelectorAll('.timeline-event').forEach(event => {
    observer.observe(event);
});

// Observe article cards
document.querySelectorAll('.article-card').forEach(card => {
    observer.observe(card);
});

// Add floating autumn leaves effect
function createFloatingLeaf() {
    const leaf = document.createElement('div');
    leaf.innerHTML = ['🍂', '🍁', '🍃'][Math.floor(Math.random() * 3)];
    leaf.style.position = 'fixed';
    leaf.style.top = '-50px';
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.fontSize = '1.5rem';
    leaf.style.pointerEvents = 'none';
    leaf.style.zIndex = '1';
    leaf.style.opacity = '0.7';
    leaf.style.animation = `fall ${10 + Math.random() * 10}s linear forwards`;
    
    document.body.appendChild(leaf);
    
    setTimeout(() => {
        leaf.remove();
    }, 20000);
}

// Create floating leaves periodically
setInterval(createFloatingLeaf, 3000);

// Add stars twinkling effect
function createTwinklingStar() {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.fontSize = '1rem';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '1';
    star.style.animation = 'twinkle 2s ease-in-out';
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 2000);
}

// Create twinkling stars periodically
setInterval(createTwinklingStar, 2000);

// Enhanced hover effects for timeline events
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('mouseenter', function() {
        // Add sparkle effect
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.top = '-10px';
        sparkle.style.right = '-10px';
        sparkle.style.fontSize = '1.2rem';
        sparkle.style.animation = 'sparkle 1s ease-in-out';
        sparkle.style.pointerEvents = 'none';
        
        this.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
});

// Add CSS animation for sparkle effect
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
    
    .nav-link.active {
        color: #ffa726;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Color disc hover effects
document.querySelectorAll('.color-disc').forEach(disc => {
    disc.addEventListener('mouseenter', function() {
        this.style.boxShadow = `0 0 20px ${this.style.backgroundColor}`;
    });
    
    disc.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Photo album button enhanced effect
const photoBtn = document.querySelector('.photo-album-btn');
if (photoBtn) {
    photoBtn.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #ffa726, #ff6f00)';
    });
    
    photoBtn.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #d4af37, #ffa726)';
    });
} 