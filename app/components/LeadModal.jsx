'use client'

import { useState, useEffect } from 'react'

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [interest, setInterest] = useState('')
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState('')

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem('lead_submitted')
    if (!alreadySubmitted) {
      const timer = setTimeout(() => setIsOpen(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleName = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '').slice(0, 25)
    setName(val)
    if (errors.name) setErrors(prev => ({ ...prev, name: '' }))
  }

  const handlePhone = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
    setPhone(val)
    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }))
  }

  const handleEmail = (e) => setEmail(e.target.value.slice(0, 50))
  const handleCity = (e) => setCity(e.target.value.replace(/[^a-zA-Z\s]/g, '').slice(0, 30))

  const validate = () => {
    const newErrors = {}
    let firstEl = null
    if (!name.trim() || name.trim().length < 2) { newErrors.name = 'Enter your name'; firstEl = 'name' }
    if (phone.length !== 10) { newErrors.phone = 'Enter a valid 10-digit number'; if (!firstEl) firstEl = 'phone' }
    if (!city.trim()) { newErrors.city = 'City is required'; if (!firstEl) firstEl = 'city' }
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); setToast('Please fill in the required fields correctly.'); setTimeout(() => setToast(''), 4000); return false }
    setErrors({})
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone, email: email.trim() || null, city: city.trim() || null, interest: interest || null }),
      })
      const data = await res.json()
      if (!res.ok) { setToast(data.error || 'Something went wrong.'); setTimeout(() => setToast(''), 4000); setSending(false); return }
      localStorage.setItem('lead_submitted', 'true')
      setSubmitted(true)
      setTimeout(() => close(), 2500)
    } catch {
      setToast('Network error. Please try again.'); setTimeout(() => setToast(''), 4000)
    }
    setSending(false)
  }

  if (!isOpen) return null

  return (
    <div className="lead-overlay" onClick={close}>
      <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lead-close" onClick={close} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="lead-modal-left">
          <img src="/assets/modal.png" alt="Exclusive Jewellery Offers" className="lead-modal-left-img" />
          <div className="lead-modal-left-overlay"></div>
          <div className="lead-modal-left-content">
            <div className="lead-modal-badge">Exclusive For You</div>
            <h2 className="lead-modal-heading">
              Get <em>Special Offers</em><br />on Jewellery
            </h2>
            <div className="lead-modal-hr"></div>
            <p className="lead-modal-subtext">
              Join 10,000+ happy customers who receive early access to new designs, seasonal discounts and custom jewellery deals.
            </p>
          </div>
        </div>

        <div className="lead-modal-right">
          {submitted ? (
            <div className="lead-success">
              <div className="lead-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3D7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="lead-success-title">Thank You!</h3>
              <p className="lead-success-text">You will start receiving exclusive offers on WhatsApp soon.</p>
            </div>
          ) : (
            <div className="lead-form-inner">
              {toast && (
                <div className="lead-toast">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {toast}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="lead-form-group">
                  <label>Your Name *</label>
                  <div className="lead-input-wrap">
                    <span className="lead-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Enter your full name" value={name} onChange={handleName} maxLength={25} style={errors.name ? { borderColor: '#e74c3c' } : {}} />
                  </div>
                  {errors.name && <div className="lead-error">{errors.name}</div>}
                </div>

                <div className="lead-form-group">
                  <label>Phone Number *</label>
                  <div className="lead-input-wrap">
                    <span className="lead-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <input type="tel" placeholder="9876543210" value={phone} onChange={handlePhone} maxLength={10} inputMode="numeric" style={errors.phone ? { borderColor: '#e74c3c' } : {}} />
                  </div>
                  {errors.phone && <div className="lead-error">{errors.phone}</div>}
                </div>

                <div className="lead-form-group">
                  <label>City *</label>
                  <div className="lead-input-wrap">
                    <span className="lead-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <input type="text" placeholder="e.g. Howrah" value={city} onChange={handleCity} maxLength={30} style={errors.city ? { borderColor: '#e74c3c' } : {}} />
                  </div>
                  {errors.city && <div className="lead-error">{errors.city}</div>}
                </div>

                <div className="lead-form-group">
                  <div className="lead-label-row">
                    <label>Email <span className="lead-optional">(optional)</span></label>
                    <span className="lead-privacy-note">We respect your privacy. No spam — only exclusive deals.</span>
                  </div>
                  <div className="lead-input-wrap">
                    <span className="lead-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" />
                      </svg>
                    </span>
                    <input type="email" placeholder="you@example.com" value={email} onChange={handleEmail} maxLength={50} />
                  </div>
                </div>

                <div className="lead-form-group">
                  <label>Interested In <span className="lead-optional">(optional)</span></label>
                  <div className="lead-input-wrap lead-select-wrap">
                    <span className="lead-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h12l4 6-10 13L2 9z" />
                      </svg>
                    </span>
                    <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                      <option value="">Select</option>
                      <option value="Gold Jewellery">Gold</option>
                      <option value="Silver Jewellery">Silver</option>
                      <option value="Both">Both</option>
                      <option value="Custom Design">Custom Design</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="lead-submit" disabled={sending} style={{ opacity: sending ? 0.6 : 1 }}>
                  {sending ? 'Saving...' : 'Submit'}
                </button>
              </form>

              <div className="lead-footer-tagline">
                <div className="lead-footer-divider">
                  <div className="lead-footer-line"></div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <path d="M12 2C8 6 4 8 4 12c0 4 3.5 8 8 10 4.5-2 8-6 8-10 0-4-4-6-8-10z" fill="var(--gold)" fillOpacity="0.2" />
                    <path d="M12 2C8 6 4 8 4 12c0 4 3.5 8 8 10 4.5-2 8-6 8-10 0-4-4-6-8-10z" />
                  </svg>
                  <div className="lead-footer-line"></div>
                </div>
                <span className="lead-footer-text">Trust &middot; Tradition &middot; Timeless Beauty</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
