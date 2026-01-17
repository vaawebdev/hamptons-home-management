import Link from 'next/link'
import { FC } from 'react'
import { FOOTER_LEGAL } from './constants'

export const FooterLegal: FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-mono text-xl font-semibold text-white">Legal</h3>
      <nav className="flex flex-col items-start gap-y-2 text-base">
        {FOOTER_LEGAL.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-gray-400 transition-colors hover:text-white"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}
