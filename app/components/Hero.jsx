export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      {/* Decorative Elements */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-star" style={{ top: '15%', left: '10%', fontSize: '20px', animationDelay: '0s' }}>✦</div>
      <div className="hero-star" style={{ top: '75%', right: '12%', fontSize: '32px', animationDelay: '1.5s' }}>✦</div>
      <div className="hero-star" style={{ top: '25%', right: '8%', fontSize: '14px', animationDelay: '3s' }}>✦</div>
      <div className="hero-star" style={{ top: '85%', left: '15%', fontSize: '18px', animationDelay: '0.7s' }}>✦</div>

      <div className="hero-content">
        <div className="hero-eyebrow">Your Design, Our Craft</div>
        <h1 className="hero-title">Crafted for<br /><em>every occasion</em></h1>
        <p className="hero-sub">
          Send us your reference image. We'll handcraft it in gold or silver exactly as you envision.
        </p>
        <div className="hero-actions">
          <a href="#order" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Place Custom Order
          </a>
          <a href="#gallery" className="btn-outline">View Our Work</a>
        </div>
      </div>
    </section>
  )
}
