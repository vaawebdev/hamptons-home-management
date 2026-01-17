import { FC } from 'react'
import { ContactUsSectionCompanyInfo } from './contact-us-section-company-info'
import { ContactUsSectionForm } from './contact-us-section-form'

export const ContactUsSection: FC = () => {
  return (
    <section id="contact-us" className="py-20 odd:bg-gray-50">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="font-mono text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-pretty text-gray-600">
            Let's discuss how we can protect and maintain your Hamptons property
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <ContactUsSectionCompanyInfo />
          <div className="lg:col-span-2">
            <ContactUsSectionForm />
          </div>
        </div>
      </div>
    </section>
  )
}
