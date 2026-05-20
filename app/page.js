import NavWrapper from './components/NavWrapper'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Categories from './components/Categories'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import OrderForm from './components/OrderForm'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <NavWrapper />
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
