import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.trunityagency.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Untuk landing page, biasanya tidak sering berubah
      priority: 1.0,
    }
  ]
}
