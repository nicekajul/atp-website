import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import LiteraryTitanContent from '@/components/services/LiteraryTitanContent'

export const metadata: Metadata = {
  title: 'Literary Titan Book Award Submission',
  description:
    'Submit your book for the Literary Titan Book Award, with a Literary Titan book review, author interview opportunity, and promotional exposure. Managed by ATP for $449.',
}

export default function LiteraryTitanBookAwardPage() {
  const service = getServiceBySlug('literary-titan-book-award')!
  return <LiteraryTitanContent service={service} />
}
