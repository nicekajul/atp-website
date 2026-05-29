import React from 'react'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import RevealItem from '@/components/ui/RevealItem'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    icon: '📝',
    title: 'Consult & Strategy',
    desc: 'We start by understanding your goals, audience, and manuscript to recommend the right publishing path.',
    timeline: '1 Week',
  },
  {
    num: '02',
    icon: '✂️',
    title: 'Edit & Refine',
    desc: 'Our editorial team works closely with you to elevate your narrative and polish your prose.',
    timeline: '2-4 Weeks',
  },
  {
    num: '03',
    icon: '🎨',
    title: 'Design & Package',
    desc: 'Award-winning designers craft a custom cover and professional interior layout that stands out.',
    timeline: '2-4 Weeks',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Publish & Market',
    desc: 'Your book goes live globally, supported by a targeted marketing campaign to build your audience.',
    timeline: 'Ongoing',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="The Process"
          heading="Your Path to Publication"
          subheading="A transparent, guided approach that treats your manuscript with the respect it deserves."
          align="center"
        />

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <RevealItem key={step.num} delay={index * 120}>
              <div className={styles.step}>
                <div className={styles.iconAndNum}>
                  <span className={styles.number}>{step.num}</span>
                  <span className={styles.icon} aria-hidden="true">{step.icon}</span>
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
                <div className={styles.timeline}>
                  <span className={styles.timelineIcon}>⏱</span> {step.timeline}
                </div>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
              </div>
            </RevealItem>
          ))}
        </div>

        <div className={styles.actions}>
          <Button href="/contact" variant="primary" size="lg">
            Start Your Publishing Journey
          </Button>
        </div>
      </Container>
    </section>
  )
}
