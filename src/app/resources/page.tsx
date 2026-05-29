import { Metadata } from 'next'
import Container from '@/components/layout/Container'
import ResourcesHub from '@/components/tools/ResourcesHub'
import PageCTA from '@/components/shared/PageCTA'
import styles from './ResourcesPage.module.css'

export const metadata: Metadata = {
  title: 'Author Resources & Tools | Authors Tranquility Press',
  description: 'Free interactive tools for authors — publishing cost calculator, royalty estimator, book launch checklist, title generator, and more.',
}

export default function ResourcesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.patternLayer} />
        <Container>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Free Author Tools</p>
            <h1 className={styles.title}>Author Resources &amp; Tools</h1>
            <p className={styles.subtitle}>
              Plan smarter, publish confidently. Seven free interactive tools built for self-published and indie authors.
            </p>
            <div className={styles.divider} />
          </div>
        </Container>
      </section>

      <section className={styles.hubSection}>
        <Container>
          <ResourcesHub />
        </Container>
      </section>

      <PageCTA variant="discover" />
    </div>
  )
}
