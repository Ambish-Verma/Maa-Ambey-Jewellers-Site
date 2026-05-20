const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"

const steps = [
  { num: '01', title: 'Send your reference', desc: 'Share a photo or image of the jewellery design you want from Instagram, Pinterest, or anywhere. WhatsApp us directly.' },
  { num: '02', title: 'Get a quote', desc: 'Our artisan will assess your design and provide a price estimate based on weight, metal type (gold/silver), and complexity.' },
  { num: '03', title: 'Confirm & we begin', desc: "Once you approve the quote, we start crafting. We'll share progress updates via WhatsApp throughout the making." },
  { num: '04', title: 'Pickup or delivery', desc: 'Collect from our Liluah store or arrange for safe delivery. Your bespoke piece exactly as imagined.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="how-inner">
        <div>
          <div className="section-label">Simple Process</div>
          <h2 className="section-title">How to <em>order</em></h2>
          <p className="section-desc">
            From reference image to finished jewellery all via WhatsApp. No complicated forms needed.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="https://wa.me/919163395374?text=Hello%20Maa%20Ambey%20Jewellers%2C%20I%20want%20to%20place%20a%20custom%20jewellery%20order."
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="wa-icon" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
              Start on WhatsApp
            </a>
          </div>
        </div>
        <div className="how-steps">
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-num">{step.num}</div>
              <div className="step-body">
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
