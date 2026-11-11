'use client'

import React, { useState, useEffect } from 'react'
import { VETERANS_DAY_PROMO_END, isPromoActive } from '@/data/promos'
import styles from './PromoBar.module.css'

// Veterans Day 2026 greeting. For the next seasonal promo, swap the message, key and end date.
const STORAGE_KEY = 'atp_promobar_veterans_dismissed'

export default function PromoBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isPromoActive(VETERANS_DAY_PROMO_END)) return
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {
      // Storage blocked: show the bar anyway
    }
    setVisible(true)
    document.documentElement.style.setProperty('--promo-height', '48px')
  }, [])

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Storage blocked: the bar simply returns on the next page load
    }
    setVisible(false)
    document.documentElement.style.setProperty('--promo-height', '0px')
  }

  if (!visible) return null

  return (
    <div className={styles.bar} role="region" aria-label="Announcement">
      <div className={styles.inner}>
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
