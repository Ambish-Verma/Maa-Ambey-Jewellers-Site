const galleryItems = [
  { src: '/assets/collection_1/bridal.webp', label: 'Bridal Set' },
  { src: '/assets/collection_1/necklace.webp', label: 'Gold Necklace' },
  { src: '/assets/collection_1/bangle.webp', label: 'Gold Bangle' },
  { src: '/assets/collection_1/ring.webp', label: 'Signature Ring' },
  { src: '/assets/collection_1/mangalsutra.webp', label: 'Mangalsutra' },
  { src: '/assets/collection_1/nath.webp', label: 'Nath' },
  { src: '/assets/collection_1/anklet.webp', label: 'Anklet' },
  { src: '/assets/collection_1/bracelet.webp', label: 'Bracelet' },
  { src: '/assets/collection_1/earrings.webp', label: 'Earrings' },
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
            <img className="gal-img" src={item.src} alt={item.label} loading="lazy" />
            <div className="gal-overlay">
              <span className="gal-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
