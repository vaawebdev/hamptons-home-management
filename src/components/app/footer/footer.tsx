import { FC } from 'react'
import { FooterBrand } from './footer-brand'
import { FooterContacts } from './footer-contacts'
import { FooterCopyright } from './footer-copyright'
import { FooterLegal } from './footer-legal'
import { FooterNavigation } from './footer-navigation'

export const Footer: FC = () => {
  return (
    <footer className="bg-black">
      <div className="container space-y-8 py-12">
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-4">
          <FooterBrand />
          <FooterNavigation />
          <FooterLegal />
        </div>
        <hr className="h-px w-full border-0 bg-gray-800" />
        <FooterContacts />
        <hr className="h-px w-full border-0 bg-gray-800" />
        <FooterCopyright />
      </div>
    </footer>
  )
}
