'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export type HeaderBrandProps = {
  onNavigate?: () => unknown
}

export const HeaderBrand: FC<HeaderBrandProps> = ({ onNavigate }) => {
  return (
    <Link href="/" onNavigate={onNavigate}>
      <Image
        src="/logo.png"
        alt="Hamptons Home Management"
        width={135}
        height={64}
        priority
        fetchPriority="high"
      />
    </Link>
  )
}
