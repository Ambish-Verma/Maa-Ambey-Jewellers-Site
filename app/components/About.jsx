const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"

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
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://maps.google.com/?q=22.6301757,88.3381804"
              className="addr-wa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: '1', justifyContent: 'center', minWidth: '140px' }}
            >
              <svg style={{ width: '16px', height: '16px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Get Directions
            </a>
            <a
              href="https://wa.me/916291510356?text=Hello%20Maa%20Ambey%20Jewellers%2C%20I%20want%20to%20enquire%20about%20custom%20jewellery."
              className="addr-wa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: '1', justifyContent: 'center', minWidth: '140px' }}
            >
              <svg style={{ width: '16px', height: '16px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Chat on WhatsApp
            </a>
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
