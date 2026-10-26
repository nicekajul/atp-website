import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './IPageListingContent.module.css'

/* ── Platform Highlights ───────────────────────────────── */
const HIGHLIGHTS = [
  { icon: '🌍', text: 'Used by more than 50,000 retailers, libraries, and educational institutions worldwide' },
  { icon: '📈', text: 'Receives thousands of visitors daily from publishing professionals' },
]

interface Props {
  service: Service
}

export default function IPageListingContent({ service }: Props) {
  const pkg = service.packages[0]

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

      {/* ── Offer ────────────────────────────────────────── */}
      <section className={styles.cardsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>What&apos;s Included</h2>
          <div className={[styles.cardsGrid, styles['cardsGrid--single']].join(' ')}>
            <article className={[styles.card, styles['card--highlight']].join(' ')}>

              {/* Card header */}
              <header className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">📚</span>
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

              {/* Campaign facts */}
              <dl className={styles.campaignFacts}>
                <div className={styles.campaignFact}>
                  <dt className={styles.campaignFactLabel}>Campaign Duration</dt>
                  <dd className={styles.campaignFactValue}>Two-week promotional campaign</dd>
                </div>
                <div className={styles.campaignFact}>
                  <dt className={styles.campaignFactLabel}>Turnaround</dt>
                  <dd className={styles.campaignFactValue}>{service.turnaround}</dd>
                </div>
              </dl>

              {/* CTA */}
              <footer className={styles.cardFooter}>
                <Button
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  variant="primary"
                  fullWidth
                >
                  Get Started
                </Button>
              </footer>
            </article>
          </div>
        </Container>
      </section>

      {/* ── Platform Highlights ───────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Platform Highlights</h2>
          <ul className={styles.whyList}>
            {HIGHLIGHTS.map((item, idx) => (
              <li key={idx} className={styles.whyItem}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <span className={styles.whyText}>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.bestFor}>
            <strong>Best For:</strong> Authors looking to increase professional visibility among bookstores, libraries, and institutional buyers.
          </p>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              📅 Campaigns run for <strong>two weeks</strong> with <strong>monthly scheduling</strong>.
            </p>
            <Button href="/contact?package=iPage+Listing" variant="primary" size="lg">
              Reserve My iPage Listing
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
