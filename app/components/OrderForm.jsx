'use client'

import { useState, useRef } from 'react'

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/heic', 'image/heif']
const MAX_IMAGE_SIZE = 10 * 1024 * 1024 // 10MB

const categoryOptions = [
  'Ring', 'Necklace', 'Earrings', 'Bangle', 'Chain', 'Pendant',
  'Kada / Bracelet', 'Maang Tikka', 'Nose Pin', 'Anklet', 'Mangalsutra', 'Bridal Set', 'Other'
]

const metalOptions = ['22K Gold', '18K Gold', '14K Gold', '925 Silver', 'Not Sure']

export default function OrderForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [metal, setMetal] = useState('')
  const [budget, setBudget] = useState('')
  const [desc, setDesc] = useState('')
  const [fileName, setFileName] = useState('')
  const [preview, setPreview] = useState(null)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})
  const fileRef = useRef(null)
  const fileInputRef = useRef(null)

  // --- Input handlers with real-time filtering ---

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

  const handleBudget = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 9)
    setBudget(val)
  }

  const handleDesc = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z0-9\s.,!?;:'\-()₹/\n]/g, '').slice(0, 300)
    setDesc(val)
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setErrors(prev => ({ ...prev, file: 'Only PNG, JPG, JPEG, and WebP images are allowed.' }))
      e.target.value = ''
      return
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors(prev => ({ ...prev, file: 'Image must be under 10MB.' }))
      e.target.value = ''
      return
    }

    setFileName(file.name)
    fileRef.current = file
    setPreview(URL.createObjectURL(file))
    setErrors(prev => ({ ...prev, file: '' }))
  }

  const removeFile = () => {
    setFileName('')
    fileRef.current = null
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    setErrors(prev => ({ ...prev, file: '' }))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // --- Validation on submit ---

  const validate = () => {
    const newErrors = {}

    if (!name.trim()) newErrors.name = 'Name is required.'
    else if (name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.'

    if (!phone.trim()) newErrors.phone = 'Phone number is required.'
    else if (phone.length !== 10) newErrors.phone = 'Enter a valid 10-digit phone number.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // --- Cloudinary upload ---

  const uploadToCloudinary = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('folder', 'maa-ambey-orders')

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formData }
    )

    if (!res.ok) throw new Error('Upload failed')
    const data = await res.json()
    return data.secure_url
  }

  // --- Submit ---

  const sendWhatsApp = async (e) => {
    e.preventDefault()
    if (!validate()) return

    let imageUrl = ''

    if (fileRef.current) {
      setSending(true)
      try {
        imageUrl = await uploadToCloudinary(fileRef.current)
      } catch (err) {
        console.error('Upload failed:', err)
        alert('Image upload failed. Please try again.')
        setSending(false)
        return
      }
      setSending(false)
    }

    let msg = `*New Order Enquiry – Maa Ambey Jewellers*\n\n`
    msg += `*Name:* ${name.trim()}\n`
    msg += `*Phone:* ${phone}\n`
    if (category) msg += `*Category:* ${category}\n`
    if (metal) msg += `*Metal:* ${metal}\n`
    if (budget) msg += `*Budget:* ₹${Number(budget).toLocaleString('en-IN')}\n`
    if (desc.trim()) msg += `*Details:* ${desc.trim()}\n`
    if (imageUrl) msg += `\n*Reference Image:*\n${imageUrl}\n`
    msg += `\n_Sent from maaambeyjewellers.com_`

    const url = `https://wa.me/919163395374?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  const errorStyle = {
    color: '#e74c3c',
    fontSize: '11px',
    marginTop: '4px',
    letterSpacing: '0.02em',
  }

  return (
    <section id="order">
      <div className="order-inner">
        <div>
          <div className="section-label">Custom Orders</div>
          <h2 className="section-title">Place your <em>order</em></h2>
          <p className="section-desc">
            Fill the quick form and we'll send your enquiry directly to our WhatsApp. No waiting — instant connection with our craftsmen.
          </p>
          <div className="divider">
            <div className="divider-diamond"></div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--stone)', lineHeight: 2 }}>
              <div>📍 26/4, New 53 Sailen Dhar Road</div>
              <div style={{ paddingLeft: '1.4rem' }}>Patuapara, Liluah, Howrah – 711204</div>
              <div style={{ marginTop: '0.5rem' }}>📱 +91 91633 95374</div>
            </div>
          </div>
        </div>
        <div className="form-wrap">
          <div className="form-title">Enquiry &amp; Order Form</div>
          <div className="form-sub">All messages are sent via WhatsApp for fastest response</div>

          <div className="form-row">
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={handleName}
                maxLength={25}
                style={errors.name ? { borderColor: '#e74c3c' } : {}}
              />
              {errors.name && <div style={errorStyle}>{errors.name}</div>}
              <div style={{ fontSize: '10px', color: 'var(--stone)', marginTop: '2px', textAlign: 'right' }}>{name.length}/25</div>
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="9876543210"
                value={phone}
                onChange={handlePhone}
                maxLength={10}
                inputMode="numeric"
                style={errors.phone ? { borderColor: '#e74c3c' } : {}}
              />
              {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
              <div style={{ fontSize: '10px', color: 'var(--stone)', marginTop: '2px', textAlign: 'right' }}>{phone.length}/10</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select category</option>
                {categoryOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Metal Type</label>
              <select value={metal} onChange={e => setMetal(e.target.value)}>
                <option value="">Select metal</option>
                {metalOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Approximate Budget (₹)</label>
            <input
              type="text"
              placeholder="e.g. 15000"
              value={budget}
              onChange={handleBudget}
              maxLength={9}
              inputMode="numeric"
            />
            {budget && <div style={{ fontSize: '10px', color: 'var(--gold)', marginTop: '2px' }}>₹{Number(budget).toLocaleString('en-IN')}</div>}
          </div>

          <div className="form-group">
            <label>Description / Special Requirements</label>
            <textarea
              placeholder="Describe the design, size, occasion, or any customisation you need..."
              value={desc}
              onChange={handleDesc}
              maxLength={300}
            ></textarea>
            <div style={{ fontSize: '10px', color: 'var(--stone)', marginTop: '2px', textAlign: 'right' }}>{desc.length}/300</div>
          </div>

          <div className="form-group">
            <label>Reference Image</label>
            {preview ? (
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '12px',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                  padding: '24px 14px 12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: '11px', color: '#C9A84C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '70%' }}>
                    {fileName}
                  </span>
                  <button
                    type="button"
                    onClick={removeFile}
                    style={{
                      background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                      color: '#fff', fontSize: '10px', padding: '4px 10px', cursor: 'pointer',
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
                <div className="upload-icon">📎</div>
                <div className="upload-text">Tap to attach reference image</div>
                <div className="upload-small">PNG, JPG, WebP · Max 10MB · 1 file only</div>
                {errors.file && <div style={{ ...errorStyle, marginTop: '6px' }}>{errors.file}</div>}
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept=".png,.jpg,.jpeg,.webp,.heic,.heif"
              style={{ display: 'none' }}
              onChange={handleFile}
            />
          </div>

          <a
            href="#"
            className="whatsapp-btn"
            onClick={sendWhatsApp}
            style={{ opacity: sending ? 0.6 : 1, pointerEvents: sending ? 'none' : 'auto' }}
          >
            <svg className="wa-icon" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            {sending ? 'Uploading image...' : 'Send Enquiry via WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  )
}
