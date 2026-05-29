import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './PrintAdvertisingContent.module.css'

/* ── Intro Focus Points ──────────────────────────────────── */
const FOCUS_POINTS = [
  'Trusted print publications',
  'Real ad placements',
  'Clear deliverables',
  'Realistic expectations',
  'Professional coordination and submission support',
]

/* ── Publication Ad Packages ─────────────────────────────── */
interface AdPackage {
  id: string
  name: string
  icon: string
  price: string
  badge?: string
  subtitle: string
  description: string
  details: string[]
  turnaround: string
  bestFor: string
  highlight?: boolean
}

const AD_PACKAGES: AdPackage[] = [
  {
    id: 'la-times',
    name: 'Los Angeles Times Advertising',
    icon: '📰',
    price: '$2,999',
    badge: 'Regional Exposure',
    subtitle: 'Target Regional Readers Through a Major U.S. Newspaper',
    description:
      'Promote your book in the Arts & Books section of a widely recognized daily newspaper. This placement allows you to reach readers who regularly engage with literary and cultural content.',
    details: [
      'Placement: Arts & Books section (Sunday issue)',
      'Ad Format: Small display ad (black & white)',
      'Includes ad design and submission assistance',
    ],
    turnaround: 'Approx. 4–6 weeks (design, approval, scheduling)',
    bestFor:
      'Authors seeking regional exposure and association with a well-known publication.',
  },
  {
    id: 'harpers',
    name: "Harper's Magazine Advertising",
    icon: '📖',
    price: '$4,599',
    badge: 'Literary Focus',
    subtitle: 'Reach a Niche Literary and Intellectual Audience',
    description:
      'Position your book within a long-standing literary magazine known for essays, criticism, and cultural commentary.',
    details: [
      'Ad Size: Approx. 1/8 page placement',
      'Price: $4,599 per title',
      'Print inclusion in a scheduled issue',
      'One contributor copy provided',
    ],
    turnaround: '5–6 months (publication lead times apply)',
    bestFor:
      'Literary, nonfiction, or thought-driven books targeting a discerning readership.',
  },
  {
    id: 'nyt-book-review',
    name: 'New York Times Book Review Advertising',
    icon: '⭐',
    price: '$5,699',
    badge: 'Most Recognized',
    highlight: true,
    subtitle: 'Appear in One of the Most Recognized Book Sections',
    description:
      'Secure placement in a highly visible book-focused section read by avid readers and industry followers.',
    details: [
      'Placement: Book Review section',
      'Format: Standard ad slot (size based on availability)',
      'Includes coordination and submission',
    ],
    turnaround: '5–6 months (subject to publication scheduling)',
    bestFor:
      'Authors looking to align their book with a widely recognized literary platform.',
  },
]

/* ── Publishers Weekly Tiers ─────────────────────────────── */
interface PWTier {
  id: string
  name: string
  price: string
  features: string[]
  turnaround: string
  highlight?: boolean
}

const PW_TIERS: PWTier[] = [
  {
    id: 'pw-quarter',
    name: 'Quarter-Page Ad',
    price: '$899',
    features: [
      'Print ad placement',
      'Limited digital exposure (where applicable)',
      '1–2 contributor copies',
    ],
    turnaround: '~4–6 weeks',
  },
  {
    id: 'pw-quarter-extended',
    name: 'Quarter-Page Extended Visibility',
    price: '$4,000',
    highlight: true,
    features: [
      'Print ad placement',
      'Extended digital feature (multi-month visibility)',
    ],
    turnaround: '~4–6 weeks',
  },
  {
    id: 'pw-full',
    name: 'Full-Page Ad',
    price: '$6,999',
    features: [
      'Full-page print placement',
      'Maximum visual impact within the issue',
      'One contributor copy',
    ],
    turnaround: '5–6 months',
  },
]

/* ── What to Expect ──────────────────────────────────────── */
const EXPECT_ITEMS = [
  {
    icon: '📋',
    title: 'Placement, not endorsement',
    desc: 'Ads increase visibility but do not guarantee reviews or sales.',
  },
  {
    icon: '📅',
    title: 'Publication schedules apply',
    desc: 'Print timelines are often set months in advance.',
  },
  {
    icon: '🎨',
    title: 'Professional presentation',
    desc: 'We assist with ad design to meet each publication\'s standards.',
  },
]

/* ── Why Work With Us ────────────────────────────────────── */
const WHY_ITEMS = [
  {
    icon: '✅',
    title: 'Deliverable-based services',
    desc: 'Clear, transparent expectations — you know exactly what is included before you commit.',
  },
  {
    icon: '🎯',
    title: 'Realistic positioning',
    desc: 'No inflated circulation claims — we set honest expectations so you can plan accordingly.',
  },
  {
    icon: '🤝',
    title: 'Hands-on coordination',
    desc: 'We handle submission, scheduling, and follow-up so you stay focused on your writing.',
  },
  {
    icon: '🌐',
    title: 'Tailored options',
    desc: 'Choices for both consumer reader audiences and publishing industry professionals.',
  },
]

