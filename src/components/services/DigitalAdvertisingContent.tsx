import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './DigitalAdvertisingContent.module.css'

interface Props {
  service: Service
}

export default function DigitalAdvertisingContent({ service }: Props) {
  const [youtube, video15] = service.packages

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
          <DecisionFriction customHeadline="Find the right advertising plan in 30 seconds" />
          <h2 className={styles.sectionHeading}>Campaigns</h2>
          <div className={styles.cardsGrid}>

            {/* YouTube Advertising Boost */}
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <div className={styles.cardIconRow}>
                  <span className={styles.cardIcon} aria-hidden="true">▶️</span>
                  {youtube.bestForNote && (
                    <span className={styles.cardTag}>{youtube.bestForNote}</span>
                  )}
                </div>
                <h3 className={styles.cardName}>{youtube.name}</h3>
                <div className={styles.cardPrice}>{youtube.price}</div>
                <p className={styles.cardDesc}>{youtube.description}</p>
              </header>

              {/* Availability note — specific to this card */}
              <div className={styles.availabilityNote}>
                <span className={styles.noteIcon} aria-hidden="true">ℹ️</span>
                <p>
                  Available for video assets produced through Author&apos;s Tranquility Press
                  (book trailers, podcast interviews, TV interview segments).
                </p>
              </div>

              <ul className={styles.featuresList}>
                {youtube.features.map((f, i) => (
                  <li key={i} className={styles.featuresItem}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <footer className={styles.cardFooter}>
                <Button
                  href={`/contact?package=${encodeURIComponent(youtube.name)}`}
                  variant="outline"
                  fullWidth
                >
                  Boost My Book&apos;s Visibility
                </Button>
              </footer>
            </article>

            {/* 15-Second Video Marketing */}
            <article className={[styles.card, styles['card--highlight']].join(' ')}>
              <div className={styles.popularRibbon}>✦ Full Production Included</div>
              <header className={styles.cardHeader}>
                <div className={styles.cardIconRow}>
                  <span className={styles.cardIcon} aria-hidden="true">🎬</span>
                </div>
                <h3 className={styles.cardName}>{video15.name}</h3>
                <div className={styles.cardPrice}>{video15.price}</div>
                <p className={styles.cardDesc}>{video15.description}</p>
              </header>

              <ul className={styles.featuresList}>
                {video15.features.map((f, i) => (
                  <li key={i} className={styles.featuresItem}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <footer className={styles.cardFooter}>
                <Button
                  href={`/contact?package=${encodeURIComponent(video15.name)}`}
                  variant="primary"
                  fullWidth
                >
                  Boost My Book&apos;s Visibility
                </Button>
              </footer>
            </article>

          </div>
        </Container>
      </section>

      {/* ── Footer Note + CTA ────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaNote}>
              Both campaigns are delivered within a <strong>monthly campaign cycle</strong>.
            </p>
            <Button href="/contact?package=Digital+Advertising" variant="primary" size="lg">
              Boost My Book&apos;s Visibility
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
