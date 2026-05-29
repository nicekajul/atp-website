'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import { formatPhoneUS } from '@/lib/formatPhone'
import styles from './QuizLeadCapture.module.css'

interface QuizLeadCaptureProps {
  recommendedPackage: string
  onSubmit: (data: { name: string; email: string; phone: string }) => void
}

export default function QuizLeadCapture({ recommendedPackage, onSubmit }: QuizLeadCaptureProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/quiz-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recommendedPackage }),
      })
      if (res.ok) {
        onSubmit(formData)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const formatted = name === 'phone' ? formatPhoneUS(value) : value
    setFormData(prev => ({ ...prev, [name]: formatted }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.icon}>✦</span>

        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Quiz complete — your results are ready</p>
          <h2 className={styles.heading}>
            Your personalised recommendation is waiting
          </h2>
          <p className={styles.subtext}>
            Enter your details below and we&rsquo;ll reveal your perfect publishing match, plus send your personalised roadmap and a free consultation offer directly to your inbox.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="lead-name" className={styles.label}>Your Name</label>
            <input
              id="lead-name"
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
            <label htmlFor="lead-email" className={styles.label}>Email Address</label>
            <input
              id="lead-email"
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

          <div className={styles.field}>
            <label htmlFor="lead-phone" className={styles.label}>
              Phone Number <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="(555) 000-0000"
              autoComplete="tel"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'One moment…' : 'Show My Results →'}
          </Button>

          {status === 'error' && (
            <p style={{ textAlign: 'center', color: '#dc2626', fontSize: '0.875rem', marginTop: '0.75rem' }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <p className={styles.privacy}>
          &#128274; No spam, ever. We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  )
}
