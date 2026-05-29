'use client'

import React, { useMemo } from 'react'
import { getRecommendedPackage, RECOMMENDATION_LOGIC } from '@/data/quizData'
import Button from '@/components/ui/Button'
import styles from './QuizResult.module.css'

interface QuizResultProps {
  answers: Record<string, string>
  onRestart: () => void
}

export default function QuizResult({ answers, onRestart }: QuizResultProps) {
  const recommendation = useMemo(() => {
    const pkg = getRecommendedPackage(answers)
    const benefits = RECOMMENDATION_LOGIC.benefits[pkg] ?? RECOMMENDATION_LOGIC.benefits['Execution']
    const price = RECOMMENDATION_LOGIC.prices[pkg] ?? ''

    // Dynamic reasoning — 3 lines drawn from the author's actual answers
    const experienceReason = (() => {
      switch (answers.experience) {
        case 'first_time_starting': return 'Sized perfectly for a first-time author taking their first step'
        case 'first_time_ready':    return 'Right-sized for a first-time author with a manuscript ready to go'
        case 'published_grow':      return 'Builds on your publishing experience with upgraded tools'
        case 'career_author':       return 'Matches the ambitions of a career author with multiple works'
        default:                    return 'Matched to your experience level'
      }
    })()

    const budgetReason = (() => {
      switch (answers.budget) {
        case 'under_1k':  return 'Delivers full publishing within your focused budget'
        case '1k_2k':     return 'Strong value for your $1,000–$2,000 investment'
        case '2k_4k':     return 'Best all-around package in your $2,000–$4,000 range'
        case '4k_7k':     return 'Maximum value for your $4,000–$7,000 range'
        case '7k_10k':    return 'Premium features that match your high-investment goals'
        case 'over_10k':  return 'The flagship all-inclusive experience your investment commands'
        default:          return 'Aligned with your budget'
      }
    })()

    const goalReason = (() => {
      switch (answers.goal) {
        case 'just_publish':         return 'Focused on getting your book published cleanly and professionally'
        case 'build_readership':     return 'Includes the tools you need to grow your reader base'
        case 'marketing_launch':     return 'Delivers the marketing firepower for a strong, visible launch'
        case 'national_recognition': return 'Built for authors pursuing national visibility and lasting legacy'
        default:                     return 'Matched to your publishing goals'
      }
    })()

    return { package: pkg, price, benefits, reasoning: [experienceReason, budgetReason, goalReason] }
  }, [answers])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.recommendationLabel}>Your Recommended Package</span>
        <h2 className={styles.recommendedTitle}>{recommendation.package.toUpperCase()}</h2>
        {recommendation.price && (
          <p className={styles.recommendedPrice}>Starting at {recommendation.price}</p>
        )}
      </header>

      <div className={styles.resultCard}>
        <div className={styles.whyFit}>
          <h3 className={styles.whyTitle}>Why this is your best fit:</h3>
          <ul className={styles.whyList}>
            {recommendation.reasoning.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className={styles.benefits}>
          <span className={styles.benefitLabel}>Key benefits you&rsquo;ll get:</span>
          <div className={styles.benefitGrid}>
            {recommendation.benefits.map((benefit, idx) => (
              <div key={idx} className={styles.benefitItem}>{benefit}</div>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <Button href="/services/publishing-packages" variant="primary" size="lg" fullWidth>
            View Package Details
          </Button>
          <Button href="/contact" variant="outline" size="lg" fullWidth>
            Get Free Consultation
          </Button>
        </div>
      </div>

      <button className={styles.restartBtn} onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  )
}
