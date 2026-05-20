'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'

export default function NavWrapper() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  )
}
