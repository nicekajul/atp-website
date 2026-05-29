import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './AuthorWebsiteContent.module.css'

interface AddOn {
  title: string
  price: string
  description: string
}

const ADD_ONS: AddOn[] = [
  {
    title: 'Website Renewal (1 Year)',
    price: '$99',
    description: 'Domain + Hosting renewal, minor maintenance check',
  },
  {
    title: 'Minor Revision',
    price: '$299',
    description: 'Small updates (text, images, links)',
  },
  {
    title: 'Major Revision',
    price: '$599',
    description: 'Layout redesign or multiple page updates',
  },
]

interface Props {
  service: Service
}

export default function AuthorWebsiteContent({ service }: Props) {
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

      {/* ── Pricing Cards ────────────────────────────────── */}
      <section className={styles.pricingSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right website package in 30 seconds" />
          <h2 className={styles.sectionHeading}>Pricing &amp; Packages</h2>
          <div className={styles.pricingGrid}>
            {service.packages.map((pkg, idx) => (
              <article
                key={idx}
                className={[
                  styles.card,
                  pkg.highlight ? styles['card--highlight'] : '',
                ].join(' ')}
              >
                {pkg.highlight && (
                  <div className={styles.popularRibbon}>★ Most Popular</div>
                )}

                <header className={styles.cardHeader}>
                  {pkg.bestFor && (
                    <span className={styles.cardBestFor}>Best for: {pkg.bestFor}</span>
                  )}
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <div className={styles.cardPrice}>{pkg.price}</div>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </header>

                <ul className={styles.featuresList} aria-label={`${pkg.name} features`}>
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className={styles.featuresItem}>
                      <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.1)"/>
                        <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
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

      {/* ── Add-On Services ──────────────────────────────── */}
      <section className={styles.addOnsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Add-On Services</h2>
          <div className={styles.addOnsGrid}>
            {ADD_ONS.map((addon, idx) => (
              <div key={idx} className={styles.addOnCard}>
                <div className={styles.addOnTop}>
                  <span className={styles.addOnTitle}>{addon.title}</span>
                  <span className={styles.addOnPrice}>{addon.price}</span>
                </div>
                <p className={styles.addOnDesc}>{addon.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Footer Note + CTA ────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <div className={styles.ctaMeta}>
              <p className={styles.ctaNote}>
                Both packages include a <strong>6-month post-launch support period</strong>.
              </p>
              <p className={styles.ctaTurnaround}>
                ⏱ Turnaround time: <strong>4–6 weeks</strong>
              </p>
            </div>
            <Button href="/contact?package=Author+Website" variant="primary" size="lg">
              Get Started Today
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Social Proof ─────────────────────────────────── */}
      <ServiceProof serviceType={service.title} />

      {/* ── FAQs ─────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <Container className={styles.faqContainer}>
            <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
            <div className={styles.faqs}>
              {service.faqs.map((faq, idx) => (
                <details key={idx} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

    </article>
  )
}
