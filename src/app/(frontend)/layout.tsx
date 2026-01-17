import { playfairDisplay } from '@/assets/fonts/playfair-display'
import '@/assets/styles/bundle.css'
import { Footer } from '@/components/app/footer/footer'
import { Header } from '@/components/app/header/header'
import { cn } from '@/utils/cn'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL!),
  title: 'Hamptons Property Management Services | Anton Nesterov - 20+ Years Experience',
  description:
    'Premier luxury property management in the Hamptons by Anton Nesterov. 20+ years of local expertise in estate care, maintenance, and concierge services for discerning homeowners.',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

type LayoutProps = PropsWithChildren

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={cn('min-h-screen scroll-smooth', playfairDisplay.variable)}>
      <body className="flex min-h-screen flex-col items-stretch scroll-smooth">
        <Header />
        <main className="flex grow flex-col items-stretch">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
