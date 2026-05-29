import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookAwardsContent from '@/components/services/BookAwardsContent'

export const metadata: Metadata = {
  title: "Book Awards Registration | Author's Tranquility Press",
  description:
    'ATP manages your literary award submissions end-to-end — Book Excellence Award, Eric Hoffer Award, Pacific Book Award, and more.',
}

export default function BookAwardsPage() {
  const service = getServiceBySlug('book-awards')!
  return <BookAwardsContent service={service} />
}
