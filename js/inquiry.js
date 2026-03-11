// ══════════════════════════════════════════
// inquiry.js — Contact form with pill selector,
// budget range dropdown, and enhanced fields
// ══════════════════════════════════════════

(function () {

  function buildPills() {
    const container = document.getElementById("projectPills");
    const input     = document.getElementById("projectInput");
    if (!container || !input) return;

    PROJECT_TYPES.forEach(type => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill-btn";
      btn.textContent = type;

      btn.addEventListener("click", () => {
        // Deselect all
        container.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("selected"));
        // Select clicked
        btn.classList.add("selected");
        input.value = type;
      });

      container.appendChild(btn);
    });
  }

  function buildBudgetDropdown() {
    const select = document.getElementById("budgetSelect");
    if (!select || typeof BUDGET_RANGES === 'undefined') return;

    BUDGET_RANGES.forEach(range => {
      const option = document.createElement("option");
      option.value = range;
      option.textContent = range;
      select.appendChild(option);
    });
  }

  function bindForm() {
    const form    = document.getElementById("inquiryForm");
    const success = document.getElementById("formSuccess");
    if (!form || !success) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simple validation feedback on empty project
      const projInput = document.getElementById("projectInput");
      if (!projInput.value) {
        const pills = document.getElementById("projectPills");
        pills.style.outline = "1px solid var(--gold)";
        pills.style.outlineOffset = "8px";
        setTimeout(() => { pills.style.outline = ""; }, 1500);
        return;
      }

      // Animate out form, show success
      form.style.transition = "opacity 0.5s ease";
      form.style.opacity = "0";
      setTimeout(() => {
        form.style.display = "none";
        success.style.display = "block";
      }, 500);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildPills();
    buildBudgetDropdown();
    bindForm();
  });

})();
