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
  '@id': 'https://www.maaambeyjewellers.live/#business',
  name: 'Maa Ambey Jewellers',
  image: 'https://www.maaambeyjewellers.live/assets/og-image.png',
  url: 'https://www.maaambeyjewellers.live',
  telephone: '+916291510356',
  whatsapp: '+916291510356',
  email: 'info@maaambeyjewellers.live',
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
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Card',
  areaServed: [
    { '@type': 'City', name: 'Howrah' },
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Liluah' },
    { '@type': 'City', name: 'Shalimar' },
    { '@type': 'City', name: 'Santragachi' },
    { '@type': 'City', name: 'Bally' },
    { '@type': 'City', name: 'Ulubaria' },
    { '@type': 'City', name: 'Amta' },
  ],
  hasMap: 'https://maps.google.com/?q=22.6301757,88.3381804',
  sameAs: [
    'https://www.facebook.com/maaambeyjewellers',
    'https://www.instagram.com/maaambeyjewellers',
    'https://www.youtube.com/@maaambeyjewellers',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Verified Customer' },
      reviewBody: 'Excellent custom gold jewellery. Very skilled craftsmen and honest pricing.',
    },
  ],
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
  additionalType: [
    'https://schema.org/Goldsmith',
    'https://schema.org/JewelryStore',
  ],
  keywords: 'jewellery shop near me, gold jewellery Howrah, silver jewellery Liluah, custom jewellery Howrah, best jeweller in Howrah, goldsmith Howrah, bridal jewellery Kolkata, BIS hallmarked gold, 22K gold jewellery, 925 silver jewellery, wedding jewellery Howrah, mangalsutra design, custom ring Howrah',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.maaambeyjewellers.live' },
    { '@type': 'ListItem', position: 2, name: 'Categories', item: 'https://www.maaambeyjewellers.live/#categories' },
    { '@type': 'ListItem', position: 3, name: 'Gallery', item: 'https://www.maaambeyjewellers.live/#gallery' },
    { '@type': 'ListItem', position: 4, name: 'About', item: 'https://www.maaambeyjewellers.live/#about' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Maa Ambey Jewellers make custom gold jewellery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We handcraft custom gold and silver jewellery in 22K gold and 925 sterling silver. Send us a reference image or design idea via WhatsApp and our craftsmen will create it for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Maa Ambey Jewellers located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are located at 26/4, New 53 Sailen Dhar Road, Patuapara, Liluah, Howrah - 711204, West Bengal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the gold jewellery BIS hallmarked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our gold jewellery is BIS hallmarked for purity and authenticity. We work with 22K gold and 925 sterling silver.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the shop hours for Maa Ambey Jewellers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Tuesday to Sunday, 10:00 AM to 1:00 PM and 6:00 PM to 9:00 PM. We are closed on Mondays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a custom jewellery design using AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our website has an AI-powered design generator. Choose a jewellery category, select your preferences for metal, stones, and style, and we will generate a photorealistic design preview for you.',
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
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
