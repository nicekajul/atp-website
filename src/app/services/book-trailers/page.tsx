import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookTrailerContent from '@/components/services/BookTrailerContent'

export const metadata: Metadata = {
  title: "Book Trailers | Author's Tranquility Press",
  description:
    'Professionally crafted book trailers that capture attention and build anticipation. Four packages from 60-second teasers to fully animated cinematic trailers.',
}

export default function BookTrailersPage() {
  const service = getServiceBySlug('book-trailers')!
  return <BookTrailerContent service={service} />
}
