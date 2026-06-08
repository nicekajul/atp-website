import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import styles from './HomeCTA.module.css'

export default function HomeCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.patternLayer} />
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to bring your book to the world?</h2>
          <p className={styles.subheading}>
            Join the hundreds of authors who have built their legacy with Author's Tranquility Press.
            Schedule a free consultation with our publishing experts today.
          </p>
          <div className={styles.actions}>
            <div className={styles.primaryAction}>
              <Button href="/contact" variant="primary" size="lg">
                Start Your Publishing Journey
              </Button>
              <p className={styles.supportText}>No obligation consultation. Response within 24 hours.</p>
            </div>
            <Button href="/services" variant="outline" size="lg" className={styles.outlineBtn}>
              See Pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
