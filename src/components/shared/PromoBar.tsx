'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import {
  BLACK_FRIDAY_HREF,
  VETERANS_DAY_PROMO_END,
  blackFridayDeadlineText,
  isBlackFridayActive,
  isPromoActive,
} from '@/data/promos'
import styles from './PromoBar.module.css'

// One bar at a time: Black Friday (Nov 12 to 27) takes priority over the
// Veterans Day greeting, which returns Nov 28 to 30. Each has its own dismiss key.
type Campaign = 'black-friday' | 'veterans-day'

const STORAGE_KEYS: Record<Campaign, string> = {
  'black-friday': 'atp_promobar_blackfriday_dismissed',
  'veterans-day': 'atp_promobar_veterans_dismissed',
}

function getCampaign(): Campaign | null {
  if (isBlackFridayActive()) return 'black-friday'
  if (isPromoActive(VETERANS_DAY_PROMO_END)) return 'veterans-day'
  return null
}

export default function PromoBar() {
  const [campaign, setCampaign] = useState<Campaign | null>(null)
  const [deadline, setDeadline] = useState('')

  useEffect(() => {
    const current = getCampaign()
    if (!current) return
    try {
      if (sessionStorage.getItem(STORAGE_KEYS[current])) return
    } catch {
      // Storage blocked: show the bar anyway
    }
    setCampaign(current)
    setDeadline(blackFridayDeadlineText())
    document.documentElement.style.setProperty('--promo-height', '48px')
  }, [])

  const dismiss = () => {
    if (!campaign) return
    try {
      sessionStorage.setItem(STORAGE_KEYS[campaign], '1')
    } catch {
      // Storage blocked: the bar simply returns on the next page load
    }
    setCampaign(null)
    document.documentElement.style.setProperty('--promo-height', '0px')
  }

  if (!campaign) return null

  return (
    <div className={styles.bar} role="region" aria-label="Announcement">
      <div className={styles.inner}>
        {campaign === 'black-friday' ? (
          <>
            <span className={styles.tag}>Black Friday</span>
            <p className={styles.message}>
              <strong>
                <span className={styles.full}>Buy 1 Publishing Package, Get 1 Free.</span>
                <span className={styles.tablet}>Buy 1, Get 1 Free</span>
                <span className={styles.mobile}>Black Friday: Buy 1, Get 1 Free</span>
              </strong>
              <span className={styles.full}> Execution tier and up.</span>
              <span className={styles.deadline}>&nbsp;| {deadline}</span>
            </p>
            <Button href={BLACK_FRIDAY_HREF} variant="primary" size="sm">
              See Packages &rarr;
            </Button>
          </>
        ) : (
          <>
            <span className={styles.emoji} aria-hidden="true">★</span>
            <p className={styles.message}>
              <strong>Happy Veterans Day.</strong>
              <span className={styles.full}>
                {' '}This November, we honor the courage, sacrifice, and service of all who served.
              </span>
              <span className={styles.short}> Thank you to all who served.</span>
              <span className={styles.deadline}>&nbsp;| Thank you, veterans.</span>
            </p>
            <span className={styles.emoji} aria-hidden="true">★</span>
          </>
        )}
        <button
          className={styles.dismiss}
          onClick={dismiss}
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  )
}
