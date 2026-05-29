import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './BookTrailerContent.module.css'

/* ── Why Book Trailers Matter ──────────────────────────── */
const WHY_ITEMS = [
  { icon: '📱', text: 'Boosts engagement on social media' },
  { icon: '🔍', text: 'Increases book discoverability' },
  { icon: '🏆', text: 'Strengthens your brand as an author' },
  { icon: '🔗', text: 'Creates shareable, buzz-worthy content' },
  { icon: '💰', text: 'Encourages higher conversion to sales' },
]

const CARD_ICONS = ['🎬', '🎞️', '🏆', '✨']

interface Props {
  service: Service
}

export default function BookTrailerContent({ service }: Props) {
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

      {/* ── Trailer Packages ─────────────────────────────── */}
      <section className={styles.cardsSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right book trailer in 30 seconds" />
          <h2 className={styles.sectionHeading}>Trailer Packages</h2>
          <div className={styles.cardsGrid}>
            {service.packages.map((pkg, idx) => {
              const inheritLine = pkg.features.find(f => f.startsWith('Everything in'))
              const addonLine   = pkg.features.find(f => f.startsWith('Add-on:'))
              const bonusLine   = pkg.features.find(f => f.startsWith('BONUS:'))
              const coreFeatures = pkg.features.filter(
                f =>
                  !f.startsWith('Everything in') &&
                  !f.startsWith('Add-on:') &&
                  !f.startsWith('BONUS:'),
              )
              const isAnimated = idx === 3

              return (
                <article
                  key={idx}
                  className={[
                    styles.card,
                    pkg.highlight ? styles['card--highlight'] : '',
                    isAnimated  ? styles['card--animated']   : '',
                  ].join(' ')}
                >
                  {pkg.highlight && (
                    <div className={styles.premiumRibbon}>★ Premium</div>
                  )}
                  {isAnimated && (
                    <div className={styles.animatedRibbon}>✦ Fully Animated</div>
                  )}

                  {/* Card header */}
                  <header className={styles.cardHeader}>
                    <span className={styles.cardIcon} aria-hidden="true">
                      {CARD_ICONS[idx]}
                    </span>
                    <div className={styles.runtimeBadge}>
                      ⏱ {pkg.bestForNote}: {pkg.bestFor}
                    </div>
                    <h3 className={styles.cardName}>{pkg.name}</h3>
                    <div className={styles.cardPriceRow}>
                      <span className={styles.cardPrice}>{pkg.price}</span>
                      {pkg.priceNote && (
                        <span className={styles.priceBadge}>{pkg.priceNote}</span>
                      )}
                    </div>
                    <p className={styles.cardDesc}>{pkg.description}</p>
                  </header>

                  {/* Inherits pill */}
                  {inheritLine && (
                    <p className={styles.inheritPill}>
                      <span className={styles.inheritArrow} aria-hidden="true">↑</span>
                      {inheritLine}
                    </p>
                  )}

                  {/* Core features */}
                  <ul className={styles.featuresList} aria-label={`${pkg.name} features`}>
                    {coreFeatures.map((f, fi) => (
                      <li key={fi} className={styles.featuresItem}>
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Animated note */}
                  {isAnimated && (
                    <div className={styles.animatedNote}>
                      <span className={styles.animatedNoteIcon} aria-hidden="true">🎨</span>
                      <span>
                        Perfect for children&apos;s books or visually imaginative stories
                      </span>
                    </div>
                  )}

                  {/* Optional add-on */}
                  {addonLine && (
                    <div className={styles.addonBox}>
                      <span className={styles.addonLabel}>Optional Add-on</span>
                      <span className={styles.addonText}>
                        {addonLine.replace('Add-on: ', '')}
                      </span>
                    </div>
                  )}

                  {/* Bonus */}
                  {bonusLine && (
                    <div className={styles.bonusBox}>
                      <span className={styles.bonusIcon} aria-hidden="true">🎁</span>
                      <div>
                        <span className={styles.bonusLabel}>Bonus Included</span>
                        <span className={styles.bonusText}>
                          {bonusLine.replace('BONUS: ', '')}
                        </span>
                      </div>
                    </div>
                  )}

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
        </Container>
      </section>

      {/* ── Why Book Trailers Matter ──────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Book Trailers Matter</h2>
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
              ⏱ Production typically takes <strong>4+ weeks</strong> depending on complexity.
            </p>
            <Button href="/contact?package=Book+Trailer" variant="primary" size="lg">
              Create My Book Trailer
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
