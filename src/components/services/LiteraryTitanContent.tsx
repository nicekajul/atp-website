import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './LiteraryTitanContent.module.css'

/* ── Service Inclusions ────────────────────────────────── */
const INCLUSIONS = [
  {
    icon: '🏆',
    title: 'Literary Titan Book Award Submission',
    points: [
      'Submission of one eligible book for consideration for the Literary Titan Book Award.',
      "Applicable to eligible fiction and nonfiction titles, subject to Literary Titan's requirements.",
      'Award selection is determined by Literary Titan and is not guaranteed.',
    ],
  },
  {
    icon: '⭐',
    title: 'Literary Titan Book Review',
    points: [
      'Coordination of a Literary Titan book review.',
      "Estimated review timeframe of approximately 45 days after submission, subject to Literary Titan's editorial schedule and review queue.",
      'Review exposure may extend to applicable book discovery and retail platforms, subject to availability and third-party policies.',
    ],
  },
  {
    icon: '🎙️',
    title: 'Author Interview Opportunity',
    points: [
      "Opportunity for the author to participate in a Literary Titan author interview, subject to Literary Titan's editorial and scheduling process.",
    ],
  },
  {
    icon: '📱',
    title: 'Social Media Promotion',
    points: [
      "Promotional exposure for the author's book through applicable Literary Titan social media channels, where available.",
    ],
  },
  {
    icon: '📸',
    title: 'Book Cover Feature',
    points: [
      "Opportunity for the author's book cover to be featured through Literary Titan's Instagram presence, subject to editorial and scheduling availability.",
    ],
  },
  {
    icon: '🔗',
    title: 'Book Purchase Link',
    points: [
      "Inclusion of an appropriate link or reference where readers can find and purchase the author's book, when supported by the applicable placement.",
    ],
  },
  {
    icon: '📚',
    title: 'Reader & Library Discovery',
    points: [
      'Additional exposure opportunities through applicable Literary Titan reader or library discovery channels associated with the service.',
    ],
  },
]

/* ── Estimated Processing Time ─────────────────────────── */
const TIMELINE = [
  {
    label: 'Submission',
    value: '5–7 Business Days',
    body: "ATP will prepare and submit the author's book within approximately 5–7 business days after payment and all required materials have been received.",
  },
  {
    label: 'Review',
    value: 'Approximately 45 Days',
    body: "The Literary Titan review is generally expected to be completed or published within approximately 45 days after submission. This is an estimated third-party timeframe and may vary depending on Literary Titan's review queue, editorial process, and publication schedule.",
  },
]

interface Props {
  service: Service
}

export default function LiteraryTitanContent({ service }: Props) {
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
          <h2 className={styles.sectionHeading}>Award Submission Package</h2>
          <div className={[styles.cardsGrid, styles['cardsGrid--single']].join(' ')}>
            <article className={[styles.card, styles['card--highlight']].join(' ')}>

              {/* Card header */}
              <header className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">🏆</span>
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

              {/* Processing facts */}
              <dl className={styles.campaignFacts}>
                {TIMELINE.map((step) => (
                  <div key={step.label} className={styles.campaignFact}>
                    <dt className={styles.campaignFactLabel}>{step.label}</dt>
                    <dd className={styles.campaignFactValue}>{step.value}</dd>
                  </div>
                ))}
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

      {/* ── Service Includes ─────────────────────────────── */}
      <section className={styles.detailsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Service Includes</h2>
          <ul className={styles.detailsGrid}>
            {INCLUSIONS.map((item, idx) => (
              <li
                key={item.title}
                className={[styles.detailItem, idx === 0 ? styles['detailItem--lead'] : ''].join(' ')}
              >
                <div className={styles.detailHeader}>
                  <span className={styles.detailIcon} aria-hidden="true">{item.icon}</span>
                  <h3 className={styles.detailTitle}>{item.title}</h3>
                </div>
                <ul className={styles.detailPoints}>
                  {item.points.map((point, pi) => (
                    <li key={pi}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Estimated Processing Time ────────────────────── */}
      <section className={styles.timelineSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Estimated Processing Time</h2>
          <ol className={styles.timeline}>
            {TIMELINE.map((step) => (
              <li key={step.label} className={styles.timelineStep}>
                <span className={styles.timelineStepLabel}>{step.label}</span>
                <p className={styles.timelineStepValue}>{step.value}</p>
                <p className={styles.timelineStepBody}>{step.body}</p>
              </li>
            ))}
          </ol>

          <div className={styles.noteBox}>
            <p className={styles.bestFor}>
              <strong>Important Note:</strong> Submission does not guarantee that a book will receive the Literary Titan Book Award, a favorable review, an author interview, social media feature, or placement on any specific third-party platform. Award selections, editorial decisions, publication schedules, and third-party platform availability are determined by Literary Titan and/or the applicable platforms.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              🏆 Submitted within <strong>5–7 business days</strong>, with the review expected in about <strong>45 days</strong>.
            </p>
            <Button href="/contact?package=Literary+Titan+Book+Award+Submission" variant="primary" size="lg">
              Submit My Book
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
