const categories = [
  { icon: '/assets/home_page/01-ring.svg', name: 'Rings', sub: 'Gold & Silver' },
  { icon: '/assets/home_page/02-necklace.svg', name: 'Necklaces', sub: 'Sets & Singles' },
  { icon: '/assets/home_page/03-earring.svg', name: 'Earrings', sub: 'Studs, Drops & Jhumkas' },
  { icon: '/assets/home_page/04-bangles.svg', name: 'Bangles', sub: 'Plain & Designed' },
  { icon: '/assets/home_page/05-chain.svg', name: 'Chains', sub: 'All Styles & Weights' },
  { icon: '/assets/home_page/06-pendant.svg', name: 'Pendants', sub: 'Gold & Silver' },
  { icon: '/assets/home_page/07-kada.svg', name: 'Kadas & Bracelets', sub: 'Traditional & Modern' },
  { icon: '/assets/home_page/08-mangtika.svg', name: 'Maang Tikka', sub: 'Bridal & Festive' },
  { icon: '/assets/home_page/09-nosepin.svg', name: 'Nose Pins', sub: 'Nath & Studs' },
  { icon: '/assets/home_page/10-anklet.svg', name: 'Anklets', sub: 'Silver Payal' },
  { icon: '/assets/home_page/11-mangalsutra.svg', name: 'Mangalsutra', sub: 'Traditional Designs' },
  { icon: '/assets/home_page/12-bridalset.svg', name: 'Bridal Sets', sub: 'Complete Collections' },
]

export default function Categories() {
  return (
    <section id="categories">
      <div className="cat-header">
        <div className="section-label">Our Collections</div>
        <h2 className="section-title">Every piece, <em>made to order</em></h2>
        <p className="section-desc">
          From traditional temple jewellery to modern minimalist designs in 18K, 22K gold and pure 925 silver.
        </p>
      </div>
      <div className="cat-grid">
        {categories.map((cat, i) => (
          <div className="cat-card" key={i}>
            <img src={cat.icon} alt={cat.name} className="cat-emoji" />
            <div className="cat-name">{cat.name}</div>
            <div className="cat-sub">{cat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
