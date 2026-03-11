// ══════════════════════════════════════════
// main.js — App init, loading screen,
// scroll reveals, counter animations,
// back-to-top, scroll progress bar,
// hero word cycling, hero slideshow,
// gear/awards strips
// ══════════════════════════════════════════

(function () {

  // ─── Loading Screen (800ms fast reveal) ───
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('loader-hidden');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 800);
      }, 800);
    });
  }

  // ─── Scroll Progress Bar ───
  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ─── Hero Word Cycling ───
  function initHeroWordCycling() {
    if (typeof HERO_WORDS === 'undefined' || !HERO_WORDS.length) return;

    const wordEl = document.getElementById('heroCyclingWord');
    if (!wordEl) return;

    let currentIndex = 0;

    setInterval(() => {
      // Fade out
      wordEl.classList.add('fade-out');
      wordEl.classList.remove('fade-in');

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % HERO_WORDS.length;
        wordEl.textContent = HERO_WORDS[currentIndex];

        // Fade in
        wordEl.classList.remove('fade-out');
        wordEl.classList.add('fade-in');
      }, 500);
    }, 3000);
  }

  // ─── Hero Slideshow with Ken Burns (full-bleed) ───
  function initHeroSlideshow() {
    if (typeof HERO_IMAGES === 'undefined' || !HERO_IMAGES.length) return;

    const slide1 = document.getElementById('heroSlide1');
    const slide2 = document.getElementById('heroSlide2');
    if (!slide1 || !slide2) return;

    let currentIndex = 0;
    let showingSlide1 = true;

    // Preload images
    HERO_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src.replace('w=800&h=1100', 'w=1920&h=1080');
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % HERO_IMAGES.length;
      const newSrc = HERO_IMAGES[currentIndex].replace('w=800&h=1100', 'w=1920&h=1080');

      if (showingSlide1) {
        slide2.src = newSrc;
        slide2.classList.add('active');
        slide1.classList.remove('active');
      } else {
        slide1.src = newSrc;
        slide1.classList.add('active');
        slide2.classList.remove('active');
      }

      showingSlide1 = !showingSlide1;
    }, 5000);
  }

  // ─── Scroll-Reveal Observer ───
  function initScrollReveal() {
    const observerOpts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOpts);

    function observeElements() {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
        observer.observe(el);
      });
    }

    observeElements();

    // Expose refresh function globally
    window.refreshScrollReveal = observeElements;
  }

  // ─── Animated Counters for Stats ───
  function initStatCounters() {
    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;

    let counted = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsBar);
  }

  function animateCounters() {
    document.querySelectorAll('.stat-num').forEach(el => {
      const text = el.getAttribute('data-value') || el.textContent;
      const match = text.match(/^(\d+)/);

      if (!match) return; // skip non-numeric like infinity

      const target = parseInt(match[1], 10);
      const suffix = text.replace(/^\d+/, '');
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      el.textContent = '0' + suffix;
      requestAnimationFrame(update);
    });
  }

  // ─── Back to Top Button ───
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Build Crew Grid ───
  function initCrewGrid() {
    const grid = document.getElementById('crewGrid');
    if (!grid || typeof CREW_MEMBERS === 'undefined') return;

    CREW_MEMBERS.forEach((member, i) => {
      const card = document.createElement('div');
      card.className = 'crew-card scroll-reveal';
      card.style.animationDelay = `${i * 0.1}s`;

      card.innerHTML = `
        <div class="crew-card-img-wrap">
          <img src="${member.img}" alt="${member.name}" class="crew-card-img" loading="lazy" />
          <div class="crew-card-overlay">
            <div class="crew-card-bio">${member.bio}</div>
          </div>
        </div>
        <div class="crew-card-info">
          <div class="crew-card-name">${member.name}</div>
          <div class="crew-card-role">${member.role}</div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // ─── Build Gear & Awards Strips ───
  function initStrips() {
    // Gear strip
    const gearContainer = document.getElementById('gearList');
    if (gearContainer && typeof GEAR_LIST !== 'undefined') {
      GEAR_LIST.forEach((item, i) => {
        const span = document.createElement('span');
        span.className = 'gear-item';
        span.textContent = item;
        gearContainer.appendChild(span);

        if (i < GEAR_LIST.length - 1) {
          const divider = document.createElement('span');
          divider.className = 'gear-divider';
          divider.textContent = '/';
          gearContainer.appendChild(divider);
        }
      });
    }

    // Awards strip
    const awardsContainer = document.getElementById('awardsList');
    if (awardsContainer && typeof AWARDS !== 'undefined') {
      AWARDS.forEach((item, i) => {
        const span = document.createElement('span');
        span.className = 'award-item';
        span.textContent = item;
        awardsContainer.appendChild(span);

        if (i < AWARDS.length - 1) {
          const divider = document.createElement('span');
          divider.className = 'award-divider';
          divider.textContent = '/';
          awardsContainer.appendChild(divider);
        }
      });
    }
  }

  // ─── Keyboard nav support ───
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const menu = document.getElementById("mobileMenu");
      if (menu && menu.classList.contains("open")) {
        menu.classList.remove("open");
      }
      // Also close lightbox
      const lightbox = document.querySelector('.lightbox-overlay.lightbox-active');
      if (lightbox) {
        lightbox.classList.remove('lightbox-active');
        lightbox.classList.add('lightbox-exit');
        setTimeout(() => lightbox.remove(), 400);
      }
    }
  });

  // ─── Run ───
  initLoader();

  document.addEventListener("DOMContentLoaded", () => {
    initScrollProgress();
    initScrollReveal();
    initStatCounters();
    initBackToTop();
    initHeroWordCycling();
    initHeroSlideshow();
    initCrewGrid();
    initStrips();

    console.log("%cFIXFRAME — India's Premier Visual Production Crew", "font-family:serif; font-style:italic; font-size:18px; color:#c9a96e; background:#050505; padding:10px 20px;");
  });

})();
