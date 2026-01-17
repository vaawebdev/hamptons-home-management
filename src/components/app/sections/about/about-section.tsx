import { FC } from 'react'

import Image from 'next/image'
import { CONTENT_BLOCKS, FOUNDER, INTRO_TEXT } from './constants'

export const AboutSection: FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container space-y-12">
        <h2 className="text-center font-mono text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
          About Us
        </h2>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col-reverse gap-y-6 lg:flex-col">
            <Image
              src="/images/anton-nesterov.webp"
              width={576}
              height={864}
              alt="Anton Nesterov"
              className="mx-auto max-w-full"
            />
            <div className="space-y-1 text-center">
              <h3 className="font-mono text-2xl font-semibold text-balance text-black">
                {FOUNDER.name}
              </h3>
              <p className="text-lg text-balance text-gray-600">{FOUNDER.role}</p>
            </div>
            <p className="bg-gray-50 p-8 font-serif text-xl leading-relaxed text-pretty text-black italic md:text-2xl">
              "{FOUNDER.quote}"
            </p>
          </div>
          <div className="space-y-8">
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>{INTRO_TEXT}</p>
            </div>
            {CONTENT_BLOCKS.map((block) => (
              <div key={block.title} className="space-y-4 border-l-4 border-black pl-6">
                <h3 className="font-mono text-2xl font-semibold text-balance text-black">
                  {block.title}
                </h3>
                {block.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed text-pretty text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
