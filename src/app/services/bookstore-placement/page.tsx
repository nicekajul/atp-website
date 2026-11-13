import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookstorePlacementContent from '@/components/services/BookstorePlacementContent'

export const metadata: Metadata = {
  title: 'Bookstore Placement',
  description:
    'Put your book on a bookstore shelf with a Featured or Premier display, or celebrate your release with a full-day Grand Book Launch signing event. From $1,499.',
}

export default function BookstorePlacementPage() {
  const service = getServiceBySlug('bookstore-placement')!
  return <BookstorePlacementContent service={service} />
}
