// Scroll animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => observer.observe(el));

// Mobile menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Navbar scroll effect
const navbar = document.getElementById("navbar");
const appContainer = document.getElementById("app") || window;

function handleScroll() {
  const top =
    appContainer === window ? window.scrollY : appContainer.scrollTop;
  if (top > 50) {
    navbar.classList.add(
      "bg-white/95",
      "backdrop-blur-lg",
      "shadow-md"
    );
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove(
      "bg-white/95",
      "backdrop-blur-lg",
      "shadow-md"
    );
    navbar.classList.add("bg-transparent");
  }
}
if (navbar) {
  appContainer.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleScroll);
}

// FAQ toggle (for pages where FAQ exists)
document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    document.querySelectorAll(".faq-content").forEach((c) => {
      if (c !== content) {
        c.classList.add("hidden");
        const iconEl = c.previousElementSibling.querySelector(".faq-icon");
        if (iconEl) iconEl.classList.remove("rotate-180");
      }
    });

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});

// Contact form success animation
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.classList.remove("hidden");
    contactForm.reset();
    setTimeout(() => formSuccess.classList.add("hidden"), 5000);
  });
}
