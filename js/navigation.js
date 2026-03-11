// ══════════════════════════════════════════
// navigation.js — Section routing + navbar
// with smooth fade transitions and smart hide/show
// ══════════════════════════════════════════

(function () {

  // ─── Smart Navbar: hide on scroll down, show on scroll up ───
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 100) {
          nav.classList.add("scrolled");
          if (window.scrollY > lastScrollY && window.scrollY > 200) {
            nav.classList.add("nav-hidden");
          } else {
            nav.classList.remove("nav-hidden");
          }
        } else {
          nav.classList.remove("scrolled", "nav-hidden");
        }
        lastScrollY = window.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  });

  // ─── Section switching with fade transition ───
  let isTransitioning = false;

  function showSection(id) {
    if (isTransitioning) return;

    const currentSection = document.querySelector(".section.active");
    const targetSection = document.getElementById(id);

    if (!targetSection || currentSection === targetSection) return;

    isTransitioning = true;

    // Fade out current section
    if (currentSection) {
      currentSection.classList.add("section-exit");

      setTimeout(() => {
        currentSection.classList.remove("active", "section-exit");

        // Activate and fade in new section
        targetSection.classList.add("active", "section-enter");
        window.scrollTo({ top: 0 });

        // Trigger scroll-reveal observer for new section
        if (window.refreshScrollReveal) {
          window.refreshScrollReveal();
        }

        // Remove entry animation class after it plays
        setTimeout(() => {
          targetSection.classList.remove("section-enter");
          isTransitioning = false;
        }, 600);
      }, 400);
    } else {
      targetSection.classList.add("active", "section-enter");
      window.scrollTo({ top: 0 });
      setTimeout(() => {
        targetSection.classList.remove("section-enter");
        isTransitioning = false;
      }, 600);
    }

    // Highlight active nav link
    document.querySelectorAll(".nav-link").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.section === id);
    });
  }

  // Wire up nav links (desktop nav, logo, mobile nav)
  document.querySelectorAll(".nav-link, .logo, .mobile-nav-link").forEach(btn => {
    btn.addEventListener("click", () => {
      const sec = btn.dataset.section || "home";
      showSection(sec);
      closeMobileMenu();
    });
  });

  // Wire up footer links
  document.querySelectorAll(".footer-link").forEach(btn => {
    btn.addEventListener("click", () => {
      const sec = btn.dataset.section || "home";
      showSection(sec);
    });
  });

  // Wire up CTA buttons (btn-primary / btn-ghost with data-section)
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-section]");
    if (el && !el.classList.contains("nav-link") && !el.classList.contains("logo") && !el.classList.contains("mobile-nav-link") && !el.classList.contains("footer-link")) {
      showSection(el.dataset.section);
    }
  });

  // ─── Mobile menu ───
  const hamburger   = document.getElementById("hamburger");
  const mobileMenu  = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");

  function openMobileMenu()  { mobileMenu.classList.add("open"); }
  function closeMobileMenu() { mobileMenu.classList.remove("open"); }

  hamburger.addEventListener("click", openMobileMenu);
  mobileClose.addEventListener("click", closeMobileMenu);

  // Expose globally so other modules can call showSection
  window.showSection = showSection;

})();
