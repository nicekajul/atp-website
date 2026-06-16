'use client'

import React, { useRef, useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'
import styles from './Footer.module.css'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')
  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: honeypotRef.current?.value ?? '', turnstileToken }),
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
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />
      {TURNSTILE_SITE_KEY && (
        <Turnstile
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken('')}
          onError={() => setTurnstileToken('')}
          options={{ appearance: 'interaction-only' }}
        />
      )}
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
