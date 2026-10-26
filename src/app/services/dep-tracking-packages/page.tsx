import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import DepTrackingContent from '@/components/services/DepTrackingContent'

export const metadata: Metadata = {
  title: 'DEP Tracking Packages – Literary Agent Outreach',
  description:
    'Organized tracking and management of your literary-agent outreach for authors who already have their query letter and submission materials. Track up to 15, 30, or 60 agents from $399.',
}

export default function DepTrackingPackagesPage() {
  const service = getServiceBySlug('dep-tracking-packages')!
  return <DepTrackingContent service={service} />
}
