import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get base URL from environment variable or use default
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://personal-website.vercel.app'
  
  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic project pages
  const projectRoutes = projects
    .filter(project => project.link && project.link !== '#')
    .map((project) => ({
      url: `${baseUrl}${project.link}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...routes, ...projectRoutes]
}

