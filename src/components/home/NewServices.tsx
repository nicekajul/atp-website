import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealItem from '@/components/ui/RevealItem'
import { getServiceBySlug, Service } from '@/data/services'
import { newServiceSlugs } from '@/data/nav'
import styles from './NewServices.module.css'

function getPriceLabel(service: Service): string {
  if (service.startingPrice) return service.startingPrice
  if (service.packages.length === 0) return 'Custom pricing'
  return `From ${service.packages[0].price}`
}

export default function NewServices() {
  const newServices = newServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => Boolean(service))

  if (newServices.length === 0) return null

  return (
    <section className={styles.section} aria-label="New services">
      <Container>
        <SectionHeader
          eyebrow="Just Added"
          heading="New Services for Authors"
          subheading="Fresh ways to reach literary agents, earn recognition, and put your book in front of readers, retailers, and libraries."
          theme="dark"
        />

        <ul className={styles.grid}>
          {newServices.map((service, idx) => (
            <li key={service.slug} className={styles.item}>
              <RevealItem delay={idx * 80} className={styles.reveal}>
                <Link href={`/services/${service.slug}`} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.icon} aria-hidden="true">{service.icon}</span>
                    <span className={styles.newBadge}>New</span>
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.desc}>{service.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.price}>{getPriceLabel(service)}</span>
                    <span className={styles.link}>Learn More &rarr;</span>
                  </div>
                </Link>
              </RevealItem>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
