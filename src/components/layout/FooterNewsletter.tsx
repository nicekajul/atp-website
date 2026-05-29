'use client'

import React, { useState } from 'react'
import styles from './Footer.module.css'

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.newsletter__success}>
        <span className={styles.newsletter__successIcon}>&#10003;</span>
        <p className={styles.newsletter__successText}>
          You&rsquo;re subscribed! Publishing insights are headed to your inbox.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.newsletter__form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        className={`${styles.newsletter__input}${status === 'error' ? ` ${styles.newsletter__inputError}` : ''}`}
        aria-label="Email address for newsletter"
        value={email}
        onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
        required
        disabled={status === 'submitting'}
      />
      <button type="submit" className={styles.newsletter__btn} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className={styles.newsletter__error}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
