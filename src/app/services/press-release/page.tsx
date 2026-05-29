import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import PressReleaseContent from '@/components/services/PressReleaseContent'

export const metadata: Metadata = {
  title: "Press Release & Media Distribution | Author's Tranquility Press",
  description:
    'Professionally written press releases distributed across media and digital platforms. Four service tiers from foundational visibility to full campaign-level media distribution.',
}

export default function PressReleasePage() {
  const service = getServiceBySlug('press-release')!
  return <PressReleaseContent service={service} />
}
