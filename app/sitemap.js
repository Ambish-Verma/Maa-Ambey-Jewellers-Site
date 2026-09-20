const BASE = 'https://www.maaambeyjewellers.live'

const categories = [
  { slug: 'ring', title: 'Ring' },
  { slug: 'necklace', title: 'Necklace' },
  { slug: 'earring', title: 'Earrings' },
  { slug: 'bangle', title: 'Bangle' },
  { slug: 'chain', title: 'Chain' },
  { slug: 'pendant', title: 'Pendant' },
  { slug: 'kada', title: 'Kada / Bracelet' },
  { slug: 'maang-tikka', title: 'Maang Tikka' },
  { slug: 'nose-pin', title: 'Nose Pin' },
  { slug: 'anklet', title: 'Anklet' },
  { slug: 'mangalsutra', title: 'Mangalsutra' },
  { slug: 'bridal-set', title: 'Bridal Set' },
]

export default function sitemap() {
  const now = new Date().toISOString().split('T')[0]

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categories.map((cat) => ({
      url: `${BASE}/order/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]
}
