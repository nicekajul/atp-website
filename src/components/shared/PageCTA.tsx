import React from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import styles from './PageCTA.module.css'

interface PageCTAProps {
  variant: 'publish' | 'reader' | 'discover'
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

const VARIANTS = {
  publish: {
    eyebrow: 'Start Your Journey',
    heading: 'Ready to bring your manuscript',
    headingHighlight: 'to life?',
    body: 'Join hundreds of authors who have built their legacy with Author\'s Tranquility Press. from first draft to Amazon launch, we handle every step.',
    features: [
      'Professional editing & proofreading',
      'Custom cover design that sells',
      'Amazon & global distribution setup',
      'Marketing strategy & launch support',
    ],
    primaryLabel: 'Start Publishing',
    primaryHref: '/contact',
    secondaryLabel: 'See Pricing',
    secondaryHref: '/services/publishing-packages',
    supportText: 'Free consultation · No obligation · Response within 24 hours',
    stats: null,
    cards: null,
  },
  reader: {
    eyebrow: 'Published by Author\'s Tranquility Press',
    heading: 'Your story deserves',
    headingHighlight: 'to be read.',
    body: 'Every book in our store was written by an independent author we helped bring to life, from first draft to finished cover to Amazon listing.',
    features: [
      'Professional editing & proofreading',
      'Custom cover design that sells',
      'Amazon & global distribution setup',
      'Marketing strategy & launch support',
    ],
    primaryLabel: 'Start Your Publishing Journey',
    primaryHref: '/contact',
    secondaryLabel: 'Browse Bookstore',
    secondaryHref: '/bookstore',
    supportText: null,
    stats: [
      { value: '500+', label: 'Books published' },
      { value: '4.9★', label: 'Author satisfaction' },
      { value: '60+',  label: 'Days avg. to launch' },
    ],
    cards: null,
  },
  discover: {
    eyebrow: 'Author\'s Tranquility Press',
    heading: 'See what\'s possible',
    headingHighlight: 'with ATP.',
    body: 'From first draft to bestseller, we guide independent authors through every stage of the publishing journey.',
    features: null,
    primaryLabel: 'Explore Our Services',
    primaryHref: '/services',
    secondaryLabel: 'Browse the Bookstore',
    secondaryHref: '/bookstore',
    supportText: null,
    stats: null,
    cards: [
      {
        icon: '✍️',
        title: 'Publishing Services',
        desc: 'Editing, design, formatting, and distribution under one roof.',
        href: '/services',
      },
      {
        icon: '📚',
        title: 'Author Bookstore',
        desc: 'Browse titles from authors we\'ve helped publish.',
        href: '/bookstore',
      },
      {
        icon: '💬',
        title: 'Free Consultation',
        desc: 'Talk to our team about your manuscript and goals.',
        href: '/contact',
      },
    ],
  },
} as const

export default function PageCTA({
  variant,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  const v = VARIANTS[variant]

  const finalPrimary      = { label: primaryLabel   ?? v.primaryLabel,   href: primaryHref   ?? v.primaryHref }
  const finalSecondary    = { label: secondaryLabel  ?? v.secondaryLabel, href: secondaryHref ?? v.secondaryHref }

  const isReader   = variant === 'reader'
  const isDiscover = variant === 'discover'

  return (
    <section className={styles.section}>
      <div className={styles.heroBg} />
      <div className={styles.patternLayer} />

      <Container>
        {/* ── Reader: split layout ── */}
        {isReader && (
          <div className={styles.split}>
            <div className={styles.splitContent}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                {v.eyebrow}
              </p>
              <h2 className={styles.heading}>
                {v.heading}<br />
                <em className={styles.highlight}>{v.headingHighlight}</em>
              </h2>
              <p className={styles.body}>{v.body}</p>

              {v.features && (
                <ul className={styles.features}>
                  {v.features.map(f => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.featureDot}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.actions}>
                <Button href={finalPrimary.href} variant="primary" size="lg">
                  {finalPrimary.label}
                </Button>
                <Button href={finalSecondary.href} variant="outline" size="lg" className={styles.outlineBtn}>
                  {finalSecondary.label}
                </Button>
              </div>
            </div>

            {v.stats && (
              <div className={styles.panel}>
                <div className={styles.panelInner}>
                  <p className={styles.panelLabel}>Authors published with ATP</p>
                  <div className={styles.stats}>
                    {v.stats.map(s => (
                      <div key={s.label} className={styles.stat}>
                        <span className={styles.statValue}>{s.value}</span>
                        <span className={styles.statLabel}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <blockquote className={styles.quote}>
                    <p>&ldquo;ATP turned my manuscript into a book I&rsquo;m proud to show the world.&rdquo;</p>
                    <footer>— Sandra Leigh, <em>Publish With Purpose</em></footer>
                  </blockquote>
                  <span className={styles.panelOrn}>✦</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Publish / Discover: centered layout ── */}
        {!isReader && (
          <div className={styles.centered}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {v.eyebrow}
              <span className={styles.eyebrowLine} />
            </p>
            <h2 className={styles.heading}>
              {v.heading}<br />
              <em className={styles.highlight}>{v.headingHighlight}</em>
            </h2>
            <p className={styles.body}>{v.body}</p>

            {/* Publish: feature pills */}
            {v.features && (
              <ul className={styles.featurePills}>
                {v.features.map(f => (
                  <li key={f} className={styles.featurePill}>
                    <span className={styles.featureDot}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {/* Discover: cards */}
            {isDiscover && v.cards && (
              <div className={styles.cards}>
                {v.cards.map(c => (
                  <a key={c.title} href={c.href} className={styles.card}>
                    <span className={styles.cardIcon}>{c.icon}</span>
                    <strong className={styles.cardTitle}>{c.title}</strong>
                    <p className={styles.cardDesc}>{c.desc}</p>
                  </a>
                ))}
              </div>
            )}

            <div className={styles.actions}>
              <Button href={finalPrimary.href} variant="primary" size="lg">
                {finalPrimary.label}
              </Button>
              <Button href={finalSecondary.href} variant="outline" size="lg" className={styles.outlineBtn}>
                {finalSecondary.label}
              </Button>
            </div>

            {'supportText' in v && v.supportText && (
              <p className={styles.supportText}>{v.supportText}</p>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
