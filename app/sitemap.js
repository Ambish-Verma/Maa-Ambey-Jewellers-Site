const BASE = 'https://www.maaambeyjewellers.live'

const categories = [
  'ring',
  'necklace',
  'earring',
  'bangle',
  'chain',
  'pendant',
  'kada',
  'maang-tikka',
  'nose-pin',
  'anklet',
  'mangalsutra',
  'bridal-set',
]

export default function sitemap() {
  const now = new Date()

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categories.map((category) => ({
      url: `${BASE}/order/${category}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]
}
