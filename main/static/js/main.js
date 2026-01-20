// ================================
// Portfolio Main JavaScript
// ================================

(function () {

    /* ==============================
       NAVBAR ACTIVE LINK (DJANGO SAFE)
    ============================== */
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (currentPath === link.getAttribute("href")) {
            link.classList.add("active");
        }
    });


    /* ==============================
       MOBILE MENU TOGGLE
    ============================== */
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            menuToggle.classList.toggle("open");
        });

        // Close menu on link click (mobile)
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuToggle.classList.remove("open");
            });
        });
    }


    /* ==============================
       SMOOTH SCROLL
    ============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    /* ==============================
       CONTACT FORM UX
    ============================== */
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", () => {
            const btn = form.querySelector("button[type='submit']");
            if (btn) {
                btn.textContent = "Sending...";
                btn.disabled = true;
            }
        });
    }


    /* ==============================
       FADE-IN ON SCROLL
    ============================== */
    const animatedItems = document.querySelectorAll(
        ".about-card, .project-card, .highlight-card, .contact-card"
    );

    if (animatedItems.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedItems.forEach(item => {
            item.classList.add("fade-up");
            observer.observe(item);
        });
    }


    /* ==============================
       THEME TOGGLE (PERSISTENT)
    ============================== */
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("light") ? "light" : "dark"
            );

            themeToggle.textContent =
                document.body.classList.contains("light") ? "🌙" : "☀️";
        });
    }

})();
