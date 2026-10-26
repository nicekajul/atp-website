import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './DepTrackingContent.module.css'

/* ── What's Not Included ───────────────────────────────── */
const NOT_INCLUDED = [
  'Query Letter Creation',
  'Query Letter revisions or rewriting',
  'Strategic Target Research',
  'Document Endorsement Kit',
  'Author Pitch Development',
  'Press Release',
  'Creation of submission materials',
]

const CARD_ICONS = ['📋', '🥇', '💎']

interface Props {
  service: Service
}

export default function DepTrackingContent({ service }: Props) {
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
          <p className={styles.introLead}>
            Already have your query letter and submission materials prepared?
          </p>
          {service.longDescription.split('\n\n').map((para, idx) => (
            <p key={idx} className={styles.introBody}>{para}</p>
          ))}
        </Container>
      </section>

      {/* ── Tracking Packages ────────────────────────────── */}
      <section className={styles.cardsSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right tracking package in 30 seconds" />
          <h2 className={styles.sectionHeading}>Tracking Packages</h2>
          <p className={styles.sectionSubhead}>
            Every package includes the same tracking service. Choose based on how many literary agents you are reaching out to.
          </p>
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
                    📬 {pkg.bestForNote}: {pkg.bestFor}
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

      {/* ── What's Not Included ───────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>What&apos;s Not Included</h2>
          <p className={styles.sectionSubhead}>
            DEP Tracking Packages focus on monitoring and managing your submissions. They do not include:
          </p>
          <ul className={styles.whyList}>
            {NOT_INCLUDED.map((item, idx) => (
              <li key={idx} className={[styles.whyItem, styles['whyItem--excluded']].join(' ')}>
                <CrossIcon />
                <span className={styles.whyText}>{item}</span>
              </li>
            ))}
          </ul>

          <p className={styles.bestFor}>
            <strong>Best For:</strong> Authors who already have their query letter and submission materials prepared and want assistance organizing and monitoring their outreach to literary agents.
            {' '}Need your query letter and endorsement materials created too? See the complete{' '}
            <Link href="/services/book-to-screen">Document Endorsement Program</Link>.
          </p>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              ⏱ Turnaround is typically <strong>4–8 weeks</strong>.
            </p>
            <p className={styles.ctaNote}>
              Turnaround time may vary depending on the number of agents being tracked, submission requirements, and the volume of outreach being managed.
            </p>
            <Button href="/contact?package=DEP+Tracking+Packages" variant="primary" size="lg">
              Start Tracking My Outreach
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

function CrossIcon() {
  return (
    <svg className={styles.crossIcon} width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(15,27,45,0.06)" />
      <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
