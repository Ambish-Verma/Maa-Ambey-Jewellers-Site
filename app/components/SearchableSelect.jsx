'use client'

import { useState, useRef, useEffect } from 'react'

export default function SearchableSelect({ label, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlighted, setHighlighted] = useState(-1)
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const filtered = options.filter(opt =>
    opt.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setHighlighted(-1) }, [query, open])

  const handleSelect = (opt) => {
    onChange(opt)
    setOpen(false)
    setQuery('')
  }

  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setOpen(true)
      }
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted(p => Math.min(p + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted(p => Math.max(p - 1, 0))
    } else if (e.key === 'Enter' && highlighted >= 0) {
      e.preventDefault()
      handleSelect(filtered[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
      setQuery('')
    }
  }

  useEffect(() => {
    if (open && highlighted >= 0 && listRef.current) {
      const item = listRef.current.children[highlighted]
      if (item) item.scrollIntoView({ block: 'nearest' })
    }
  }, [highlighted, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 0)
  }, [open])

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <div ref={wrapperRef} style={{ position: 'relative' }}>
        <button
          type="button"
          onClick={() => setOpen(p => !p)}
          onKeyDown={handleKeyDown}
          style={{
            width: '100%', padding: '11px 14px', border: '1px solid var(--border-strong)',
            background: open ? '#fff' : 'var(--cream)', fontFamily: 'var(--sans)', fontSize: '14px',
            color: value ? 'var(--ink)' : 'var(--stone)', borderRadius: '1px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            outline: 'none', minHeight: '42px', margin: 0, textAlign: 'left',
            ...(open ? { borderColor: 'var(--gold)' } : {}),
          }}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={label}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
            {value || placeholder || 'Select...'}
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: 8, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50,
            marginTop: '-1px',
            background: '#fff', border: '1px solid var(--gold)',
            borderRadius: '0 0 2px 2px', maxHeight: '260px', overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column',
          }} role="listbox">
            <div style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type to search..."
                style={{
                  width: '100%', padding: '8px 10px', border: '1px solid var(--border)',
                  borderRadius: '2px', fontSize: '13px', fontFamily: 'var(--sans)',
                  color: 'var(--ink)', outline: 'none', background: 'var(--cream)',
                }}
              />
            </div>
            <div ref={listRef} style={{ overflowY: 'auto', flex: 1 }}>
              {filtered.length === 0 ? (
                <div style={{ padding: '12px 14px', fontSize: '13px', color: 'var(--stone)', textAlign: 'center' }}>
                  No match found
                </div>
              ) : (
                filtered.map((opt, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(opt)}
                    role="option"
                    aria-selected={opt === value}
                    style={{
                      padding: '10px 14px', fontSize: '13px', cursor: 'pointer',
                      fontFamily: 'var(--sans)', color: opt === value ? '#fff' : 'var(--ink)',
                      background: opt === value ? 'var(--gold)' : i === highlighted ? 'var(--gold-pale)' : 'transparent',
                      fontWeight: opt === value ? 600 : 400,
                      transition: 'background 0.1s',
                    }}
                    onMouseEnter={() => setHighlighted(i)}
                  >
                    {opt}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
