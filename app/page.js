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

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'Maa Ambey Jewellers',
  image: 'https://www.maaambeyjewellers.live/assets/og-image.jpg',
  url: 'https://www.maaambeyjewellers.live',
  telephone: '+919163395374',
  description:
    'Handcrafted custom gold & silver jewellery from Liluah, Howrah. Send your reference image via WhatsApp and we will bring it to life. BIS Hallmarked. 22K Gold & 925 Silver.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '26/4, New 53 Sailen Dhar Road, Patuapara',
    addressLocality: 'Liluah',
    addressRegion: 'Howrah, West Bengal',
    postalCode: '711204',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.6301757,
    longitude: 88.3381804,
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '18:00',
      closes: '21:00',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(/</g, '\\u003c'),
        }}
      />
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
