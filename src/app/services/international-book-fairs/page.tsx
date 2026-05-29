import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookFairsContent from '@/components/services/BookFairsContent'

export const metadata: Metadata = {
  title: "International Book Fairs | Author's Tranquility Press",
  description:
    'Showcase your book at prestigious international book fairs — Manila, Frankfurt, London, and more. Combined exhibit displays and signing packages managed by ATP.',
}

export default function BookFairsPage() {
  const service = getServiceBySlug('international-book-fairs')!
  return <BookFairsContent service={service} />
}
