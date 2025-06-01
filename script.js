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

// Create and manage stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) {
        const container = document.createElement('div');
        container.className = 'stars';
        document.body.appendChild(container);
    }
    
    const container = document.querySelector('.stars');
    container.innerHTML = ''; // Clear existing stars
    
    // Create approximately 20 stars per viewport
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const numberOfStars = Math.floor((viewportHeight * viewportWidth) / (1920 * 1080) * 20);
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size between 2px and 4px
        const size = 2 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random twinkle duration between 2s and 4s
        star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 2}s`);
        
        container.appendChild(star);
    }
}

// Initialize stars and handle window resize
createStars();
window.addEventListener('resize', createStars);

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

// Add Google Maps
function initMap() {
    // Replace with your venue's coordinates
    const venueLocation = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    
    const map = new google.maps.Map(document.getElementById('venue-map'), {
        zoom: 15,
        center: venueLocation,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{"color": "#1a237e"}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#ffa726"}]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: venueLocation,
        map: map,
        title: 'Wedding Venue'
    });
}

// Add floating leaves throughout the page
function createFloatingLeaves() {
    const leaves = ['🍂', '🍁', '🍃'];
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const floatingLeaves = document.createElement('div');
        floatingLeaves.className = 'floating-leaves';
        section.appendChild(floatingLeaves);
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const leaf = document.createElement('div');
                leaf.className = 'floating-leaf';
                leaf.innerHTML = leaves[Math.floor(Math.random() * leaves.length)];
                leaf.style.left = Math.random() * 100 + '%';
                leaf.style.animationDelay = Math.random() * 5 + 's';
                floatingLeaves.appendChild(leaf);
                
                leaf.addEventListener('animationend', () => {
                    leaf.remove();
                });
            }, i * 3000);
        }
    });
}

// Start floating leaves animation
createFloatingLeaves();
setInterval(createFloatingLeaves, 15000); 