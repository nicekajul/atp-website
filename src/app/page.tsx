import React from 'react'

export const revalidate = 60

import HeroSection from '@/components/home/HeroSection'
// import PromoBanner from '@/components/home/PromoBanner' // re-enable for next seasonal promo
import BlackFridayBanner from '@/components/home/BlackFridayBanner'
import FilmSpotlight from '@/components/home/FilmSpotlight'
import TrustBar from '@/components/shared/TrustBar'
import StartJourney from '@/components/home/StartJourney'
import NewServices from '@/components/home/NewServices'
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
      {/* Black Friday BOGO, Nov 12 to 27; hides itself after the offer ends */}
      <BlackFridayBanner />
      <FilmSpotlight />
      <StartJourney />
      <TrustBar />
      <NewServices />
      <ServicesOverview />
      <HowItWorks />
      <NewReleases />
      <FeaturedBooks />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
