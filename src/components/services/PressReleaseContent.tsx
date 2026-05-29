import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './PressReleaseContent.module.css'

/* ── Why Partner data ──────────────────────────────────── */
interface WhyItem {
  icon: string
  title: string
  desc: string
}

const WHY_ITEMS: WhyItem[] = [
  {
    icon: '✍️',
    title: 'Strategic Storytelling',
    desc: 'Media-ready press releases aligned with industry standards.',
  },
  {
    icon: '📡',
    title: 'Targeted Distribution',
    desc: 'Shared across appropriate channels based on your subject.',
  },
  {
    icon: '📊',
    title: 'Transparent Reporting',
    desc: 'Confirmation and documentation of release distribution.',
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    desc: 'Four service tiers based on your goals.',
  },
]

/* ── Tier config (display metadata beyond the Package shape) */
interface TierMeta {
  step: string
  accentClass: string
}

const TIER_META: TierMeta[] = [
  { step: '01', accentClass: 'tier--1' },
  { step: '02', accentClass: 'tier--2' },
  { step: '03', accentClass: 'tier--3' },
  { step: '04', accentClass: 'tier--4' },
]

interface Props {
  service: Service
}

export default function PressReleaseContent({ service }: Props) {
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

      {/* ── Why Partner With Us ──────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Partner With Us</h2>
          <div className={styles.whyGrid}>
            {WHY_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Service Tiers ────────────────────────────────── */}
      <section className={styles.tiersSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right press release tier in 30 seconds" />
          <h2 className={styles.sectionHeading}>Service Tiers</h2>
          <p className={styles.tiersSubhead}>
            Each tier builds on the previous — choose the level that matches your goals.
          </p>

          <div className={styles.tiersGrid}>
            {service.packages.map((pkg, idx) => {
              const meta = TIER_META[idx]
              const isFirst = idx === 0
              const everythingLine = pkg.features.find(f => f.startsWith('Everything in'))
              const newFeatures = pkg.features.filter(f => !f.startsWith('Everything in'))

              return (
                <article
                  key={idx}
                  className={[styles.tierCard, styles[meta.accentClass]].join(' ')}
                >
                  {/* Top step band */}
                  <div className={styles.tierStep}>
                    <span className={styles.tierStepNum}>{meta.step}</span>
                    <span className={styles.tierStepLabel}>Tier {idx + 1}</span>
                  </div>

                  {/* Card header — mirrors PricingTable card__header */}
                  <div className={styles.cardHeader}>
                    {pkg.bestFor && (
                      <span className={styles.tierBestFor}>Best for: {pkg.bestFor}</span>
                    )}
                    <h3 className={styles.tierName}>{pkg.name}</h3>
                    <div className={styles.tierPriceBlock}>
                      <span className={styles.tierPrice}>{pkg.price}</span>
                      {pkg.bestForNote && (
                        <span className={styles.tierBadge}>{pkg.bestForNote}</span>
                      )}
                    </div>
                    <p className={styles.tierDesc}>{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <div className={styles.tierFeatures}>
                    {everythingLine && (
                      <p className={styles.tierInherits}>
                        <span className={styles.inheritArrow} aria-hidden="true">↑</span>
                        {everythingLine}
                      </p>
                    )}
                    <ul className={styles.featuresList}>
                      {newFeatures.map((f, fi) => (
                        <li key={fi} className={styles.featuresItem}>
                          <CheckIcon />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA footer */}
                  <div className={styles.tierCTA}>
                    <Button
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      variant={isFirst ? 'outline' : 'primary'}
                      size="sm"
                      fullWidth
                    >
                      {isFirst ? 'Get Started' : 'Request a Quote'}
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── Footer Note + CTA ────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              ⏱ Estimated turnaround: <strong>3–4 weeks</strong>
            </p>
            <Button href="/contact?package=Press+Release" variant="primary" size="lg">
              Request a Quote
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
