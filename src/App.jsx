import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Categories from './components/Categories'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import OrderForm from './components/OrderForm'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
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
      <Hero />
      <TrustBar />
      <Categories />
      <Gallery />
      <HowItWorks />
      <OrderForm />
      <About />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
