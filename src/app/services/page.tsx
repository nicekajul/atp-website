import { Metadata } from 'next'
import { services } from '@/data/services'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceGrid from '@/components/services/ServiceGrid'
import DecisionFriction from '@/components/ui/DecisionFriction'
import PageCTA from '@/components/shared/PageCTA'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Publishing Services',
  description: 'Explore our comprehensive author services, from editing and book design to publishing packages and marketing.',
}

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.patternLayer} />
        <Container>
          <div className={styles.heroInner}>
            <SectionHeader
              eyebrow="What We Offer"
              heading="Our Services"
              subheading="Everything you need to publish a professional, competitive book that readers will love. Explore our packages below or contact us to build a custom publishing plan."
              align="center"
              theme="dark"
            />
          </div>
        </Container>
      </header>

      <section className={styles.directory}>
        <Container>
          <ServiceGrid services={services} />
        </Container>
      </section>

      <section className={styles.quiz}>
        <Container>
          <DecisionFriction />
        </Container>
      </section>

      <PageCTA
        variant="publish"
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/contact"
      />
    </div>
  )
}
