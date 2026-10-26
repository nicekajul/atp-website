import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import IPageListingContent from '@/components/services/IPageListingContent'

export const metadata: Metadata = {
  title: 'iPage Listing',
  description:
    "Promote your book on Ingram's iPage, the online ordering platform used by bookstores, libraries, schools, and book buyers worldwide. Two-week featured campaign for $899.",
}

export default function IPageListingPage() {
  const service = getServiceBySlug('ipage-listing')!
  return <IPageListingContent service={service} />
}
