import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './BookIllustrationContent.module.css'

/* ── Illustration Tiers ──────────────────────────────────── */
interface IllustrationTier {
  id: string
  icon: string
  name: string
  price: string
  badge?: string
  highlight?: boolean
  descItems: string[]
}

const TIERS: IllustrationTier[] = [
  {
    id: 'enhancement',
    icon: '✨',
    name: 'Illustration Enhancement',
    price: '$99',
    descItems: [
      'Enhances an existing illustration within the book',
      'Ideal for minor improvements or touch-ups',
      'Quick turnaround compared to full illustrations',
    ],
  },
  {
    id: 'level-1',
    icon: '✏️',
    name: 'Level 1 Illustration',
    price: '$219',
    descItems: [
      'Simple, clean line art',
      'Flat, one-dimensional colors',
      'No shading or highlights',
      'Similar to coloring book style',
    ],
  },
  {
    id: 'level-2',
    icon: '🎨',
    name: 'Level 2 Illustration',
    price: '$250',
    highlight: true,
    badge: 'Most Popular',
    descItems: [
      'Medium detail line art',
      'Includes minimal shading and highlights',
      'Slightly more dimensional appearance',
    ],
  },
  {
    id: 'level-3',
    icon: '🖼️',
    name: 'Level 3 Illustration',
    price: '$319',
    badge: 'Premium Detail',
    descItems: [
      'High-detail line work',
      'Advanced shading, highlighting, and blending',
      'Full three-dimensional look',
      'Can be rendered digitally or with watercolor / colored pencil effects',
    ],
  },
]

/* ── Revision Correction Fees ────────────────────────────── */
const CORRECTION_FEES = [
  { label: 'Enhancement Correction', price: '$20' },
  { label: 'Level 1 Correction', price: '$40' },
  { label: 'Level 2 Correction', price: '$60' },
  { label: 'Level 3 Correction', price: '$120' },
]

/* ── Benefits ────────────────────────────────────────────── */
const BENEFITS = [
  {
    icon: '🎨',
    title: 'Diverse Illustration Styles',
    desc: 'Our illustrators work across traditional and digital mediums to match your story\'s tone and audience.',
  },
  {
    icon: '📊',
    title: 'Flexible Pricing Levels',
    desc: 'Choose the detail level that fits your budget — from clean line art to fully rendered artwork.',
  },
  {
    icon: '📋',
    title: 'Structured Process',
    desc: 'Clear expectations, defined revision rounds, and transparent pricing at every stage.',
  },
  {
    icon: '📖',
    title: 'Story-First Approach',
    desc: 'Every illustration is designed to enhance your storytelling and deepen reader engagement.',
  },
]

interface Props {
  service: Service
}

export default function BookIllustrationContent({ service }: Props) {
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
            <p className={styles.heroSub}>{service.description}</p>
          </div>
        </Container>
      </header>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className={styles.intro}>
        <Container>
          <p className={styles.introBody}>{service.longDescription}</p>
        </Container>
      </section>

      {/* ── Layout Information ───────────────────────────── */}
      <section className={styles.noteSection}>
        <Container>
          <div className={styles.noteBox}>
            <span className={styles.noteIcon} aria-hidden="true">📐</span>
            <div>
              <h2 className={styles.noteTitle}>Layout Information</h2>
              <ul className={styles.noteList}>
                <li className={styles.noteListItem}>
                  <BulletIcon />
                  <span>
                    <strong>Double Page Spread</strong> illustrations (crossing two pages)
                    count as <strong>two illustrations</strong>.
                  </span>
                </li>
                <li className={styles.noteListItem}>
                  <BulletIcon />
                  <span>
                    Authors must properly indicate which illustrations require this layout
                    before production begins.
                  </span>
                </li>
                <li className={styles.noteListItem}>
                  <BulletIcon />
                  <span>
                    Total illustration count depends on the selected publishing package.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Illustration Tiers ───────────────────────────── */}
      <section className={styles.tiersSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Illustration Types &amp; Pricing</h2>
          <p className={styles.sectionSubhead}>
            Each level reflects the complexity of detail, shading, and rendering involved.
          </p>
          <div className={styles.tiersGrid}>
            {TIERS.map((tier) => (
              <article
                key={tier.id}
                className={[
                  styles.tierCard,
                  tier.highlight ? styles['tierCard--highlight'] : '',
                ].filter(Boolean).join(' ')}
              >
                {tier.badge && (
                  <div className={styles.cardRibbon}>{tier.badge}</div>
                )}

                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">{tier.icon}</span>
                  <h3 className={styles.cardName}>{tier.name}</h3>
                  <div className={styles.cardPrice}>{tier.price}</div>
                  <p className={styles.cardPriceNote}>per illustration</p>
                </header>

                <ul className={styles.descList}>
                  {tier.descItems.map((item, i) => (
                    <li key={i} className={styles.descItem}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <footer className={styles.cardFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent(tier.name)}`}
                    variant={tier.highlight ? 'primary' : 'outline'}
                    fullWidth
                    size="sm"
                  >
                    Inquire About This Level
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Turnaround Time ──────────────────────────────── */}
      <section className={styles.turnaroundSection}>
        <Container>
          <div className={styles.turnaroundBox}>
            <span className={styles.turnaroundIcon} aria-hidden="true">⏱</span>
            <div>
              <h2 className={styles.turnaroundTitle}>Turnaround Time</h2>
              <p className={styles.turnaroundBody}>
                The timeline varies depending on illustration complexity, number of illustrations,
                and revision cycles. Projects may take <strong>up to 4 months or longer</strong> to
                complete. Your project manager will provide a more precise estimate after reviewing
                your manuscript and illustration requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Revision Policy ──────────────────────────────── */}
      <section className={styles.revisionSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Revisions</h2>
          <div className={styles.revisionInner}>

            <div className={styles.revisionPolicies}>
              <ul className={styles.policyList}>
                <li className={styles.policyItem}>
                  <CheckIcon />
                  <span>Authors may submit reference images or sketches to guide the illustrator.</span>
                </li>
                <li className={styles.policyItem}>
                  <CheckIcon />
                  <span>Initial instructions are treated as <strong>final direction</strong> — please be thorough and precise.</span>
                </li>
                <li className={styles.policyItem}>
                  <CheckIcon />
                  <span>Each illustration includes <strong>two (2) free revision rounds</strong>.</span>
                </li>
                <li className={styles.policyItem}>
                  <CheckIcon />
                  <span>Additional revisions beyond the included rounds incur correction fees.</span>
                </li>
              </ul>

              <div className={styles.correctionNote}>
                <p className={styles.correctionNoteText}>
                  If major changes require restarting the illustration from scratch, additional
                  fees beyond the standard correction rates may apply.
                </p>
              </div>
            </div>

            <div className={styles.correctionTable}>
              <p className={styles.correctionTableHeading}>Additional Revision Fees</p>
              <div className={styles.correctionRows}>
                {CORRECTION_FEES.map((fee, i) => (
                  <div key={i} className={styles.correctionRow}>
                    <span className={styles.correctionLabel}>{fee.label}</span>
                    <span className={styles.correctionPrice}>{fee.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Choose Our Illustration Services?</h2>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((b, bi) => (
              <div key={bi} className={styles.benefitCard}>
                <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                <div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
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
              Bring Your Story to Life Visually
            </h2>
            <p className={styles.finalCtaBody}>
              Our team will help you choose the right illustration style and level based on
              your book, audience, and creative vision.
            </p>
            <Button
              href="/contact?package=Book+Illustration+Services"
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
