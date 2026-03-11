// ══════════════════════════════════════════
// gallery.js — Horizontal scroll gallery
// with parallax, bigger cards, always-visible
// bottom titles (no full overlay on hover)
// ══════════════════════════════════════════

(function () {

  function buildGallery() {
    const track = document.getElementById("galleryTrack");
    if (!track) return;

    WORKS.forEach((work, i) => {
      const card = document.createElement("div");
      card.className = `gallery-card ${work.aspect}`;

      const num = String(i + 1).padStart(2, '0');

      card.innerHTML = `
        <div class="gallery-card-bg" style="background:${work.grad}"></div>
        <img class="gallery-card-img" src="${work.img}" alt="${work.title}" loading="lazy" />
        <div class="gallery-noise"></div>
        <div class="gallery-card-num">${num}</div>
        <div class="gallery-card-bottom">
          <div class="gallery-card-bottom-cat">${work.category}</div>
          <div class="gallery-card-bottom-title">${work.title}</div>
        </div>
      `;

      track.appendChild(card);
    });

    // Arrow controls
    document.getElementById("galleryPrev").addEventListener("click", () => {
      track.scrollBy({ left: -500, behavior: "smooth" });
    });
    document.getElementById("galleryNext").addEventListener("click", () => {
      track.scrollBy({ left: 500, behavior: "smooth" });
    });

    // Touch/drag swipe
    let isDown = false, startX = 0, scrollLeft = 0;

    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.style.cursor = "grabbing";
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener("mouseleave", () => { isDown = false; track.style.cursor = "grab"; });
    track.addEventListener("mouseup",    () => { isDown = false; track.style.cursor = "grab"; });
    track.addEventListener("mousemove",  (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x    = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
    track.style.cursor = "grab";

    // Parallax effect on gallery cards
    initGalleryParallax(track);
  }

  function initGalleryParallax(track) {
    const cards = track.querySelectorAll('.gallery-card');

    function updateParallax() {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = (cardCenter - trackCenter) / trackRect.width;
        const yOffset = distance * 15;
        const img = card.querySelector('.gallery-card-img');
        if (img) {
          img.style.transform = `translateY(${yOffset}px) scale(1)`;
        }
      });
    }

    track.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    requestAnimationFrame(updateParallax);
  }

  // Run after DOM ready
  document.addEventListener("DOMContentLoaded", buildGallery);

})();
