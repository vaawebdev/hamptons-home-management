import Image from 'next/image'
import { FC } from 'react'
import { REASONS } from './constants'

export const WhyHamptonsSection: FC = () => {
  return (
    <section id="why-hamptons" className="bg-gray-50 py-20">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="hidden justify-center lg:flex">
          <Image src="/images/why-hamptons-interior.webp" alt="Interior" width={465} height={620} />
        </div>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-center font-mono text-3xl font-semibold text-balance sm:text-4xl md:text-5xl lg:text-left">
              Why Choose Us
            </h2>
            <p className="text-center text-lg text-pretty text-gray-600 lg:text-left">
              Property management is a natural extension of everything we've done for
              years—combining local knowledge, operational precision, and a true concierge mindset.
            </p>
          </div>
          <div className="space-y-8">
            {REASONS.map((reason) => (
              <div key={reason.id} className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
                    <reason.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-xl font-semibold text-balance">{reason.title}</h3>
                  <p className="text-pretty text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
