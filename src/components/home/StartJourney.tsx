import React from 'react'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import RevealItem from '@/components/ui/RevealItem'
import styles from './StartJourney.module.css'

const steps = [
  {
    num: '1',
    icon: '📝',
    title: 'Submit Manuscript',
    desc: 'Share your work and tell us your vision.',
  },
  {
    num: '2',
    icon: '🤝',
    title: 'Expert Consultation',
    desc: 'Speak with an editor for a custom plan.',
  },
  {
    num: '3',
    icon: '📦',
    title: 'Choose Package',
    desc: 'Select the right publishing bundle.',
  },
  {
    num: '4',
    icon: '🚀',
    title: 'Publish & Market',
    desc: 'Launch your book to the world.',
  },
]

export default function StartJourney() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Getting Started"
          heading="Start Your Publishing Journey"
          subheading="It only takes four simple steps to go from a draft on your computer to a published book in readers' hands."
          align="center"
        />

        <div className={styles.cards}>
          {steps.map((step, i) => (
            <RevealItem key={step.num} delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon} aria-hidden="true">{step.icon}</span>
                </div>
                <h3 className={styles.title}>
                  <span className={styles.num}>{step.num}.</span> {step.title}
                </h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </RevealItem>
          ))}
        </div>
        
        <div className={styles.actions}>
          <Button href="/contact" variant="primary" size="lg">
            Book Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  )
}
