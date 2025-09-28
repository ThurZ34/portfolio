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
const navItems = document.querySelectorAll('nav ul li');
const indicator = document.querySelector('.nav-indicator');

function updateIndicator(activeLi) {
    if (!activeLi) return;

    navItems.forEach(item => item.classList.remove('active'));
    activeLi.classList.add('active');

    indicator.style.width = `${activeLi.offsetWidth}px`;
    indicator.style.left = `${activeLi.offsetLeft}px`;

    if (activeLi.classList.contains('contact-button')) {
        indicator.style.backgroundColor = 'black';
        indicator.style.borderColor = 'black';
    } else {
        indicator.style.backgroundColor = 'transparent';
        indicator.style.borderColor = 'black';
    }
}

// Set initial indicator position on page load
window.addEventListener('load', () => {
    const initialActiveLi = document.querySelector('nav ul li.active') || document.querySelector('nav ul li:first-child');
    updateIndicator(initialActiveLi);
});

// Update indicator on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const id = entry.target.getAttribute('id');
            const activeLi = document.querySelector(`nav ul li a[href="#${id}"]`).parentElement;
            updateIndicator(activeLi);
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.7 });

sections.forEach(section => {
    observer.observe(section);
});
