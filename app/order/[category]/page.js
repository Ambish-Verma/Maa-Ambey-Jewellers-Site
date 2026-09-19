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
    title: `Design your ${title} | Maa Ambey Jewellers`,
    description: `Create a custom ${title.toLowerCase()} design with AI. Choose metal, stones, style, and more. Handcrafted in 22K gold & 925 silver from Liluah, Howrah.`,
  }
}

export default async function OrderCategoryPage({ params }) {
  const { category } = await params
  return <OrderFormClient category={category} />
}
