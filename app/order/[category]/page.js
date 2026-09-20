import OrderFormClient from './OrderFormClient'

const categoryTitles = {
  ring: 'Ring',
  necklace: 'Necklace',
  earring: 'Earrings',
  bangle: 'Bangle',
  chain: 'Chain',
  pendant: 'Pendant',
  kada: 'Kada / Bracelet',
  'maang-tikka': 'Maang Tikka',
  'nose-pin': 'Nose Pin',
  anklet: 'Anklet',
  mangalsutra: 'Mangalsutra',
  'bridal-set': 'Bridal Set',
}

export function generateStaticParams() {
  return Object.keys(categoryTitles).map((category) => ({ category }))
}

export async function generateMetadata({ params }) {
  const { category } = await params
  const title = categoryTitles[category] || category
  return {
    title: `Custom ${title} Design | Maa Ambey Jewellers — Liluah, Howrah`,
    description: `Maa Ambey Jewellers — Design your custom ${title.toLowerCase()} with AI. Choose metal, stones, style, and more. Handcrafted in 22K gold & 925 silver from Liluah, Howrah.`,
    alternates: {
      canonical: `https://www.maaambeyjewellers.live/order/${category}`,
    },
    openGraph: {
      title: `Custom ${title} Design | Maa Ambey Jewellers — Liluah, Howrah`,
      description: `Maa Ambey Jewellers — Create a custom ${title.toLowerCase()} design with AI. Handcrafted in 22K gold & 925 silver.`,
      url: `https://www.maaambeyjewellers.live/order/${category}`,
      images: [
        {
          url: '/assets/og-image.png',
          width: 1200,
          height: 630,
          alt: `Maa Ambey Jewellers — Custom ${title} Design`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Custom ${title} Design | Maa Ambey Jewellers — Liluah, Howrah`,
      description: `Maa Ambey Jewellers — Create a custom ${title.toLowerCase()} design with AI. Handcrafted in 22K gold & 925 silver.`,
      images: ['/assets/og-image.png'],
    },
  }
}

export default async function OrderCategoryPage({ params }) {
  const { category } = await params
  return <OrderFormClient category={category} />
}
