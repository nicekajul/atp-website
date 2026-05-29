'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { QUIZ_QUESTIONS, getRecommendedPackage } from '@/data/quizData'
import { formatPhoneUS } from '@/lib/formatPhone'
import styles from './FloatingCTA.module.css'

const QUICK_QUESTIONS = QUIZ_QUESTIONS

type Stage = 'idle' | 'quiz' | 'capture' | 'result'

interface LeadData {
  name: string
  email: string
  phone: string
}

export default function FloatingCTA() {
  const [isVisible, setIsVisible]       = useState(false)
  const [stage, setStage]               = useState<Stage>('idle')
  const [step, setStep]                 = useState(0)
  const [answers, setAnswers]           = useState<Record<string, string>>({})
  const [transitioning, setTransitioning] = useState(false)
  const [lead, setLead]                 = useState<LeadData>({ name: '', email: '', phone: '' })
  const [submitting, setSubmitting]     = useState(false)
  const [submitError, setSubmitError]   = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleOpen = () => {
    setStage('quiz')
    setStep(0)
    setAnswers({})
    setTransitioning(false)
    setLead({ name: '', email: '', phone: '' })
    setSubmitError(false)
  }

  const handleClose = () => {
    setStage('idle')
    setStep(0)
    setAnswers({})
    setTransitioning(false)
    setSubmitting(false)
    setSubmitError(false)
  }

  // Auto-advance on selection — same pattern as main PublishingQuiz
  const handleSelect = (value: string) => {
    if (transitioning) return
    setTransitioning(true)

    const question = QUICK_QUESTIONS[step]
    const newAnswers = { ...answers, [question.id]: value }
    setAnswers(newAnswers)

    setTimeout(() => {
      if (step < QUICK_QUESTIONS.length - 1) {
        setStep(s => s + 1)
      } else {
        setStage('capture')
      }
      setTransitioning(false)
    }, 400)
  }

  const handleBack = () => {
    if (step > 0) setStep(s => s - 1)
  }

  const handleLeadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const formatted = name === 'phone' ? formatPhoneUS(value) : value
    setLead(prev => ({ ...prev, [name]: formatted }))
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(false)
    try {
      const recommendedPackage = getRecommendedPackage(answers)
      const res = await fetch('/api/quiz-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, recommendedPackage }),
      })
      if (res.ok) {
        setStage('result')
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const recommendation  = stage === 'result' ? getRecommendedPackage(answers) : ''
  const currentQuestion = QUICK_QUESTIONS[step]
  const progressPct     = ((step + 1) / QUICK_QUESTIONS.length) * 100

  return (
    <>
      {/* ── Floating button (idle only) ───────────────────────── */}
      <button
        className={`${styles.button} ${isVisible && stage === 'idle' ? styles.visible : ''}`}
        onClick={handleOpen}
        aria-label="Find Your Perfect Package"
      >
        <span className={styles.text}>Find Your Perfect Package</span>
      </button>

      {/* ── Quiz / Capture / Result panel ────────────────────── */}
      <div
        className={`${styles.panel} ${stage !== 'idle' && isVisible ? styles.panelVisible : ''}`}
        role="dialog"
        aria-label="Find Your Publishing Path"
      >
        {/* Header */}
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            {stage === 'result' ? 'Your Match' : 'Find Your Publishing Path'}
          </div>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" /><line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* ── Quiz stage ─────────────────────────────────────── */}
        {stage === 'quiz' && (
          <>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
            </div>
            <p className={styles.stepLabel}>Question {step + 1} of {QUICK_QUESTIONS.length}</p>

            <p className={styles.question}>{currentQuestion.question}</p>

            <div className={styles.options}>
              {currentQuestion.options.map(opt => (
                <button
                  key={opt.value}
                  className={[
                    styles.optionBtn,
                    answers[currentQuestion.id] === opt.value ? styles.optionSelected : '',
                    transitioning ? styles.optionDisabled : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleSelect(opt.value)}
                  disabled={transitioning}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {step > 0 && (
              <button className={styles.backBtn} onClick={handleBack} disabled={transitioning}>
                ← Back to Previous Question
              </button>
            )}
          </>
        )}

        {/* ── Lead capture stage ─────────────────────────────── */}
        {stage === 'capture' && (
          <div className={styles.captureBody}>
            <p className={styles.captureEyebrow}>Your results are ready</p>
            <p className={styles.captureHeading}>
              Where should we send your personalised recommendation?
            </p>

            <form className={styles.captureForm} onSubmit={handleLeadSubmit} noValidate>
              <div className={styles.captureField}>
                <label htmlFor="fc-name" className={styles.captureLabel}>Name</label>
                <input
                  id="fc-name"
                  type="text"
                  name="name"
                  value={lead.name}
                  onChange={handleLeadChange}
                  className={styles.captureInput}
                  placeholder="Jane Smith"
                  required
                  autoComplete="name"
                />
              </div>

              <div className={styles.captureField}>
                <label htmlFor="fc-email" className={styles.captureLabel}>Email</label>
                <input
                  id="fc-email"
                  type="email"
                  name="email"
                  value={lead.email}
                  onChange={handleLeadChange}
                  className={styles.captureInput}
                  placeholder="jane@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className={styles.captureField}>
                <label htmlFor="fc-phone" className={styles.captureLabel}>
                  Phone <span className={styles.captureOptional}>(optional)</span>
                </label>
                <input
                  id="fc-phone"
                  type="tel"
                  name="phone"
                  value={lead.phone}
                  onChange={handleLeadChange}
                  className={styles.captureInput}
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                />
              </div>

              <button
                type="submit"
                className={`${styles.nextBtn} ${styles.nextBtnActive} ${styles.captureSubmit}`}
                disabled={submitting}
              >
                {submitting ? 'One moment…' : 'Show My Results →'}
              </button>

              {submitError && (
                <p className={styles.captureError}>Something went wrong. Please try again.</p>
              )}
            </form>

            <p className={styles.capturePrivacy}>&#128274; No spam, ever.</p>
          </div>
        )}

        {/* ── Result stage ───────────────────────────────────── */}
        {stage === 'result' && (
          <div className={styles.result}>
            <p className={styles.resultEyebrow}>Best fit for you</p>
            <p className={styles.resultPackage}>{recommendation}</p>
            <p className={styles.resultSub}>
              Based on your answers, this package aligns with your goals and budget.
            </p>
            <Link
              href="/services/publishing-packages"
              className={styles.resultCTA}
              onClick={handleClose}
            >
              See Package Details →
            </Link>
            <button className={styles.retakeBtn} onClick={handleOpen}>
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </>
  )
}
