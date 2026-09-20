import Image from 'next/image'

const galleryItems = [
  { src: '/assets/collection_1/bridal.webp', label: 'Bridal Set', w: 800, h: 600 },
  { src: '/assets/collection_1/necklace.webp', label: 'Gold Necklace', w: 800, h: 600 },
  { src: '/assets/collection_1/bangle.webp', label: 'Gold Bangle', w: 800, h: 600 },
  { src: '/assets/collection_1/ring.webp', label: 'Signature Ring', w: 800, h: 600 },
  { src: '/assets/collection_1/mangalsutra.webp', label: 'Mangalsutra', w: 800, h: 600 },
  { src: '/assets/collection_1/nath.webp', label: 'Nath', w: 800, h: 600 },
  { src: '/assets/collection_1/anklet.webp', label: 'Anklet', w: 800, h: 600 },
  { src: '/assets/collection_1/bracelet.webp', label: 'Bracelet', w: 800, h: 600 },
  { src: '/assets/collection_1/earrings.webp', label: 'Earrings', w: 800, h: 600 },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-header">
        <div className="section-label">Our Craftsmanship</div>
        <h2 className="section-title">The <em>artisan's</em> hand</h2>
        <p className="section-desc">
          <span className="hide-mobile">Every piece is handcrafted with precision. Upload your reference image and we&rsquo;ll bring it to life.</span>
          <span className="show-inline-mobile">Every piece, handcrafted with precision.</span>
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div className="gal-item" key={i}>
            <Image
              className="gal-img"
              src={item.src}
              alt={item.label}
              width={item.w}
              height={item.h}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <div className="gal-overlay">
              <span className="gal-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
