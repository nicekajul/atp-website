import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/shared/TrustBar'
import StartJourney from '@/components/home/StartJourney'
import ServicesOverview from '@/components/home/ServicesOverview'
import HowItWorks from '@/components/home/HowItWorks'
import NewReleases from '@/components/home/NewReleases'
import FeaturedBooks from '@/components/home/FeaturedBooks'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StartJourney />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <NewReleases />
      <FeaturedBooks />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
