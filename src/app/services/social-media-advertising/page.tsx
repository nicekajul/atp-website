import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import SocialMediaAdsContent from '@/components/services/SocialMediaAdsContent'

export const metadata: Metadata = {
  title: "Social Media Advertising | Author's Tranquility Press",
  description:
    'Targeted Facebook and Instagram ad campaigns built for authors. Reach readers based on genre, interests, and behavior. Choose Basic (30-day) or Expert (90-day) campaign packages.',
}

export default function SocialMediaAdsPage() {
  const service = getServiceBySlug('social-media-advertising')!
  return <SocialMediaAdsContent service={service} />
}
