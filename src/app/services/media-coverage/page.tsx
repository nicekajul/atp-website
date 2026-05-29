import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import MediaCoverageContent from '@/components/services/MediaCoverageContent'

export const metadata: Metadata = {
  title: "Media Coverage | Author's Tranquility Press",
  description:
    'Professionally coordinated TV and podcast interviews for authors. Build credibility with a broadcast TV interview or multi-platform podcast episode. Turnaround 4–6+ weeks.',
}

export default function MediaCoveragePage() {
  const service = getServiceBySlug('media-coverage')!
  return <MediaCoverageContent service={service} />
}
