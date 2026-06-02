import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.patternLayer} />
      </div>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>Premium Partner for Authors</span>
          </div>
          <h1 className={styles.heading}>
            Publish Your Story.<br />
            <span className={styles.highlight}>Build Your Legacy.</span>
          </h1>
          <p className={styles.subheading}>
            Guided professional publishing, stunning design, and strategic marketing for authors who demand excellence. From manuscript to bestseller, we are your dedicated publishing team.
          </p>
          <div className={styles.actions}>
            <div className={styles.primaryActions}>
              <Button href="/services" variant="primary" size="lg">Explore Services</Button>
              <Button href="/bookstore" variant="outline" size="lg" className={styles.outlineBtn}>Browse Bookstore</Button>
            </div>
            
            <div className={styles.secondaryActions}>
              <Link href="/quiz" className={styles.quizLink}>
                Not sure where to start? <strong>Find your perfect package in 30 seconds &rarr;</strong>
              </Link>
            </div>

            <div className={styles.textAction}>
              <a href="/contact" className={styles.textLink}>Get Free Consultation &rarr;</a>
            </div>
          </div>
          
          <div className={styles.segmentation}>
            <p className={styles.segmentationLabel}>How can we help you today?</p>
            <div className={styles.segmentationButtons}>
              <Button href="/services/publishing-packages" variant="ghost" size="sm" className={styles.segBtn}>New Author</Button>
              <Button href="/quiz" variant="ghost" size="sm" className={styles.segBtn}>Published Author</Button>
              <Button href="/marketing" variant="ghost" size="sm" className={styles.segBtn}>Need Marketing Help</Button>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Authors Published</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>1,000+</span>
              <span className={styles.statLabel}>Books Produced</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>Global</span>
              <span className={styles.statLabel}>Distribution</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