interface Props {
  service: Service
}

export default function PrintAdvertisingContent({ service }: Props) {
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
          <ul className={styles.focusList}>
            {FOCUS_POINTS.map((point, i) => (
              <li key={i} className={styles.focusItem}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Publication Ad Packages ───────────────────────── */}
      <section className={styles.packagesSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right print placement in 30 seconds" />
          <h2 className={styles.sectionHeading}>Print Advertising Packages</h2>
          <p className={styles.packagesSubhead}>
            Each placement is professionally coordinated by ATP — from ad design to final submission.
          </p>

          <div className={styles.packagesGrid}>
            {AD_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className={[
                  styles.adCard,
                  pkg.highlight ? styles['adCard--highlight'] : '',
                ].filter(Boolean).join(' ')}
              >
                {pkg.badge && (
                  <div className={styles.cardRibbon}>{pkg.badge}</div>
                )}

                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">{pkg.icon}</span>
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <div className={styles.cardPrice}>{pkg.price}</div>
                  <p className={styles.cardSubtitle}>{pkg.subtitle}</p>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </header>

                <div className={styles.cardSections}>
                  <div className={styles.sectionBlock}>
                    <p className={styles.sectionHeadingSmall}>Package Details</p>
                    <ul className={styles.sectionList}>
                      {pkg.details.map((d, di) => (
                        <li key={di} className={styles.sectionListItem}>
                          <BulletIcon />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.sectionBlock}>
                    <p className={styles.sectionHeadingSmall}>Best For</p>
                    <p className={styles.sectionText}>{pkg.bestFor}</p>
                  </div>
                </div>

                <div className={styles.turnaroundTag}>
                  ⏱ Turnaround: <strong>{pkg.turnaround}</strong>
                </div>

                <footer className={styles.cardFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.highlight ? 'primary' : 'outline'}
                    fullWidth
                    size="sm"
                  >
                    Inquire About This Placement
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Publishers Weekly ────────────────────────────── */}
      <section className={styles.pwSection}>
        <Container>
          <div className={styles.pwHeadingBlock}>
            <h2 className={styles.sectionHeading}>Publishers Weekly Advertising</h2>
            <p className={styles.pwIntro}>
              Reach a trade publication widely read by librarians, booksellers, and publishing
              professionals. Choose from three placement options based on your budget and
              visibility goals.
            </p>
          </div>

          <div className={styles.pwGrid}>
            {PW_TIERS.map((tier) => (
              <article
                key={tier.id}
                className={[
                  styles.pwCard,
                  tier.highlight ? styles['pwCard--highlight'] : '',
                ].filter(Boolean).join(' ')}
              >
                {tier.highlight && (
                  <div className={styles.cardRibbon}>★ Most Popular</div>
                )}

                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">📰</span>
                  <h3 className={styles.cardName}>{tier.name}</h3>
                  <div className={styles.cardPrice}>{tier.price}</div>
                </header>

                <ul className={styles.featuresList} aria-label={`${tier.name} includes`}>
                  {tier.features.map((f, fi) => (
                    <li key={fi} className={styles.featuresItem}>
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.turnaroundTag}>
                  ⏱ Turnaround: <strong>{tier.turnaround}</strong>
                </div>

                <footer className={styles.cardFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent('Publishers Weekly – ' + tier.name)}`}
                    variant={tier.highlight ? 'primary' : 'outline'}
                    fullWidth
                    size="sm"
                  >
                    Inquire About This Placement
                  </Button>
                </footer>
              </article>
            ))}
          </div>

          <p className={styles.pwBestFor}>
            <strong>Best for:</strong> Authors aiming to reach industry professionals and
            increase trade awareness.
          </p>
        </Container>
      </section>

      {/* ── What to Expect ───────────────────────────────── */}
      <section className={styles.expectSection}>
        <Container>
          <h2 className={styles.sectionHeading}>What to Expect</h2>
          <div className={styles.whyGrid}>
            {EXPECT_ITEMS.map((item, idx) => (
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

      {/* ── Why Work With Us ─────────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Work With Us</h2>
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

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <Container>
          <div className={styles.finalCtaInner}>
            <h2 className={styles.finalCtaTitle}>
              Place Your Book Where Serious Readers Discover New Titles
            </h2>
            <p className={styles.finalCtaBody}>
              Let our team help you select the right print advertising opportunity based on
              your book, target audience, and promotional goals.
            </p>
            <Button
              href="/contact?package=Print+Advertising"
              variant="gold"
              size="lg"
            >
              Consult With Our Team
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

function BulletIcon() {
  return (
    <svg className={styles.bulletIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="rgba(201,168,76,0.1)" />
      <path d="M4 7L6.2 9.2L10 4.8" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
