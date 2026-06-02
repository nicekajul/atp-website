'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import styles from './EbookPopup.module.css'

const STORAGE_KEY = 'atp_ebook_popup_seen'

type PopupState = 'tab' | 'open' | 'closed'

export default function EbookPopup() {
  const [popupState, setPopupState] = useState<PopupState>('tab')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '' })

  useEffect(() => {
    // Auto-open after 6 s or 40 % scroll — only if visitor hasn't submitted before
    if (sessionStorage.getItem(STORAGE_KEY)) return

    let timer: ReturnType<typeof setTimeout>

    const autoOpen = () => {
      setPopupState('open')
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }

    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      if (total > 0 && window.scrollY / total >= 0.4) autoOpen()
    }

    timer = setTimeout(autoOpen, 6000)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /** × button or backdrop → back to tab */
  const minimize = () => setPopupState('tab')

  /** Tab click → open full modal */
  const open = () => setPopupState('open')

  /** Only called after successful form submit */
  const fullClose = () => {
    setPopupState('closed')
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/ebook-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (popupState === 'closed') return null

  return (
    <>
      {/* ── Side tab — always visible until form submitted ─── */}
      {popupState === 'tab' && (
        <button
          className={styles.tab}
          onClick={open}
          aria-label="Open free e-book offer"
        >
          <span className={styles.tabIcon}>📚</span>
          <span className={styles.tabText}>Free Guide</span>
          <span className={styles.tabArrow}>›</span>
        </button>
      )}

      {/* ── Full modal ─────────────────────────────────────── */}
      {popupState === 'open' && (
        <>
          <div className={styles.backdrop} onClick={minimize} aria-hidden="true" />

          <div className={styles.overlay}>
            <div
              className={styles.card}
              role="dialog"
              aria-modal="true"
              aria-labelledby="ebook-popup-title"
            >
              <button className={styles.closeBtn} onClick={minimize} aria-label="Minimize">
                ×
              </button>

              {/* Left — guide cover image */}
              <div className={styles.leftPanel}>
                <img
                  src="/ATP_Authors_Publishing_Guide_Page_1.jpg"
                  alt="The Ultimate Author's Publishing Guide cover"
                  className={styles.coverImage}
                />
                <p className={styles.panelCaption}>
                  Exclusive free resource &mdash; updated every month
                </p>
              </div>

              {/* Right — form */}
              <div className={styles.rightPanel}>
                {status === 'success' ? (
                  <div className={styles.successState}>
                    <span className={styles.successIcon}>✓</span>
                    <h3 className={styles.successTitle}>Check your inbox!</h3>
                    <p className={styles.successText}>
                      We&rsquo;ve sent the free guide to <strong>{formData.email}</strong>.
                      Click the download link in the email to access your copy.
                    </p>
                    <button className={styles.successClose} onClick={fullClose}>
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <span className={styles.badge}>Free This Month</span>
                    <h2 id="ebook-popup-title" className={styles.heading}>
                      Download Your Free Author&rsquo;s Publishing Guide
                    </h2>
                    <p className={styles.subtext}>
                      Every month we release an exclusive free resource for aspiring
                      and established authors. This month&rsquo;s guide covers the exact
                      steps to take your manuscript from draft to bestseller.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                      <div className={styles.field}>
                        <label htmlFor="ebook-name" className={styles.label}>Your Name</label>
                        <input
                          id="ebook-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="Jane Smith"
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="ebook-email" className={styles.label}>Email Address</label>
                        <input
                          id="ebook-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="jane@example.com"
                          required
                          autoComplete="email"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Sending…' : 'Send Me the Free Guide →'}
                      </Button>
                      {status === 'error' && (
                        <p style={{ textAlign: 'center', color: '#dc2626', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </form>

                    <p className={styles.privacy}>
                      🔒 No spam. Unsubscribe at any time.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
