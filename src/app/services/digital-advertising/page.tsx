import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import DigitalAdvertisingContent from '@/components/services/DigitalAdvertisingContent'

export const metadata: Metadata = {
  title: "Digital Advertising | Author's Tranquility Press",
  description:
    'YouTube ad campaigns and 15-second video marketing for authors. Guaranteed minimum 20,000+ impressions. Structured placements and audience targeting to get your book in front of active readers.',
}

export default function DigitalAdvertisingPage() {
  const service = getServiceBySlug('digital-advertising')!
  return <DigitalAdvertisingContent service={service} />
}
