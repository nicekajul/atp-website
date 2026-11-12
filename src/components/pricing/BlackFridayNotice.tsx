'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import BlackFridayTerms from '@/components/shared/BlackFridayTerms'
import { BLACK_FRIDAY, BLACK_FRIDAY_CONTACT_HREF, blackFridayDeadlineText } from '@/data/promos'
import { useBlackFridayActive } from '@/lib/useBlackFridayActive'
import styles from './BlackFridayNotice.module.css'

/** Black Friday banner above the Publishing Packages pricing table */
export default function BlackFridayNotice() {
  const active = useBlackFridayActive()
  if (!active) return null

  return (
    <aside className={styles.notice} aria-label="Black Friday offer">
      <div className={styles.text}>
        <span className={styles.eyebrow}>Black Friday Exclusive · {blackFridayDeadlineText()}</span>
        <p className={styles.heading}>
          Buy 1 Publishing Package, Get 1 <span className={styles.free}>Free</span>
        </p>
        <p className={styles.body}>
          Choose {BLACK_FRIDAY.eligiblePackages.slice(0, -1).join(', ')}, or{' '}
          {BLACK_FRIDAY.eligiblePackages[BLACK_FRIDAY.eligiblePackages.length - 1]} and receive a second
          package of the exact same tier, absolutely free. Look for the{' '}
          <strong>Buy 1, Get 1 Free</strong> tag below.
        </p>
        <p className={styles.terms}>{BLACK_FRIDAY.terms}</p>
        <BlackFridayTerms />
      </div>
      <Button href={BLACK_FRIDAY_CONTACT_HREF} variant="primary" size="md">
        Claim the Offer &rarr;
      </Button>
    </aside>
  )
}
