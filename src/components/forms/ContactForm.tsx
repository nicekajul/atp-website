'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import styles from './ContactForm.module.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const INTERESTS = [
  'Full Publishing Package',
  'Book Design & Formatting',
  'Editing & Proofreading',
  'Marketing & Distribution',
  'Book Cover Design',
  'Just Exploring / General Inquiry',
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Your name is required.'
    if (!form.email.trim()) e.email = 'Your email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim()) e.message = 'Please tell us a bit about your project.'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successHeading}>Message Received!</h3>
        <p className={styles.successText}>
          Thank you, {form.name.split(' ')[0]}. One of our publishing consultants will reach out within one business day.
          Check your inbox — we&apos;ve sent a confirmation to {form.email}.
        </p>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon} style={{ background: '#dc2626' }}>!</div>
        <h3 className={styles.successHeading}>Something went wrong</h3>
        <p className={styles.successText}>
          We couldn&apos;t send your message. Please try again or email us directly at{' '}
          <a href="mailto:support@authorstranquilitypress.com">support@authorstranquilitypress.com</a>.
        </p>
        <button className={styles.successIcon} style={{ marginTop: '1rem', cursor: 'pointer', background: 'none', border: '1px solid #ccc', borderRadius: 6, padding: '8px 16px', fontSize: 14 }} onClick={() => setState('idle')}>Try again</button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Full Name <span className={styles.req}>*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email Address <span className={styles.req}>*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone <span className={styles.optional}>(optional)</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="interest">I&apos;m interested in</label>
          <select
            id="interest"
            name="interest"
            className={styles.select}
            value={form.interest}
            onChange={handleChange}
          >
            <option value="">Select a service...</option>
            {INTERESTS.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Tell us about your project <span className={styles.req}>*</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Share your book idea, genre, current stage, and any specific goals..."
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      <div className={styles.footer}>
        <p className={styles.privacy}>We respect your privacy and never share your information.</p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}
