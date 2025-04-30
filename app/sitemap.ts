import { MetadataRoute } from 'next'
import { getAllSeries, getLastModified, ProductType } from '@/lib/services/product-service'

const BASE_URL = 'https://steelmade.com'

async function generateProductRoutes() {
  const productTypes: ProductType[] = ['chairs', 'desks', 'storage']
  const routes: MetadataRoute.Sitemap = []

  // Add product category pages
  productTypes.forEach((type) => {
    routes.push({
      url: `${BASE_URL}/${type}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Add individual product pages
  for (const type of productTypes) {
    const series = await getAllSeries(type)
    for (const seriesId of Object.keys(series)) {
      const lastModified = await getLastModified(type, seriesId)
      routes.push({
        url: `${BASE_URL}/${type}/${seriesId}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  return routes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productRoutes = await generateProductRoutes()

  // Static routes with consistent lastModified dates
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2025-01-01'),  // Update this when the about page changes
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2025-01-01'),  // Update this when the contact page changes
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),  // Portfolio changes more frequently
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date('2025-01-01'),  // Update this when FAQs change
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  return [...staticRoutes, ...productRoutes]
}
