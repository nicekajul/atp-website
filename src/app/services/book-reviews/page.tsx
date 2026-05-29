import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookReviewsContent from '@/components/services/BookReviewsContent'

export const metadata: Metadata = {
  title: "Book Reviews | Author's Tranquility Press",
  description:
    'Professional third-party book reviews from Hollywood Book Review, Pacific Book Review, Kirkus, Publishers Weekly, and more — fully managed by ATP.',
}

export default function BookReviewsPage() {
  const service = getServiceBySlug('book-reviews')!
  return <BookReviewsContent service={service} />
}
