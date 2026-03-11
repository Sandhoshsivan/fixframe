// ══════════════════════════════════════════
// services.jsx — React-powered Ledger grid
// with cleaner cards (no background numbers),
// gold top border on featured, larger prices
// ══════════════════════════════════════════

(function () {

  const { useState } = React;

  function TierCard({ svc, index }) {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className={`tier-card${svc.featured ? " featured" : ""} scroll-reveal`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {svc.featured && <div className="tier-badge">Most Requested</div>}
        <div className="tier-tagline">{svc.tagline}</div>
        <div className="tier-name">{svc.tier}</div>
        <div className="tier-price">{svc.price}</div>
        <div className="tier-desc">{svc.desc}</div>
        <div className="tier-includes">
          {svc.includes.map(item => (
            <div key={item} className="tier-item">
              <div className="tier-item-line"></div>
              <span className="tier-item-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ProcessStep({ step, index }) {
    return (
      <div className="process-step scroll-reveal" style={{ animationDelay: `${index * 0.15}s` }}>
        <div className="process-step-deco">
          <div className="process-num">{step.num}</div>
        </div>
        <div className="process-content">
          <div className="process-title">{step.title}</div>
          <div className="process-desc">{step.desc}</div>
        </div>
      </div>
    );
  }

  function ServicesApp() {
    return (
      <>
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <TierCard key={svc.tier} svc={svc} index={i} />
          ))}
        </div>

        <div className="process-section">
          <div className="process-header">
            <div className="eyebrow">How We Work</div>
            <h3 className="section-title-italic">Our Process</h3>
          </div>
          <div className="process-steps">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("servicesGrid");
    if (container) {
      container.innerHTML = "";
      const root = ReactDOM.createRoot(container);
      root.render(React.createElement(ServicesApp));
    }
  });

})();
