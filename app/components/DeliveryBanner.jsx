export default function DeliveryBanner() {
  return (
    <section className="delivery-banner">
      <div className="delivery-banner-inner">
        <div className="delivery-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <span className="delivery-label">Delivering Across India</span>
        </div>
        <div className="delivery-divider"></div>
        <div className="delivery-right">
          Ship your design anywhere &mdash; we handcraft and deliver to your doorstep
        </div>
      </div>
      <div className="delivery-sub">
        From Howrah to every corner of India &mdash; safe &amp; insured delivery
      </div>
    </section>
  )
}
