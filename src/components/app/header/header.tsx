import { FC } from 'react'
import { HeaderBrand } from './header-brand'
import { HeaderNavigation } from './header-navigation'
import { HeaderNavigationMobile } from './header-navigation-mobile'

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full shrink-0 bg-white shadow">
      <div className="container flex h-24 items-center">
        <HeaderBrand />
        <HeaderNavigation />
        <HeaderNavigationMobile />
      </div>
    </header>
  )
}
