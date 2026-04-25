import { getPropertiesAction } from '@/data/actions/get-properties-action'
import { MapPinIcon } from 'lucide-react'
import { FC } from 'react'
import { PropertySlider } from './property-slider'

export const PropertiesSection: FC = async () => {
  const properties = await getPropertiesAction()

  return properties.length ? (
    <section id="properties" className="bg-gray-50 py-20">
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-mono text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Homes We've Built
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-pretty text-gray-600">
            We don't just manage homes — we protect your investment and lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {properties.map((property) => {
            const imageUrls =
              property.images
                ?.map((img) => (typeof img === 'object' ? img.url : null))
                .filter((url): url is string => !!url) ?? []

            return (
              <article
                key={property.id}
                className="flex flex-col overflow-hidden border border-gray-200 bg-white"
              >
                {imageUrls.length > 0 && (
                  <PropertySlider images={imageUrls} alt={property.address} />
                )}
                <div className="flex grow flex-col gap-8 p-6 sm:p-8">
                  <div className="space-y-6">
                    <h3 className="font-mono text-2xl font-semibold text-balance">
                      {property.address}
                    </h3>
                    <dl className="grid grid-cols-2 gap-4 border-y border-gray-200 py-4 sm:grid-cols-4">
                      <div className="space-y-1 text-center">
                        <dt className="text-xs tracking-wide text-gray-500 uppercase">Bedrooms</dt>
                        <dd className="font-mono text-lg font-semibold text-black">
                          {property.bedrooms}
                        </dd>
                      </div>
                      <div className="space-y-1 text-center">
                        <dt className="text-xs tracking-wide text-gray-500 uppercase">Bathrooms</dt>
                        <dd className="font-mono text-lg font-semibold text-black">
                          {property.bathrooms}
                        </dd>
                      </div>
                      <div className="space-y-1 text-center">
                        <dt className="text-xs tracking-wide text-gray-500 uppercase">Sq. Ft.</dt>
                        <dd className="font-mono text-lg font-semibold text-black">
                          {property.sqft}
                        </dd>
                      </div>
                      <div className="space-y-1 text-center">
                        <dt className="text-xs tracking-wide text-gray-500 uppercase">
                          Year Built
                        </dt>
                        <dd className="font-mono text-lg font-semibold text-black">
                          {property.year}
                        </dd>
                      </div>
                    </dl>
                    <p className="text-pretty text-gray-600">{property.description}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(property.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm font-medium text-black underline-offset-4 hover:underline"
                    >
                      <MapPinIcon className="size-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  ) : null
}
