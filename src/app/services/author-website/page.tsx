import { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import AuthorWebsiteContent from '@/components/services/AuthorWebsiteContent'

export const metadata: Metadata = {
  title: 'Author Website Services | Author\'s Tranquility Press',
  description:
    'Professional author websites built for your brand. Choose from our Essential or Author Platform Pro packages — includes domain, hosting, SEO, and 6-month post-launch support.',
}

export default function AuthorWebsitePage() {
  const service = getServiceBySlug('author-website')!
  return <AuthorWebsiteContent service={service} />
}
