export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        <div>
          <div className="about-section-label">Our Story</div>
          <h2 className="about-title">A legacy of <em>fine craft</em></h2>
          <p className="about-text">
            <span className="hide-mobile">Maa Ambey Jewellers is based in Liluah, Howrah, creating gold and silver jewellery with care, honest guidance, and skilled craftsmanship. Every piece is handled with respect, from your first design idea to the final finish.</span>
            <span className="show-inline-mobile">Maa Ambey Jewellers — Liluah, Howrah. Gold &amp; silver jewellery crafted with care and skilled craftsmanship.</span>
          </p>
          <p className="about-text">
            <span className="hide-mobile">We specialize in custom-made jewellery — you bring the vision, we bring the craft. From bridal sets to everyday elegance, in gold and silver, plain and stone-set.</span>
            <span className="show-inline-mobile">Custom-made jewellery — bridal sets to everyday elegance.</span>
          </p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 300, color: 'var(--gold)' }}>22K</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Pure Gold</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 300, color: 'var(--gold)' }}>925</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Sterling Silver</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 300, color: 'var(--gold)' }}>BIS</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Hallmarked</div>
            </div>
          </div>
        </div>
        <div className="addr-card">
          <div className="addr-title">Visit Our Store</div>
          <div className="addr-item">
            <span className="addr-icon">📱</span>
            <div className="addr-info">
              <strong>WhatsApp &amp; Calls</strong>
              +91 62915 10356
            </div>
          </div>
          <div className="addr-item">
            <span className="addr-icon">🕐</span>
            <div className="addr-info">
              <strong>Shop Hours</strong>
              Tuesday – Sunday:<br />
              10:00 AM – 1:00 PM<br />
              6:00 PM – 9:00 PM<br />
              <span style={{ opacity: 0.6 }}>(Closed on Monday)</span>
            </div>
          </div>
          <div className="addr-item">
            <span className="addr-icon">📍</span>
            <div className="addr-info">
              <strong>Address</strong>
              26/4, New 53 Sailen Dhar Road, Patuapara,<br />
              Liluah, Howrah – 711204, West Bengal
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.3381804!3d22.6301757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s22.6301757%2C88.3381804!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '6px', marginTop: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maa Ambey Jewellers location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
