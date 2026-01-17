import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

export const revalidate = 0

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const base = new URL(process.env.NEXT_PUBLIC_SERVER_URL!)

  const url = (pathname: string) => {
    base.pathname = pathname
    return base.toString()
  }

  return [
    { url: url('/'), changeFrequency: 'daily', priority: 1 },
    { url: url('/privacy-policy'), changeFrequency: 'monthly', priority: 1 },
    { url: url('/terms-of-service'), changeFrequency: 'monthly', priority: 1 },
  ]
}

export default sitemap
