const trustItems = [
  'BIS Hallmarked Gold',
  'Custom Design from Reference',
  'Gold & Silver Specialists',
  'WhatsApp Order & Enquiry',
  '100% Transparency & Purity',
  'Handcrafted with Devotion',
  'Generations of Trust',
]

function TrustItems() {
  return (
    <div className="trust-inner">
      {trustItems.map((text, i) => (
        <div className="trust-item" key={i}>
          <span className="trust-icon">✦</span>
          <span className="trust-text">{text}</span>
        </div>
      ))}
    </div>
  )
}

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-marquee">
        <TrustItems />
        <TrustItems />
      </div>
    </div>
  )
}
