'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import styles from './PromoBar.module.css'

const STORAGE_KEY = 'atp_promobar_dads20_dismissed'

export default function PromoBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
      document.documentElement.style.setProperty('--promo-height', '48px')
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
    document.documentElement.style.setProperty('--promo-height', '0px')
  }

  if (!visible) return null

  return (
    <div className={styles.bar} role="banner">
      <div className={styles.inner}>
        <span className={styles.emoji} aria-hidden="true">👨‍👦</span>
        <p className={styles.message}>
          <strong>Father&rsquo;s Day Special —</strong> 20% off all Publishing Packages.{' '}
          Use code <strong className={styles.code}>DAD20</strong>
          <span className={styles.deadline}>&nbsp;| Ends June 30.</span>
        </p>
        <Button href="/contact?promo=DAD20" variant="primary" size="sm">
          Claim Offer &rarr;
        </Button>
        <button
          className={styles.dismiss}
          onClick={dismiss}
          aria-label="Dismiss promotion"
        >
          ×
        </button>
      </div>
    </div>
  )
}
