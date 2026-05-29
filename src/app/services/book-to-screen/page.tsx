import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookToScreenContent from '@/components/services/BookToScreenContent'

export const metadata: Metadata = {
  title: "Book-to-Screen Services | Author's Tranquility Press",
  description:
    "Position your book for film and television opportunities. From Hollywood Coverage Reports to full Screenplay Adaptation — professionally managed by ATP.",
}

export default function BookToScreenPage() {
  const service = getServiceBySlug('book-to-screen')!
  return <BookToScreenContent service={service} />
}
