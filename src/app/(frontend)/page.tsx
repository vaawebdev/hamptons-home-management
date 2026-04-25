import { AboutSection } from '@/components/app/sections/about/about-section'
import { ContactUsSection } from '@/components/app/sections/contact-us/contact-us-section'
import { HeroSection } from '@/components/app/sections/hero/hero-section'
import { PropertiesSection } from '@/components/app/sections/properties/properties-section'
import { ServicesSection } from '@/components/app/sections/services/services-section'
import { WhyHamptonsSection } from '@/components/app/sections/why-hamptons/why-hamptons'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  icons: {
    other: [
      {
        rel: 'preload',
        url: '/images/hero.jpg',
        fetchPriority: 'high',
      },
    ],
  },
}

const Page: FC = () => {
  return (
    <>
      <HeroSection />
      <PropertiesSection />
      <ServicesSection />
      <WhyHamptonsSection />
      <AboutSection />
      <ContactUsSection />
    </>
  )
}

export default Page
