export default function MobileMenu({ menuOpen, closeMenu }) {
  return (
    <div className={`mobile-menu${menuOpen ? ' active' : ''}`} id="mobile-menu">
      <div className="mobile-menu-inner">
        <a href="#categories" className="mobile-link" onClick={closeMenu}>Collections</a>
        <a href="#gallery" className="mobile-link" onClick={closeMenu}>Gallery</a>
        <a href="#how-it-works" className="mobile-link" onClick={closeMenu}>How It Works</a>
        <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
        <a href="#order" className="nav-cta mobile-link" onClick={closeMenu}>
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
