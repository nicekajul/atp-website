import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './BookstorePlacementContent.module.css'

const CARD_ICONS = ['\u{1F4D6}', '\u{1F31F}', '\u{1F389}']

const HIGHLIGHTS = [
  { icon: '\u{1F3EC}', text: 'A physical retail presence where readers browse, discover, and buy' },
  { icon: '\u{1F381}', text: 'Bookmarks, business cards, and branded giveaways that keep your book top of mind' },
  { icon: '\u{1F4F0}', text: 'A press release with every package to announce your book to the world' },
  { icon: '\u{1F4F8}', text: 'Grand Book Launch photos and videos you can share across social media' },
]

interface Props {
  service: Service
}

export default function BookstorePlacementContent({ service }: Props) {
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

      {/* ── Packages ─────────────────────────────────────── */}
      <section className={styles.cardsSection} id="pricing">
        <Container>
          <h2 className={styles.sectionHeading}>Choose Your Bookstore Experience</h2>
          <div className={styles.cardsGrid}>
            {service.packages.map((pkg, idx) => (
              <article
                key={pkg.name}
                className={[styles.card, pkg.highlight ? styles['card--highlight'] : ''].filter(Boolean).join(' ')}
              >
                {pkg.highlight && <span className={styles.valueRibbon}>Most Popular</span>}

                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">{CARD_ICONS[idx]}</span>
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  {pkg.bestFor && <p className={styles.cardTagline}>{pkg.bestFor}</p>}
                  <div className={styles.cardPriceRow}>
                    <span className={styles.cardPrice}>{pkg.price}</span>
                  </div>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </header>

                <ul className={styles.featuresList} aria-label={`${pkg.name} inclusions`}>
                  {pkg.features.map((f) => (
                    <li key={f} className={styles.featuresItem}>
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

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

      {/* ── Why ──────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Bookstore Placement</h2>
          <ul className={styles.whyList}>
            {HIGHLIGHTS.map((item) => (
              <li key={item.text} className={styles.whyItem}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <span className={styles.whyText}>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.bestFor}>
            <strong>Best For:</strong> Authors who want readers to discover their book in person, and authors planning a launch they can celebrate and share.
          </p>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              🏬 Displays run for <strong>2 to 3 months</strong>, or celebrate with a <strong>full-day signing</strong>.
            </p>
            <Button href="/contact?package=Bookstore+Placement+%E2%80%93+Premier" variant="primary" size="lg">
              Reserve My Bookstore Placement
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
