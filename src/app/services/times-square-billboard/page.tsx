import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import TimesSquareBillboardContent from '@/components/services/TimesSquareBillboardContent'

export const metadata: Metadata = {
  title: "New York Times Square Digital Billboard | Author's Tranquility Press",
  description:
    "Feature your book on a large-format digital billboard at 1560 Broadway, Times Square — one of the world's most recognized advertising locations. Fully managed by ATP.",
}

export default function TimesSquareBillboardPage() {
  const service = getServiceBySlug('times-square-billboard')!
  return <TimesSquareBillboardContent service={service} />
}
