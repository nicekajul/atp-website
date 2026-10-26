import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './BookReviewSquadContent.module.css'

/* ── Why Video Reviews Work ────────────────────────────── */
const WHY_ITEMS = [
  { icon: '🎥', text: 'Authentic, honest impressions from real readers on camera' },
  { icon: '📱', text: 'Engaging video content that attracts potential readers' },
  { icon: '🌐', text: "Strengthens your book's online presence" },
  { icon: '📰', text: 'A professionally distributed press release for every review' },
  { icon: '🤝', text: 'Submission, progress updates, and delivery managed by ATP' },
]

const CARD_ICONS = ['🎥', '🎬', '🏆']

interface Props {
  service: Service
}

export default function BookReviewSquadContent({ service }: Props) {
  return (
    <article className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <div className={styles.badgeWrapper}>
              <Badge variant="navy">{service.category}</Badge>
            </div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroTagline}>{service.tagline}</p>
          </div>
        </Container>
      </header>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className={styles.intro}>
        <Container>
          <p className={styles.introBody}>{service.longDescription}</p>
        </Container>
      </section>

      {/* ── Review Packages ──────────────────────────────── */}
      <section className={styles.cardsSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right video review package in 30 seconds" />
          <h2 className={styles.sectionHeading}>Video Review Packages</h2>
          <div className={styles.cardsGrid}>
            {service.packages.map((pkg, idx) => (
              <article
                key={idx}
                className={[
                  styles.card,
                  pkg.highlight ? styles['card--highlight'] : '',
                ].join(' ')}
              >
                {pkg.highlight && pkg.priceNote && (
                  <div className={styles.valueRibbon}>★ {pkg.priceNote}</div>
                )}

                {/* Card header */}
                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {CARD_ICONS[idx]}
                  </span>
                  <div className={styles.runtimeBadge}>
                    🎥 {pkg.bestForNote}: {pkg.bestFor}
                  </div>
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <div className={styles.cardPriceRow}>
                    <span className={styles.cardPrice}>{pkg.price}</span>
                  </div>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </header>

                {/* Features */}
                <ul className={styles.featuresList} aria-label={`${pkg.name} features`}>
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className={styles.featuresItem}>
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <footer className={styles.cardFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.highlight ? 'primary' : 'outline'}
                    fullWidth
                  >
                    Get Started
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Video Reviews Work ────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Video Reviews Work</h2>
          <ul className={styles.whyList}>
            {WHY_ITEMS.map((item, idx) => (
              <li key={idx} className={styles.whyItem}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <span className={styles.whyText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              ⏱ Turnaround is approximately <strong>4–8 weeks</strong> from submission.
            </p>
            <Button href="/contact?package=Book+Review+Squad+Videos" variant="primary" size="lg">
              Get My Video Reviews
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Social Proof ─────────────────────────────────── */}
      <ServiceProof serviceType={service.title} />

    </article>
  )
}

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.1)" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
