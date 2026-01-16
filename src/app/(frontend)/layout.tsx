import { FC, PropsWithChildren } from 'react'

export const metadata = {
  title: 'Payload Blank Template',
  description: 'A blank template using Payload in a Next.js app.',
}

type LayoutProps = PropsWithChildren

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
