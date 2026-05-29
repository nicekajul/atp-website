import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import PrintAdvertisingContent from '@/components/services/PrintAdvertisingContent'

export const metadata: Metadata = {
  title: "Print Advertising | Author's Tranquility Press",
  description:
    'Secure ad placements in respected print publications — Los Angeles Times, Harper\'s Magazine, New York Times Book Review, and Publishers Weekly. Professionally coordinated by ATP.',
}

export default function PrintAdvertisingPage() {
  const service = getServiceBySlug('print-advertising')!
  return <PrintAdvertisingContent service={service} />
}
