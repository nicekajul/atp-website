import React from 'react'
import Container from '@/components/layout/Container'
import styles from './PaymentNote.module.css'

export const PAYMENT_NOTE =
  'Please note that listed prices do not include the applicable 3% credit card processing surcharge. This fee applies only to eligible credit card transactions and can be avoided by paying through alternative methods such as Zelle, check, money order, or wire transfer.'

/**
 * Credit card surcharge note shown on every service page.
 * `inline` renders just the note (for use inside an existing pricing section).
 */
export default function PaymentNote({ inline = false }: { inline?: boolean }) {
  const note = (
    <aside className={styles.note} aria-label="Payment note">
      <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <p className={styles.text}>{PAYMENT_NOTE}</p>
    </aside>
  )

  if (inline) return <div className={styles.inline}>{note}</div>

  return (
    <section className={styles.section}>
      <Container>{note}</Container>
    </section>
  )
}
