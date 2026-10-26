import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import QueryLetterContent from '@/components/services/QueryLetterContent'

export const metadata: Metadata = {
  title: 'Query Letter Services',
  description:
    'Professionally written query letters for literary agents, with optional submission to up to 15, 30, or 60 agents. Query Letter Creation from $429.',
}

export default function QueryLetterServicesPage() {
  const service = getServiceBySlug('query-letter-services')!
  return <QueryLetterContent service={service} />
}
