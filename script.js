document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.className = 'mobile-menu-btn';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').appendChild(mobileMenuButton);

    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});