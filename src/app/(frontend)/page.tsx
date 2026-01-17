import { AboutSection } from '@/components/app/sections/about/about-section'
import { HeroSection } from '@/components/app/sections/hero/hero-section'
import { ServicesSection } from '@/components/app/sections/services/services-section'
import { WhyHamptonsSection } from '@/components/app/sections/why-hamptons/why-hamptons'
import { FC } from 'react'

const Page: FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyHamptonsSection />
      <AboutSection />
    </>
  )
}

export default Page
