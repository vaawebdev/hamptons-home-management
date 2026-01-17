import { FC } from 'react'
import { CONTACT_INFO } from './constants'
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
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-mono text-2xl font-semibold text-balance">
                Contact Information
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon className="mt-1 size-6 shrink-0" />
                    <div>
                      <p className="font-mono font-semibold text-balance">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-pretty text-gray-600 underline transition-colors hover:text-black"
                        >
                          {content}
                        </a>
                      ) : (
                        <p className="text-pretty text-gray-600">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 bg-black p-6 text-white">
              <h4 className="font-mono text-lg font-semibold text-balance">Available 24/7</h4>
              <p className="text-pretty text-gray-300">
                Emergency property issues? We're always here to help protect your investment.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactUsSectionForm />
          </div>
        </div>
      </div>
    </section>
  )
}
