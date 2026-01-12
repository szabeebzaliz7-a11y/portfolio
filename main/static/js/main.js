// ================================
// Main JavaScript for Portfolio
// ================================

// Navbar active link highlight
(function () {
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
})();

// Smooth scroll for internal links
(function () {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();

// Contact form UX enhancement
(function () {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function () {
        const button = form.querySelector('button[type="submit"]');
        if (button) {
            button.innerText = 'Sending...';
            button.disabled = true;
        }
    });
})();

// Simple fade-in animation on scroll
(function () {
    const elements = document.querySelectorAll('.about-card, .project-card, .highlight-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
})();

// Active nav
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Dark mode
const toggle = document.getElementById("theme-toggle");
if (toggle) {
    toggle.onclick = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme",
            document.body.classList.contains("dark") ? "dark" : "light");
    };
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
}
