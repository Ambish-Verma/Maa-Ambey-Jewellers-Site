export default function Hero() {
  return (
    <section className="hero-split">
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        Maa Ambey Jewellers — Custom Gold & Silver Jewellery in Liluah, Howrah
      </h1>
      <div className="hero-split-card">
        {/* Left: Image */}
        <div className="hero-split-image">
        <div className="hero-split-image-overlay"></div>
        <div className="hero-split-image-text">
          <div className="hero-split-image-line"></div>
          <span>FROM IDEA<br />TO HEIRLOOM</span>
          <div className="hero-split-image-line"></div>
        </div>
      </div>

        {/* Right: Content */}
        <div className="hero-split-content">
        <div className="hero-split-inner">
          <div className="hero-eyebrow">
            <span>Your Idea</span>
            <span className="hero-dot">&#9679;</span>
            <span>Our Craft</span>
            <span className="hero-dot">&#9679;</span>
            <span>Timeless Jewellery</span>
          </div>

          <h1 className="hero-split-title">
            Custom jewellery.<br />
            <em>Made for you.</em>
          </h1>

          <p className="hero-split-sub">
            Not online shopping &mdash;<br />
            a personal jewellery-making experience.
          </p>

          <p className="hero-split-desc">
            Bring your idea, a sketch, or a reference photo. <span className="hide-mobile">We&rsquo;ll craft it in 22K gold or 925 silver.</span>
          </p>

          <div className="hero-split-actions">
            <a href="/#order" className="btn-primary hero-split-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Start Your Design
            </a>
            <a href="/#gallery" className="btn-outline hero-split-btn">View Our Craft</a>
          </div>

          {/* Steps */}
          <div className="hero-split-steps">
            <div className="hero-step">
              <span className="hero-step-num">01</span>
              <div className="hero-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="21.17" y1="8" x2="12" y2="8" /><line x1="3.95" y1="6.06" x2="8.54" y2="14" /><line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                </svg>
              </div>
              <span className="hero-step-text">Choose<br />your piece</span>
            </div>
            <div className="hero-step-divider"></div>
            <div className="hero-step">
              <span className="hero-step-num">02</span>
              <div className="hero-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span className="hero-step-text">Share<br />your idea</span>
            </div>
            <div className="hero-step-divider"></div>
            <div className="hero-step">
              <span className="hero-step-num">03</span>
              <div className="hero-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="hero-step-text">We craft<br />it for you</span>
            </div>
          </div>
        </div>

        {/* Decorative star */}
        <div className="hero-star" style={{ top: '8%', right: '5%', fontSize: '18px' }}>&#10022;</div>
        <div className="hero-star" style={{ bottom: '15%', right: '3%', fontSize: '12px', animationDelay: '1.5s' }}>&#10022;</div>
        </div>
      </div>
    </section>
  )
}
