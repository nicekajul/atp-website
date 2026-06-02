'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { QUIZ_QUESTIONS, getRecommendedPackage } from '@/data/quizData'
import { formatPhoneUS } from '@/lib/formatPhone'
import styles from './FloatingCTA.module.css'

type QuizStage = 'idle' | 'quiz' | 'capture' | 'result'
interface LeadData { name: string; email: string; phone: string }

// ── Icons ──────────────────────────────────────────────────
function IconCompass() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  )
}
function IconPackage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  )
}
function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}
function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
}

// Ordered closest-to-trigger first (quiz = bottom, bookstore = top)
const ACTIONS: Action[] = [
  { id: 'quiz',      label: 'Find My Package',  icon: <IconCompass /> },
  { id: 'packages',  label: 'View Packages',     href: '/services/publishing-packages', icon: <IconPackage /> },
  { id: 'contact',   label: 'Get in Touch',      href: '/contact',                      icon: <IconChat /> },
  { id: 'bookstore', label: 'Browse Bookstore',  href: '/bookstore',                    icon: <IconBook /> },
]

export default function FloatingCTA() {
  const [isVisible, setIsVisible]         = useState(false)
  const [isOpen, setIsOpen]               = useState(false)
  const [quizStage, setQuizStage]         = useState<QuizStage>('idle')
  const [step, setStep]                   = useState(0)
  const [answers, setAnswers]             = useState<Record<string, string>>({})
  const [transitioning, setTransitioning] = useState(false)
  const [lead, setLead]                   = useState<LeadData>({ name: '', email: '', phone: '' })
  const [submitting, setSubmitting]       = useState(false)
  const [submitError, setSubmitError]     = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openQuiz = () => {
    setIsOpen(false)
    setQuizStage('quiz')
    setStep(0)
    setAnswers({})
    setTransitioning(false)
    setLead({ name: '', email: '', phone: '' })
    setSubmitError(false)
  }

  const closeQuiz = () => {
    setQuizStage('idle')
    setStep(0)
    setAnswers({})
    setTransitioning(false)
    setSubmitting(false)
    setSubmitError(false)
  }

  const handleAction = (action: Action) => {
    setIsOpen(false)
    if (action.id === 'quiz') openQuiz()
  }

  const handleSelect = (value: string) => {
    if (transitioning) return
    setTransitioning(true)
    const question = QUIZ_QUESTIONS[step]
    const newAnswers = { ...answers, [question.id]: value }
    setAnswers(newAnswers)
    setTimeout(() => {
      if (step < QUIZ_QUESTIONS.length - 1) setStep(s => s + 1)
      else setQuizStage('capture')
      setTransitioning(false)
    }, 400)
  }

  const handleBack = () => { if (step > 0) setStep(s => s - 1) }

  const handleLeadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLead(prev => ({ ...prev, [name]: name === 'phone' ? formatPhoneUS(value) : value }))
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
      if (res.ok) setQuizStage('result')
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const recommendation  = quizStage === 'result' ? getRecommendedPackage(answers) : ''
  const currentQuestion = QUIZ_QUESTIONS[step]
  const progressPct     = ((step + 1) / QUIZ_QUESTIONS.length) * 100
  const quizActive      = quizStage !== 'idle'

  return (
    <>
      {/* ── Speed Dial ────────────────────────────────────── */}
      <div className={`${styles.fab} ${isVisible && !quizActive ? styles.fabVisible : ''}`}>

        {/* Action items — reversed so quiz renders last (bottom, closest to trigger) */}
        <div className={styles.fabMenu} aria-hidden={!isOpen}>
          {[...ACTIONS].reverse().map((action, revIdx) => {
            const origIdx = ACTIONS.length - 1 - revIdx
            return (
              <div
                key={action.id}
                className={`${styles.fabItem} ${isOpen ? styles.fabItemOpen : ''}`}
                style={{ '--fab-delay': `${origIdx * 55}ms` } as React.CSSProperties}
              >
                <span className={styles.fabLabel}>{action.label}</span>
                {action.href ? (
                  <Link
                    href={action.href}
                    className={styles.fabBtn}
                    aria-label={action.label}
                    onClick={() => setIsOpen(false)}
                  >
                    {action.icon}
                  </Link>
                ) : (
                  <button
                    className={styles.fabBtn}
                    aria-label={action.label}
                    onClick={() => handleAction(action)}
                  >
                    {action.icon}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Trigger */}
        <button
          className={`${styles.fabTrigger} ${isOpen ? styles.fabTriggerOpen : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close quick navigation' : 'Quick navigation'}
          aria-expanded={isOpen}
        >
          <svg
            className={`${styles.fabTriggerIcon} ${isOpen ? styles.fabTriggerIconOpen : ''}`}
            width="22" height="22" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5"  y1="12" x2="19" y2="12"/>
          </svg>
        </button>
      </div>

      {/* ── Quiz / Capture / Result panel ─────────────────── */}
      <div
        className={`${styles.panel} ${quizActive && isVisible ? styles.panelVisible : ''}`}
        role="dialog"
        aria-label="Find Your Publishing Path"
      >
        {/* Header */}
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            {quizStage === 'result' ? 'Your Match' : 'Find Your Publishing Path'}
          </div>
          <button className={styles.closeBtn} onClick={closeQuiz} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13"/>
              <line x1="13" y1="1" x2="1" y2="13"/>
            </svg>
          </button>
        </div>

        {/* Quiz stage */}
        {quizStage === 'quiz' && (
          <>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${progressPct}%` }}/>
            </div>
            <p className={styles.stepLabel}>Question {step + 1} of {QUIZ_QUESTIONS.length}</p>
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

        {/* Lead capture stage */}
        {quizStage === 'capture' && (
          <div className={styles.captureBody}>
            <p className={styles.captureEyebrow}>Your results are ready</p>
            <p className={styles.captureHeading}>Where should we send your personalised recommendation?</p>
            <form className={styles.captureForm} onSubmit={handleLeadSubmit} noValidate>
              <div className={styles.captureField}>
                <label htmlFor="fc-name" className={styles.captureLabel}>Name</label>
                <input id="fc-name" type="text" name="name" value={lead.name} onChange={handleLeadChange}
                  className={styles.captureInput} placeholder="Jane Smith" required autoComplete="name"/>
              </div>
              <div className={styles.captureField}>
                <label htmlFor="fc-email" className={styles.captureLabel}>Email</label>
                <input id="fc-email" type="email" name="email" value={lead.email} onChange={handleLeadChange}
                  className={styles.captureInput} placeholder="jane@example.com" required autoComplete="email"/>
              </div>
              <div className={styles.captureField}>
                <label htmlFor="fc-phone" className={styles.captureLabel}>
                  Phone <span className={styles.captureOptional}>(optional)</span>
                </label>
                <input id="fc-phone" type="tel" name="phone" value={lead.phone} onChange={handleLeadChange}
                  className={styles.captureInput} placeholder="+1 (555) 000-0000" autoComplete="tel"/>
              </div>
              <button
                type="submit"
                className={`${styles.nextBtn} ${styles.nextBtnActive} ${styles.captureSubmit}`}
                disabled={submitting}
              >
                {submitting ? 'One moment…' : 'Show My Results →'}
              </button>
              {submitError && <p className={styles.captureError}>Something went wrong. Please try again.</p>}
            </form>
            <p className={styles.capturePrivacy}>&#128274; No spam, ever.</p>
          </div>
        )}

        {/* Result stage */}
        {quizStage === 'result' && (
          <div className={styles.result}>
            <p className={styles.resultEyebrow}>Best fit for you</p>
            <p className={styles.resultPackage}>{recommendation}</p>
            <p className={styles.resultSub}>Based on your answers, this package aligns with your goals and budget.</p>
            <Link href="/services/publishing-packages" className={styles.resultCTA} onClick={closeQuiz}>
              See Package Details →
            </Link>
            <button className={styles.retakeBtn} onClick={openQuiz}>Retake Quiz</button>
          </div>
        )}
      </div>
    </>
  )
}
