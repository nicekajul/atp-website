import React from 'react'

export const revalidate = 60

import HeroSection from '@/components/home/HeroSection'
// import PromoBanner from '@/components/home/PromoBanner' // re-enable for next seasonal promo
import FilmSpotlight from '@/components/home/FilmSpotlight'
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
      {/* Father's Day promo ended June 30 — re-enable <PromoBanner /> for the next seasonal promo */}
      <FilmSpotlight />
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
