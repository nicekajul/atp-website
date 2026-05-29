import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './SocialMediaAdsContent.module.css'

/* ── Focus areas ───────────────────────────────────────── */
interface FocusItem {
  icon: string
  title: string
  desc: string
}

const FOCUS_ITEMS: FocusItem[] = [
  {
    icon: '🎯',
    title: 'Targeted Visibility',
    desc: 'Reach readers based on genre, interests, and behavior.',
  },
  {
    icon: '💬',
    title: 'Reader Engagement',
    desc: 'Encourage clicks, reactions, and interest in your book.',
  },
  {
    icon: '🔗',
    title: 'Traffic Support',
    desc: 'Direct potential readers to your book listing or landing page.',
  },
  {
    icon: '⚡',
    title: 'Campaign Efficiency',
    desc: 'Focus on placements and formats that align with your goals.',
  },
]

/* ── Comparison table rows ─────────────────────────────── */
interface CompareRow {
  feature: string
  basic: string
  expert: string
  expertHighlight?: boolean
}

const COMPARE_ROWS: CompareRow[] = [
  { feature: 'Campaign Duration',  basic: '30 Days',              expert: '90 Days',                    expertHighlight: true },
  { feature: 'Ad Formats',         basic: 'Image',                expert: 'Image / Video / Mobile',     expertHighlight: true },
  { feature: 'Audience Targeting', basic: 'Standard',             expert: 'Advanced',                   expertHighlight: true },
  { feature: 'Ad Placements',      basic: 'Facebook & Instagram', expert: 'FB, Instagram + Extended',   expertHighlight: true },
  { feature: 'Monitoring',         basic: 'Basic',                expert: 'Ongoing Optimization',       expertHighlight: true },
  { feature: 'Performance Summary',basic: '—',                    expert: 'Included',                   expertHighlight: true },
]

/* ── Page component ────────────────────────────────────── */
interface Props {
  service: Service
}

export default function SocialMediaAdsContent({ service }: Props) {
  const [basic, expert] = service.packages

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

      {/* ── What We Focus On ─────────────────────────────── */}
      <section className={styles.focusSection}>
        <Container>
          <h2 className={styles.sectionHeading}>What Our Advertising Focuses On</h2>
          <div className={styles.focusGrid}>
            {FOCUS_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.focusCard}>
                <span className={styles.focusIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className={styles.focusTitle}>{item.title}</h3>
                  <p className={styles.focusDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Pricing Cards ────────────────────────────────── */}
      <section className={styles.pricingSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right social media plan in 30 seconds" />
          <h2 className={styles.sectionHeading}>Packages</h2>
          <div className={styles.pricingGrid}>

            {/* Basic */}
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                {basic.bestFor && (
                  <span className={styles.cardBestFor}>Best for: {basic.bestFor}</span>
                )}
                <h3 className={styles.cardName}>{basic.name}</h3>
                <div className={styles.cardPrice}>{basic.price}</div>
                <p className={styles.cardDesc}>{basic.description}</p>
              </header>
              <ul className={styles.featuresList}>
                {basic.features.map((f, i) => (
                  <li key={i} className={styles.featuresItem}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <footer className={styles.cardFooter}>
                <Button
                  href={`/contact?package=${encodeURIComponent(basic.name)}`}
                  variant="outline"
                  fullWidth
                >
                  Start My Campaign
                </Button>
              </footer>
            </article>

            {/* Expert */}
            <article className={[styles.card, styles['card--highlight']].join(' ')}>
              <div className={styles.popularRibbon}>★ Most Popular</div>
              <header className={styles.cardHeader}>
                {expert.bestFor && (
                  <span className={styles.cardBestFor}>Best for: {expert.bestFor}</span>
                )}
                <h3 className={styles.cardName}>{expert.name}</h3>
                <div className={styles.cardPrice}>{expert.price}</div>
                <p className={styles.cardDesc}>{expert.description}</p>
              </header>
              <ul className={styles.featuresList}>
                {expert.features.map((f, i) => (
                  <li key={i} className={styles.featuresItem}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <footer className={styles.cardFooter}>
                <Button
                  href={`/contact?package=${encodeURIComponent(expert.name)}`}
                  variant="primary"
                  fullWidth
                >
                  Start My Campaign
                </Button>
              </footer>
            </article>

          </div>
        </Container>
      </section>

      {/* ── Comparison Table ─────────────────────────────── */}
      <section className={styles.compareSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Package Comparison</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.featureTh}>Feature</th>
                  <th className={styles.packageTh}>Basic</th>
                  <th className={[styles.packageTh, styles['packageTh--highlight']].join(' ')}>
                    <span className={styles.thHighlightLabel}>★ Most Popular</span>
                    Expert
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, idx) => (
                  <tr key={idx} className={styles.compareRow}>
                    <td className={styles.featureName}>{row.feature}</td>
                    <td className={[styles.cell, row.basic === '—' ? styles['cell--dash'] : ''].join(' ')}>
                      {row.basic}
                    </td>
                    <td className={[styles.cell, styles['cell--highlight']].join(' ')}>
                      {row.expert}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <Button href="/contact?package=Social+Media+Advertising" variant="primary" size="lg">
              Start My Campaign
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
