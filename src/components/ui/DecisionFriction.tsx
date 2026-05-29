import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import styles from './DecisionFriction.module.css'

interface DecisionFrictionProps {
  customHeadline?: string
}

export default function DecisionFriction({ customHeadline }: DecisionFrictionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.messaging}>
             <h2 className={styles.title}>{customHeadline || "Find the perfect publishing package in 30 seconds"}</h2>
             <p className={styles.subtitle}>
               Skip the confusion — we’ll guide you to the right package based on your book, goals, and budget.
             </p>
          </div>

          <div className={styles.valueProps}>
             <span className={styles.bullet}>✓ Takes only 30 seconds</span>
             <span className={styles.bullet}>✓ Personalized results</span>
             <span className={styles.bullet}>✓ No commitment required</span>
          </div>

          <div className={styles.actions}>
            <div className={styles.btnWrapper}>
              <Button href="/quiz" variant="primary" size="lg" className={styles.quizBtn}>
                Start My Publishing Quiz
              </Button>
              <div className={styles.resultPreview}>
                Example: Recommended — <strong>Professional Package</strong>
              </div>
            </div>
            
            <div className={styles.secondaryAction}>
               <span className={styles.or}>or</span>
               <Button href="/contact" variant="outline" size="lg">
                 Get Free Consultation
               </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
