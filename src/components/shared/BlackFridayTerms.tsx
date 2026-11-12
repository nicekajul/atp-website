import React from 'react'
import { BLACK_FRIDAY } from '@/data/promos'
import styles from './BlackFridayTerms.module.css'

/** Expandable full offer terms, for dark Black Friday panels */
export default function BlackFridayTerms({ className = '' }: { className?: string }) {
  return (
    <details className={`${styles.terms} ${className}`}>
      <summary className={styles.summary}>View full offer terms</summary>
      <ul className={styles.list}>
        {BLACK_FRIDAY.termsDetails.map((item) => (
          <li key={item.title} className={styles.item}>
            <strong className={styles.title}>{item.title}:</strong> {item.text}
          </li>
        ))}
      </ul>
    </details>
  )
}
