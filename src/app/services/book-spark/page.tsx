import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookSparkContent from '@/components/services/BookSparkContent'

export const metadata: Metadata = {
  title: "Book Spark – Promotional Materials | Author's Tranquility Press",
  description:
    'Professionally designed bookmarks, business cards, and postcards for authors. Choose individual products or save with our Best Value bundle. Perfect for book launches, signings, and events.',
}

export default function BookSparkPage() {
  const service = getServiceBySlug('book-spark')!
  return <BookSparkContent service={service} />
}
