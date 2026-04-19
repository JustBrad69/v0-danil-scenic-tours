import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danilscenictours.co.ke'
  // This automatically captures the date of your last GitHub push/Vercel build
  const lastVerified = new Date() 

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily' },
    { path: '/safaris', priority: 0.9, changeFreq: 'daily' },
    { path: '/book', priority: 0.9, changeFreq: 'weekly' },
    { path: '/destinations', priority: 0.8, changeFreq: 'weekly' },
    { path: '/gallery', priority: 0.5, changeFreq: 'monthly' },
    { path: '/about', priority: 0.7, changeFreq: 'monthly' },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: lastVerified,
    changeFrequency: route.changeFreq as any,
    priority: route.priority,
  }))
}
