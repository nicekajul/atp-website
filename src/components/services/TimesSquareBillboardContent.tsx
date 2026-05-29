'use client'

import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './TimesSquareBillboardContent.module.css'

/* ── Package Data ────────────────────────────────────────── */
const PACKAGES = [
  {
    ribbon: null,
    icon: '🗽',
    name: '24-Hour Digital Billboard',
    price: '$1,999',
    popular: false,
    desc: 'One full day of Times Square exposure — a targeted launch moment or milestone celebration at an iconic location.',
    deliverables: [
      {
        title: 'Premium Billboard Placement',
        desc: 'Feature your book on the iconic Times Square digital billboard at 1560 Broadway.',
      },
      {
        title: '24-Hour Campaign Duration',
        desc: 'Your ad runs for one full day within the billboard\'s scheduled advertising rotation.',
      },
      {
        title: '15-Second Billboard Feature',
        desc: 'Your display appears for 15 seconds during each scheduled rotation cycle throughout the campaign period.',
      },
      {
        title: 'Professional Video Creation Included',
        desc: 'We handle the creation and formatting of your billboard-ready promotional display.',
      },
    ],
    ctaHref: '/contact?package=24-Hour+Times+Square+Billboard',
    ctaLabel: 'Get Started',
  },
  {
    ribbon: '★ Most Popular',
    icon: '🏙️',
    name: '5-Day Digital Billboard',
    price: '$8,099',
    popular: true,
    desc: 'Five consecutive days of Times Square visibility for maximum reach, social content, and sustained author brand impact.',
    deliverables: [
      {
        title: 'High-Impact Digital Billboard Placement',
        desc: 'Your book appears on a vibrant LED billboard approximately 20 feet high by 50 feet wide.',
      },
      {
        title: 'Prime Times Square Location',
        desc: 'Displayed at 1560 Broadway, one of the busiest and most iconic areas in Times Square.',
      },
      {
        title: '5-Day Campaign Duration',
        desc: 'Your ad runs for 5 consecutive days within the billboard\'s scheduled advertising rotation.',
      },
      {
        title: '15-Second Billboard Feature',
        desc: 'Your customized promotional display appears for 15 seconds during each scheduled rotation cycle.',
      },
      {
        title: 'Professional Video Creation Included',
        desc: 'We create a polished digital billboard presentation using your book cover, title, author name, and promotional visuals.',
      },
    ],
    ctaHref: '/contact?package=5-Day+Times+Square+Billboard',
    ctaLabel: 'Get Started',
  },
]

/* ── Why Consider This Service ───────────────────────────── */
const WHY_ITEMS = [
  {
    icon: '📍',
    title: 'Prestigious Branding Opportunity',
    desc: 'Showcase your book in one of the world’s most famous advertising locations.',
  },
  {
    icon: '✍️',
    title: 'Enhanced Author Visibility',
    desc: 'Build excitement around your book launch or author brand with premium promotional exposure. ',
  },
  {
    icon: '📸',
    title: 'Excellent Social Media & PR Content',
    desc: 'Use your billboard feature for social media campaigns, press releases, websites, interviews, and promotional materials.',
  },
  {
    icon: '🤝',
    title: 'Fully Managed Process',
    desc: 'From video creation to campaign scheduling, we coordinate the entire process for you.',
  },
]

interface Props {
  service: Service
}

