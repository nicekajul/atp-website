'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import styles from './InlineLeadForm.module.css'

interface InlineLeadFormProps {
  submitLabel?: string
  helperText?: string
}

export default function InlineLeadForm({ submitLabel, helperText }: InlineLeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    service: '',
    message: '',
    websiteGoals: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (status === 'success') {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successIcon}>&#10003;</div>
        <h3 className={styles.successTitle}>Thank you!</h3>
        <p className={styles.successText}>We&apos;ve received your inquiry and someone from our team will get in touch within 24 hours. Check your inbox for a confirmation email.</p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successIcon} style={{ background: '#dc2626' }}>!</div>
        <h3 className={styles.successTitle}>Something went wrong</h3>
        <p className={styles.successText}>We couldn&apos;t send your message. Please try again or email us at support@authorstranquilitypress.com.</p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>Try again</button>
      </div>
    )
  }

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.formTitle}>Tell us about your book</h3>
      <p className={styles.formSubtitle}>
        {helperText || 'Fill out the form below to request a personalized consultation.'} <strong>We respond within 24 hours.</strong>
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="lead-name" className={styles.label}>Full Name</label>
            <input type="text" id="lead-name" name="name" className={styles.input} required placeholder="Your Name" onChange={handleChange} value={formData.name} />
          </div>
          <div className={styles.field}>
            <label htmlFor="lead-email" className={styles.label}>Email Address</label>
            <input type="email" id="lead-email" name="email" className={styles.input} required placeholder="email@example.com" onChange={handleChange} value={formData.email} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="lead-title" className={styles.label}>Book Title / Project Title</label>
            <input type="text" id="lead-title" name="title" className={styles.input} placeholder="Your Book Title" onChange={handleChange} value={formData.title} />
          </div>
          <div className={styles.field}>
            <label htmlFor="lead-service" className={styles.label}>Service of Interest</label>
            <select id="lead-service" name="service" className={styles.select} onChange={handleChange} value={formData.service}>
              <option value="">Select a service</option>
              <option value="Publishing Packages">Publishing Packages</option>
              <option value="Editorial Services">Editorial Services</option>
              <option value="Book Design">Book Design</option>
              <option value="Marketing & PR">Marketing &amp; PR</option>
              <option value="eBook Conversion">eBook Conversion</option>
              <option value="Author Website">Author Website</option>
            </select>
          </div>
        </div>

        {helperText && (
          <div className={styles.field}>
            <label htmlFor="lead-websiteGoals" className={styles.label}>Website Goals / Features Needed</label>
            <input
              type="text"
              id="lead-websiteGoals"
              name="websiteGoals"
              className={styles.input}
              placeholder="e.g. Lead capture, Book series showcase, Blog..."
              onChange={handleChange}
              value={formData.websiteGoals}
            />
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="lead-message" className={styles.label}>Short Message / Tell us about your book</label>
          <textarea id="lead-message" name="message" className={styles.textarea} rows={4} placeholder="Tell us a little about your book and what you're looking for..." onChange={handleChange} value={formData.message} />
        </div>

        <div className={styles.footer}>
          <Button type="submit" variant="primary" size="lg" fullWidth disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : (submitLabel || 'Get Started')}
          </Button>
          <p className={styles.secureText}>&#128274; Your information is 100% confidential. We respond within 24 hours.</p>
          <p className={styles.microcopy}>No spam. No pressure. Just expert guidance.</p>
        </div>
      </form>
    </div>
  )
}
