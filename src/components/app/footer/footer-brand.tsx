import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const FooterBrand: FC = () => {
  return (
    <div className="lg:col-span-2">
      <Link href="/" className="inline-block">
        <Image
          src="/logo.png"
          alt="Hamptons Home Management"
          className="invert"
          width={135}
          height={64}
        />
      </Link>
      <p className="mt-2 text-lg text-pretty text-gray-300">
        Premium property management services in the Hamptons. We manage homes with precision,
        transparency, and absolute respect for your investment.
      </p>
    </div>
  )
}
