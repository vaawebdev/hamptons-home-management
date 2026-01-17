import { FC } from 'react'
import { SERVICES } from './constants'

export const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Comprehensive Property Care
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-pretty text-gray-600">
            Every service designed to protect your investment and provide complete peace of mind
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.id} className="space-y-3 border border-gray-200 p-8">
              <service.icon className="size-12 transition-transform" />
              <h3 className="font-mono text-xl font-semibold text-balance">{service.title}</h3>
              <p className="text-pretty text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
