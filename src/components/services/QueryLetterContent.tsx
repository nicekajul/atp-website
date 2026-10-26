import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './QueryLetterContent.module.css'

/* ── Turnaround ────────────────────────────────────────── */
const TIMELINE = [
  {
    label: 'Development & Approval',
    value: '4–8 Weeks',
    body: 'Query Letter Creation and Query Letter Creation with Distribution typically require 4–8 weeks for query letter development and author approval.',
  },
  {
    label: 'Distribution',
    value: '1–2 Business Days',
    body: 'Distribution is performed after the query letter has been approved. Submission processing typically requires 1–2 business days, depending on the submission requirements of the targeted agents.',
  },
]

const CARD_ICONS = ['✍️', '📨', '📬', '🚀']

interface Props {
  service: Service
}

export default function QueryLetterContent({ service }: Props) {
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
          {service.longDescription.split('\n\n').map((para, idx) => (
            <p key={idx} className={styles.introBody}>{para}</p>
          ))}
        </Container>
      </section>

      {/* ── Available Options ────────────────────────────── */}
      <section className={styles.cardsSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right query letter option in 30 seconds" />
          <h2 className={styles.sectionHeading}>Available Options</h2>
          <p className={styles.sectionSubhead}>
            Have your query letter written for you to submit yourself, or have it written and submitted to literary agents on your behalf.
          </p>
          <div className={styles.cardsGrid}>
            {service.packages.map((pkg, idx) => {
              const isStandalone = idx === 0

              return (
                <article
                  key={idx}
                  className={[
                    styles.card,
                    pkg.highlight ? styles['card--highlight'] : '',
                    isStandalone ? styles['card--standalone'] : '',
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
                    <span className={styles.optionLabel}>
                      {isStandalone ? 'Query Letter Creation' : 'Creation with Distribution'}
                    </span>
                    <div className={styles.runtimeBadge}>
                      {pkg.bestForNote}: {pkg.bestFor}
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
              )
            })}
          </div>

          {/* Best For */}
          <div className={styles.bestForGrid}>
            <p className={styles.bestFor}>
              <strong>Query Letter Creation is best for:</strong> Authors who need a professionally prepared query letter and plan to handle agent submissions themselves.
            </p>
            <p className={styles.bestFor}>
              <strong>Creation with Distribution is best for:</strong> Authors who want professional query letter preparation and assistance submitting their query letter to literary agents.
            </p>
          </div>

          <div className={styles.noteBox}>
            <p className={styles.bestFor}>
              <strong>Please Note:</strong> This service covers query letter preparation and submission. It does not include ongoing response monitoring or submission tracking.
              {' '}For organized tracking of your agent outreach, see our{' '}
              <Link href="/services/dep-tracking-packages">DEP Tracking Packages</Link>.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Turnaround Time ──────────────────────────────── */}
      <section className={styles.timelineSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Turnaround Time</h2>
          <ol className={styles.timeline}>
            {TIMELINE.map((step) => (
              <li key={step.label} className={styles.timelineStep}>
                <span className={styles.timelineStepLabel}>{step.label}</span>
                <p className={styles.timelineStepValue}>{step.value}</p>
                <p className={styles.timelineStepBody}>{step.body}</p>
              </li>
            ))}
          </ol>

          <div className={styles.noteBox}>
            <p className={styles.bestFor}>
              <strong>Requirements:</strong> To begin, we require a copy of the manuscript unless the book has recently been published through Author&apos;s Tranquility Press.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              ✍️ Query letters are typically developed and approved within <strong>4–8 weeks</strong>.
            </p>
            <Button href="/contact?package=Query+Letter+Services" variant="primary" size="lg">
              Start My Query Letter
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
