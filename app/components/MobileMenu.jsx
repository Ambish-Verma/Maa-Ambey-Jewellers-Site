'use client'

import { useRouter, usePathname } from 'next/navigation'

function scrollToSection(e, href, pathname, router, closeMenu) {
  e.preventDefault()
  closeMenu()
  const hash = href.includes('#') ? href.split('#')[1] : null
  if (pathname === '/' && hash) {
    setTimeout(() => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  } else {
    router.push(href)
  }
}

export default function MobileMenu({ menuOpen, closeMenu }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={`mobile-menu${menuOpen ? ' active' : ''}`} id="mobile-menu">
      <div className="mobile-menu-inner">
        <a href="/#categories" className="mobile-link" onClick={(e) => scrollToSection(e, '/#categories', pathname, router, closeMenu)}>Get Design Idea</a>
        <a href="/#gallery" className="mobile-link" onClick={(e) => scrollToSection(e, '/#gallery', pathname, router, closeMenu)}>Gallery</a>
        <a href="/#how-it-works" className="mobile-link" onClick={(e) => scrollToSection(e, '/#how-it-works', pathname, router, closeMenu)}>How It Works</a>
        <a href="/#about" className="mobile-link" onClick={(e) => scrollToSection(e, '/#about', pathname, router, closeMenu)}>About</a>
        <a href="/#order" className="nav-cta mobile-link" onClick={(e) => scrollToSection(e, '/#order', pathname, router, closeMenu)}>
          Order Now
          <svg style={{ display: 'inline', width: '14px', height: '14px', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  )
}
