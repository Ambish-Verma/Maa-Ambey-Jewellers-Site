const galleryItems = [
  { icon: '💍', label: 'Signature Collection' },
  { icon: '📿', label: 'Gold Necklace' },
  { icon: '✨', label: 'Jhumkas' },
  { icon: '⌚', label: 'Gold Bangle' },
  { icon: '🔗', label: 'Gold Chain' },
  { icon: '🌸', label: 'Silver Pendant' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-header">
        <div className="section-label">Our Craftsmanship</div>
        <h2 className="section-title">The <em>artisan's</em> hand</h2>
        <p className="section-desc">
          Every piece is handcrafted with precision. Upload your reference image and we'll bring it to life.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div className="gal-item" key={i}>
            <div className="gal-placeholder">
              <div className="gal-placeholder-icon">{item.icon}</div>
              <div className="gal-placeholder-text">Add your photo here</div>
            </div>
            <div className="gal-overlay">
              <span className="gal-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
