import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/data/services'
import ServiceDetail from '@/components/services/ServiceDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

// Ensure static rendering for known service pages
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
}
