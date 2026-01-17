import { cn } from '@/utils/cn'
import Link from 'next/link'
import { FC } from 'react'
import { HEADER_NAVIGATION } from './constants'

export const HeaderNavigation: FC = () => {
  return (
    <nav className="hidden grow items-center justify-end gap-8 text-sm md:flex">
      {HEADER_NAVIGATION.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            'text-lg font-medium transition-colors',
            link.highlight
              ? 'bg-black px-6 py-2.5 text-white hover:bg-gray-800'
              : 'text-gray-700 hover:text-black',
          )}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  )
}
