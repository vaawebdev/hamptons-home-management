import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const HeroSection: FC = () => {
  return (
    <section className="relative bg-black py-20">
      <Image
        src="/images/hero-bg.webp"
        fill
        alt="House on the hill"
        className="absolute inset-0 z-10 size-full object-cover select-none"
        priority
        fetchPriority="high"
      />
      <div className="absolute inset-0 z-20 size-full bg-black/50" />
      <div className="relative z-30 container space-y-8 py-12">
        <h1 className="mx-auto max-w-4xl text-center font-mono text-4xl font-semibold text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Premium Property Management in the Hamptons
        </h1>
        <p className="mx-auto max-w-3xl text-center font-mono text-xl tracking-wide text-pretty text-gray-100 italic sm:text-2xl md:text-3xl">
          Over two decades of local expertise. Trusted service. Complete peace of mind.
        </p>
        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href="/#contact-us"
            className="border-2 border-white bg-white px-8 py-4 text-center text-lg font-medium text-black transition-colors hover:border-gray-200 hover:bg-gray-200"
          >
            Get In Touch
          </Link>
          <Link
            href="/#services"
            className="border-2 border-white px-8 py-4 text-center text-lg font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
