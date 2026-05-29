import React from 'react'
import { Service } from '@/data/services'
import Container from '@/components/layout/Container'
import PricingTable from '@/components/pricing/PricingTable'
import CustomServiceContent from '@/components/services/CustomServiceContent'
import InlineLeadForm from '@/components/forms/InlineLeadForm'
import DecisionFriction from '@/components/ui/DecisionFriction'
import ServiceProof from '@/components/services/ServiceProof'
import Badge from '@/components/ui/Badge'
import styles from './ServiceDetail.module.css'

interface ServiceDetailProps {
  service: Service
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const t = service.title.toLowerCase()
  const decisionHeadline =
    t.includes('design')    ? 'Find the right design package in 30 seconds'       :
    t.includes('marketing') ? 'Find the right marketing plan in 30 seconds'       :
    t.includes('publishing')? 'Find the perfect publishing package in 30 seconds' :
    t.includes('edit')      ? 'Find the right editing package in 30 seconds'      :
    t.includes('billboard') ? 'Choose your Times Square campaign in 30 seconds'   :
    undefined

  return (
    <article className={styles.serviceDetail}>
      <header className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <div className={styles.badgeWrapper}>
              <Badge variant="navy">{service.category}</Badge>
            </div>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
          </div>
        </Container>
      </header>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.mainContent}>
            <div className={styles.description}>
              <p className={styles.longDesc}>{service.longDescription}</p>
              
              <div className={styles.metaInfo}>
                {service.turnaround && (
                  <div className={styles.metaItem}>
                    <strong>Turnaround:</strong> {service.turnaround}
                  </div>
                )}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className={styles.metaItem}>
                    <strong>Deliverables:</strong>
                    <ul>
                      {service.deliverables.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {service.packages && service.packages.length > 1 ? (
        <section className={styles.pricingSection}>
          <Container>
            <DecisionFriction customHeadline={decisionHeadline} />
            <h2 className={styles.sectionHeading}>Pricing & Packages</h2>
            <PricingTable packages={service.packages} />

            <div className={styles.leadFormWrapper}>
              <InlineLeadForm submitLabel="Get My Package Quote" />
            </div>
          </Container>
        </section>
      ) : (
        <section className={styles.customSection}>
          <Container>
            <CustomServiceContent service={service} />
          </Container>
        </section>
      )}

      <ServiceProof serviceType={service.title} />

      {service.faqs && service.faqs.length > 0 && (
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