export default function TimesSquareBillboardContent({ service }: Props) {
  const [expanded, setExpanded] = useState(false)
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
            <p className={styles.heroSub}>
              Place your book in one of the most recognized advertising destinations in the world, Times Square. Our New York Times Square Digital Billboard service gives authors the opportunity to feature their book cover on a massive digital display<br/>at <strong>1560 Broadway</strong>, creating a memorable promotional and branding experience. 
            </p>
          </div>
        </Container>
      </header>

      {/* ── Location Intro ───────────────────────────────── */}
      <section className={styles.locationSection}>
        <Container>
          <div className={styles.locationInner}>
            <div className={styles.locationText}>
              <p className={styles.locationBody}>
                Whether you are celebrating a new release, a bestseller milestone, or expanding your author brand, this service offers premium visibility in the heart of New York City. 
              </p>
            </div>
            <div className={styles.locationStats}>
              <div className={styles.statItem}>
                <span className={styles.statIcon} aria-hidden="true">📍</span>
                <div>
                  <p className={styles.statLabel}>Location</p>
                  <p className={styles.statValue}>1560 Broadway, New York City</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon} aria-hidden="true">👥</span>
                <div>
                  <p className={styles.statLabel}>Foot Traffic</p>
                  <p className={styles.statValue}>One of NYC&apos;s busiest corridors</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon} aria-hidden="true">🌎</span>
                <div>
                  <p className={styles.statLabel}>Recognition</p>
                  <p className={styles.statValue}>Globally iconic destination</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Packages ─────────────────────────────────────── */}
      <section className={styles.packageSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Choose Your Package</h2>
          <p className={styles.packageSubhead}>
            Both packages include professional video creation and full campaign coordination by ATP.
          </p>

          <div className={styles.packageGrid}>
            {PACKAGES.map((pkg, i) => (
              <article
                key={i}
                className={[
                  styles.packageCard,
                  pkg.popular ? styles['packageCard--popular'] : '',
                ].join(' ')}
              >
                <div className={[styles.cardRibbon, !pkg.ribbon ? styles['cardRibbon--hidden'] : ''].join(' ')}>
                  {pkg.ribbon ?? ''}
                </div>

                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">{pkg.icon}</span>
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <div className={styles.cardPrice}>{pkg.price}</div>
                  <p className={styles.cardDesc}>{pkg.desc}</p>
                </header>

                {/* Always-visible quick facts */}
                <div className={styles.quickFacts}>
                  <div className={styles.quickFact}>
                    <span className={styles.quickFactLabel}>Campaign</span>
                    <span className={styles.quickFactValue}>
                      {i === 0 ? '24 Hours' : '5 Days'}
                    </span>
                  </div>
                  <div className={styles.quickFactDivider} />
                  <div className={styles.quickFact}>
                    <span className={styles.quickFactLabel}>Feature</span>
                    <span className={styles.quickFactValue}>15 sec / rotation</span>
                  </div>
                  <div className={styles.quickFactDivider} />
                  <div className={styles.quickFact}>
                    <span className={styles.quickFactLabel}>Turnaround</span>
                    <span className={styles.quickFactValue}>4–8 weeks</span>
                  </div>
                </div>

                {/* Collapsible details */}
                <div
                  className={[
                    styles.collapsible,
                    expanded ? styles['collapsible--open'] : '',
                  ].join(' ')}
                  aria-hidden={!expanded}
                >
                  <div className={styles.collapsibleInner}>
                    <div className={styles.sectionBlock}>
                      <p className={styles.sectionHeadingSmall}>What You&apos;ll Receive</p>
                      <ul className={styles.deliverableList}>
                        {pkg.deliverables.map((item, di) => (
                          <li key={di} className={styles.deliverableItem}>
                            <CheckIcon />
                            <div>
                              <p className={styles.deliverableTitle}>{item.title}</p>
                              <p className={styles.deliverableDesc}>{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.sectionBlock}>
                      <p className={styles.sectionHeadingSmall}>Investment &amp; Timeline</p>
                      <ul className={styles.timelineList}>
                        <li className={styles.timelineItem}>
                          <BulletIcon />
                          <span><strong>Price:</strong> {pkg.price}</span>
                        </li>
                        <li className={styles.timelineItem}>
                          <BulletIcon />
                          <span><strong>Turnaround Time:</strong> 4–8 weeks</span>
                        </li>
                        <li className={styles.timelineItem}>
                          <BulletIcon />
                          <span>Includes creative production, scheduling, and placement booking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  {/* Toggle button */}
                  <button
                    className={styles.toggleBtn}
                    onClick={() => setExpanded(v => !v)}
                    aria-expanded={expanded}
                  >
                    {expanded ? (
                      <>Show Less <span className={styles.toggleChevron} aria-hidden="true">↑</span></>
                    ) : (
                      <>Show All Details <span className={styles.toggleChevron} aria-hidden="true">↓</span></>
                    )}
                  </button>

                  <footer className={styles.cardFooter}>
                    <Button
                      href={pkg.ctaHref}
                      variant={pkg.popular ? 'primary' : 'outline'}
                      fullWidth
                    >
                      {pkg.ctaLabel}
                    </Button>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Consider This Service ─────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Choose This Service?</h2>
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

      {/* ── Important Note ───────────────────────────────── */}
      <section className={styles.noteSection}>
        <Container>
          <div className={styles.noteBox}>
            <span className={styles.noteIcon} aria-hidden="true">💡</span>
            <div>
              <h2 className={styles.noteTitle}>Important Note</h2>
              <p className={styles.noteBody}>
                This service is designed primarily for branding and visibility, rather than
                direct book sales. While it provides broad exposure, results may vary
                depending on how the feature is integrated into your overall marketing
                strategy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <Container>
          <div className={styles.finalCtaInner}>
            <h2 className={styles.finalCtaTitle}>
              Bring Your Book to One of the World&apos;s Most Iconic Screens
            </h2>
            <p className={styles.finalCtaBody}>
              Let our team help you turn your book into a high-impact visual experience
              in Times Square.
            </p>
            <Button
              href="/contact?package=Times+Square+Digital+Billboard"
              variant="gold"
              size="lg"
            >
              Consult With Our Team
            </Button>
          </div>
        </Container>
      </section>

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

function BulletIcon() {
  return (
    <svg className={styles.bulletIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="rgba(201,168,76,0.1)" />
      <path d="M4 7L6.2 9.2L10 4.8" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
