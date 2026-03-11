// ══════════════════════════════════════════
// workgrid.js — Asymmetric masonry archive grid
// with staggered animations, fullscreen lightbox
// with image (60%) + info panel (40%)
// ══════════════════════════════════════════

(function () {

  let currentFilter = "All";

  function buildWorkGrid(filter) {
    const grid = document.getElementById("workGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = filter === "All" ? WORKS : WORKS.filter(w => w.category === filter);

    filtered.forEach((work, i) => {
      const card = document.createElement("div");
      card.className = `work-card work-card-${i + 1}`;
      card.style.animationDelay = `${i * 0.08}s`;
      card.dataset.workId = work.id;

      card.innerHTML = `
        <div class="work-card-bg" style="background:${work.grad}"></div>
        <img class="work-card-img" src="${work.img}" alt="${work.title}" loading="lazy" />
        <div class="gallery-noise"></div>
        <div class="work-card-badge">${work.category}</div>
        <div class="work-card-bottom">
          <div class="work-card-bottom-title">${work.title}</div>
          <div class="work-card-bottom-client">${work.client}</div>
        </div>
        <div class="work-card-hover-overlay">
          <div class="work-card-hover-text">View Project &rarr;</div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(work));
      grid.appendChild(card);
    });

    // Re-observe newly created elements for scroll reveal
    if (window.refreshScrollReveal) {
      window.refreshScrollReveal();
    }
  }

  // ─── Fullscreen Lightbox: image 60% + info 40% ───
  function openLightbox(work) {
    // Remove existing lightbox if any
    const existing = document.querySelector('.lightbox-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-close">&times;</button>
      <div class="lightbox-content">
        <div class="lightbox-image-wrap">
          <img src="${work.img}" alt="${work.title}" />
        </div>
        <div class="lightbox-info">
          <div class="lightbox-cat">${work.category}</div>
          <div class="lightbox-title">${work.title}</div>
          <div class="lightbox-client">${work.client}</div>
          <div class="lightbox-meta">
            <div class="lightbox-meta-item">Year<span>${work.year}</span></div>
            <div class="lightbox-meta-item">Location<span>${work.location}</span></div>
            <div class="lightbox-meta-item">Category<span>${work.category}</span></div>
          </div>
          <div class="lightbox-desc">${work.description || ''}</div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Animate in
    requestAnimationFrame(() => {
      overlay.classList.add('lightbox-active');
    });

    // Close handlers
    overlay.querySelector('.lightbox-close').addEventListener('click', () => closeLightbox(overlay));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox(overlay);
    });

    // ESC key
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeLightbox(overlay);
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  function closeLightbox(overlay) {
    overlay.classList.remove('lightbox-active');
    overlay.classList.add('lightbox-exit');
    setTimeout(() => overlay.remove(), 400);
  }

  function initFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        buildWorkGrid(currentFilter);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildWorkGrid("All");
    initFilters();
  });

})();
