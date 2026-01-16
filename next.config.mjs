import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  experimental: {
    inlineCss: true,
    globalNotFound: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    qualities: [25, 50, 75, 100],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
