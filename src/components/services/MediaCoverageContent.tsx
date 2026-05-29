import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './MediaCoverageContent.module.css'

/* ── "What to Expect" content per package ──────────────── */
interface ExpectItem {
  points: string[]
  turnaround: string
}

const EXPECT: Record<string, ExpectItem> = {
  'TV Interview': {
    points: [
      'Professionally produced interview segment',
      'Distribution via host\'s broadcast or digital channels',
      'Guidance from prep to final recording',
    ],
    turnaround: '4–6+ weeks',
  },
  'Podcast Interview': {
    points: [
      'Recorded interview episode',
      'Multi-platform distribution (Apple Podcasts, Google Podcasts, Spotify, etc.)',
      'Reusable content asset',
    ],
    turnaround: '4–6+ weeks',
  },
}

interface Props {
  service: Service
}

export default function MediaCoverageContent({ service }: Props) {
  const [tv, podcast] = service.packages

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

      {/* ── Service Cards ────────────────────────────────── */}
      <section className={styles.cardsSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right interview package in 30 seconds" />
          <h2 className={styles.sectionHeading}>Interview Packages</h2>
          <div className={styles.cardsGrid}>
            {[tv, podcast].map((pkg, idx) => {
              const expect = EXPECT[pkg.name]
              return (
                <article
                  key={idx}
                  className={[
                    styles.card,
                    pkg.highlight ? styles['card--highlight'] : '',
                  ].join(' ')}
                >
                  {pkg.highlight && (
                    <div className={styles.popularRibbon}>★ Most Popular</div>
                  )}

                  {/* Card header */}
                  <header className={styles.cardHeader}>
                    <span className={styles.cardIcon} aria-hidden="true">
                      {idx === 0 ? '📺' : '🎙️'}
                    </span>
                    {pkg.bestFor && (
                      <span className={styles.cardBestFor}>Best for: {pkg.bestFor}</span>
                    )}
                    <h3 className={styles.cardName}>{pkg.name}</h3>
                    <div className={styles.cardPrice}>{pkg.price}</div>
                    <p className={styles.cardDesc}>{pkg.description}</p>
                  </header>

                  {/* Includes */}
                  <ul className={styles.featuresList} aria-label={`${pkg.name} includes`}>
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className={styles.featuresItem}>
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* What to Expect */}
                  {expect && (
                    <div className={styles.expectBox}>
                      <p className={styles.expectHeading}>What to Expect</p>
                      <ul className={styles.expectList}>
                        {expect.points.map((point, pi) => (
                          <li key={pi} className={styles.expectItem}>
                            <span className={styles.expectDot} aria-hidden="true">→</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className={styles.turnaround}>
                        ⏱ Turnaround: <strong>{expect.turnaround}</strong>
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <footer className={styles.cardFooter}>
                    <Button
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      variant={pkg.highlight ? 'primary' : 'outline'}
                      fullWidth
                    >
                      Book My Interview
                    </Button>
                  </footer>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <Button href="/contact?package=Media+Coverage" variant="primary" size="lg">
              Book My Interview
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
