import React from 'react'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceGrid from '@/components/services/ServiceGrid'
import Button from '@/components/ui/Button'
import RevealItem from '@/components/ui/RevealItem'
import { getFeaturedServices } from '@/data/services'
import styles from './ServicesOverview.module.css'

export default function ServicesOverview() {
  const featuredServices = getFeaturedServices().slice(0, 3)

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          heading="Expertise Across Every Stage"
          subheading="More than just a printer—we provide end-to-end guidance to ensure your book achieves its highest potential"
        />
        
        <RevealItem delay={100}>
          <div className={styles.gridWrapper}>
            <ServiceGrid services={featuredServices} />
          </div>
        </RevealItem>

        <RevealItem delay={250}>
          <div className={styles.actionRow}>
            <Button href="/services" variant="outline" size="lg">
              View All Services & Pricing
            </Button>
          </div>
        </RevealItem>
      </Container>
    </section>
  )
}
