import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { allSlugsQuery } from '@/sanity/queries'
import { services } from '@/data/services'

const SITE_URL = 'https://authorstranquilitypress.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/bookstore`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/resources`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/docs`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/faq`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/quiz`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/marketing`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  let bookRoutes: MetadataRoute.Sitemap = []
  try {
    const bookSlugs: { slug: string }[] = await client.fetch(allSlugsQuery)
    bookRoutes = bookSlugs
      .filter((b) => b.slug)
      .map((b) => ({
        url: `${SITE_URL}/bookstore/${b.slug}`,
        changeFrequency: 'monthly',
        priority: 0.6,
      }))
  } catch {
    bookRoutes = []
  }

  return [...staticRoutes, ...serviceRoutes, ...bookRoutes]
}
