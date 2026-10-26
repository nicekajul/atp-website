import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookReviewSquadContent from '@/components/services/BookReviewSquadContent'

export const metadata: Metadata = {
  title: 'Book Review Squad Videos',
  description:
    'Authentic, reader-driven video reviews of your book, each paired with a professionally distributed press release. Packages of 1, 3, or 5 video reviews from $899.',
}

export default function BookReviewSquadVideosPage() {
  const service = getServiceBySlug('book-review-squad-videos')!
  return <BookReviewSquadContent service={service} />
}
