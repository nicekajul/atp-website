import React from 'react'
import Container from '@/components/layout/Container'
import styles from './TrustBar.module.css'

export default function TrustBar() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <p className={styles.label}>Our authors have been featured in or recognized by</p>
        <div className={styles.logos}>
          {/* Placeholder for trusted logos (e.g., WSJ, NYT, Amazon Bestseller badges, etc.) */}
          <div className={styles.logoSlot}>The New York Times</div>
          <div className={styles.logoSlot}>Wall Street Journal</div>
          <div className={styles.logoSlot}>USA Today</div>
          <div className={styles.logoSlot}>Amazon #1 Bestseller</div>
          <div className={styles.logoSlot}>Publishers Weekly</div>
        </div>
      </Container>
    </div>
  )
}
