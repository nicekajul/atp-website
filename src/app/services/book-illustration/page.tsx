import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import BookIllustrationContent from '@/components/services/BookIllustrationContent'

export const metadata: Metadata = {
  title: "Book Illustration Services | Author's Tranquility Press",
  description:
    "Professional book illustrations in multiple detail levels — from clean line art to fully rendered digital artwork. Tailored to your story and audience by ATP.",
}

export default function BookIllustrationPage() {
  const service = getServiceBySlug('book-illustration')!
  return <BookIllustrationContent service={service} />
}
