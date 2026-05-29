'use client'

import React from 'react'
import { Service } from '@/data/services'
import InlineLeadForm from '@/components/forms/InlineLeadForm'
import styles from './CustomServiceContent.module.css'

interface CustomServiceContentProps {
  service: Service
}

const STEPS = [
  { num: '1', title: 'Consultation', desc: 'Initial meeting to understand your vision, goals, and project requirements.' },
  { num: '2', title: 'Assessment',   desc: 'Detailed review and scoping of your specific project needs.' },
  { num: '3', title: 'Proposal',     desc: 'Personalised quote, plan, and timeline tailored to your project.' },
  { num: '4', title: 'Execution',    desc: 'Our team delivers your project with quality checks at every stage.' },
]

export default function CustomServiceContent({ service }: CustomServiceContentProps) {
  const pkg = service.packages[0] ?? null

  return (
    <div className={styles.wrapper}>

      {/* ── Pricing Highlight ─────────────────────────── */}
      <section className={styles.pricingHighlight}>
        <div className={styles.pricingCard}>
          {pkg ? (
            <>
              <span className={styles.priceLabel}>
                {pkg.priceNote ?? 'Starting at'}
              </span>
              <div className={styles.priceValue}>{pkg.price}</div>
              <p className={styles.priceDesc}>{pkg.description}</p>
              {pkg.features.length > 0 && (
                <ul className={styles.featuresList}>
                  {pkg.features.map((f, i) => (
                    <li key={i} className={styles.featuresItem}>
                      <span className={styles.featuresCheck}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              <span className={styles.priceLabel}>Custom Pricing</span>
              <div className={styles.priceValue}>Get a Quote</div>
              <p className={styles.priceDesc}>{service.description}</p>
            </>
          )}
        </div>
      </section>

      {/* ── What's Included ───────────────────────────── */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className={styles.includedSection}>
          <h3 className={styles.subHeading}>What's Included</h3>
          <div className={styles.includedGrid}>
            {service.deliverables.map((item, i) => (
              <div key={i} className={styles.includedCard}>
                <div className={styles.checkIcon}>✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          {service.turnaround && (
            <p className={styles.turnaround}>
              ⏱ Typical turnaround: <strong>{service.turnaround}</strong>
            </p>
          )}
        </section>
      )}

      {/* ── How It Works ──────────────────────────────── */}
      <section className={styles.howItWorks}>
        <h3 className={styles.subHeading}>How It Works</h3>
        <div className={styles.steps}>
          {STEPS.map(s => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Form (single CTA) ─────────────────── */}
      <section className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={styles.formHeading}>Ready to get started?</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
        <div className={styles.formBody}>
          <InlineLeadForm
            submitLabel={pkg ? `Request ${service.title}` : 'Request a Custom Quote'}
            helperText={`Tell us about your project and what you're looking to achieve with our ${service.title} service.`}
          />
        </div>
      </section>

    </div>
  )
}
