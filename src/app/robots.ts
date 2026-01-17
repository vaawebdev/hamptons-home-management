import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/admin/', '/home/', '/feed/', '/*.html$'],
    },
    sitemap: new URL('sitemap.xml', process.env.NEXT_PUBLIC_SERVER_URL).toString(),
  }
}

export default robots
