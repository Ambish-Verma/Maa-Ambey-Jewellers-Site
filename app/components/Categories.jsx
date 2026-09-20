import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { icon: '/assets/home_page/01-ring.svg', name: 'Rings', slug: 'ring', sub: 'Gold & Silver' },
  { icon: '/assets/home_page/02-necklace.svg', name: 'Necklaces', slug: 'necklace', sub: 'Sets & Singles' },
  { icon: '/assets/home_page/03-earring.svg', name: 'Earrings', slug: 'earring', sub: 'Studs, Drops & Jhumkas' },
  { icon: '/assets/home_page/04-bangles.svg', name: 'Bangles', slug: 'bangle', sub: 'Plain & Designed' },
  { icon: '/assets/home_page/05-chain.svg', name: 'Chains', slug: 'chain', sub: 'All Styles & Weights' },
  { icon: '/assets/home_page/06-pendant.svg', name: 'Pendants', slug: 'pendant', sub: 'Gold & Silver' },
  { icon: '/assets/home_page/07-kada.svg', name: 'Kadas & Bracelets', slug: 'kada', sub: 'Traditional & Modern' },
  { icon: '/assets/home_page/08-mangtika.svg', name: 'Maang Tikka', slug: 'maang-tikka', sub: 'Bridal & Festive' },
  { icon: '/assets/home_page/09-nosepin.svg', name: 'Nose Pins', slug: 'nose-pin', sub: 'Nath & Studs' },
  { icon: '/assets/home_page/10-anklet.svg', name: 'Anklets', slug: 'anklet', sub: 'Silver Payal' },
  { icon: '/assets/home_page/11-mangalsutra.svg', name: 'Mangalsutra', slug: 'mangalsutra', sub: 'Traditional Designs' },
  { icon: '/assets/home_page/12-bridalset.svg', name: 'Bridal Sets', slug: 'bridal-set', sub: 'Complete Collections' },
]

export default function Categories() {
  return (
    <section id="categories">
      <div className="cat-header">
        <div className="section-label">Get Design Idea</div>
        <h2 className="section-title">Design it yourself, <em>we'll craft it</em></h2>
        <p className="section-desc">
          Choose a category, <span className="show-inline-mobile">describe your vision.</span><span className="hide-mobile">describe your vision, and let our AI generate a custom design — handcrafted in 22K gold &amp; 925 silver.</span>
        </p>
      </div>
      <div className="cat-grid">
        {categories.map((cat, i) => (
          <Link href={`/order/${cat.slug}`} key={i} className="cat-card" style={{ textDecoration: 'none' }}>
            <Image src={cat.icon} alt={cat.name} className="cat-emoji" width={48} height={48} loading="lazy" />
            <div className="cat-name">{cat.name}</div>
            <div className="cat-sub">{cat.sub}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
