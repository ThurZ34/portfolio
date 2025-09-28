// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Moving indicator logic
const sections = document.querySelectorAll('.section');
const navLi = document.querySelectorAll('nav ul li');
const indicator = document.querySelector('.nav-indicator');

function updateIndicator(activeLi) {
    if (!activeLi) return;
    indicator.style.width = `${activeLi.offsetWidth}px`;
    indicator.style.left = `${activeLi.offsetLeft}px`;
}

// Set initial indicator position
window.addEventListener('load', () => {
    const initialActiveLi = document.querySelector('nav ul li:first-child');
    updateIndicator(initialActiveLi);
});

// Update indicator on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeLi = document.querySelector(`nav ul li a[href="#${id}"]`).parentElement;
            updateIndicator(activeLi);
        }
    });
}, { threshold: 0.7 });

sections.forEach(section => {
    observer.observe(section);
});