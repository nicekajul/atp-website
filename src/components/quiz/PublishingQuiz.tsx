'use client'

import React, { useState } from 'react'
import { QUIZ_QUESTIONS, getRecommendedPackage } from '@/data/quizData'
import Button from '@/components/ui/Button'
import QuizResult from './QuizResult'
import QuizLeadCapture from './QuizLeadCapture'
import styles from './PublishingQuiz.module.css'

export default function PublishingQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isCapturing, setIsCapturing] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const totalSteps = QUIZ_QUESTIONS.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleOptionSelect = (stepId: string, value: string) => {
    if (transitioning) return
    setTransitioning(true)
    setAnswers(prev => ({ ...prev, [stepId]: value }))

    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        setIsCapturing(true)
      }
      setTransitioning(false)
    }, 400)
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  const handleLeadSubmit = (_data: { name: string; email: string; phone: string }) => {
    setIsCapturing(false)
    setIsFinished(true)
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setIsCapturing(false)
    setIsFinished(false)
  }

  // Lead capture gate — shown after last question, before result
  if (isCapturing) {
    return (
      <QuizLeadCapture
        recommendedPackage={getRecommendedPackage(answers)}
        onSubmit={handleLeadSubmit}
      />
    )
  }

  if (isFinished) {
    return <QuizResult answers={answers} onRestart={handleRestart} />
  }

  const currentQuestion = QUIZ_QUESTIONS[currentStep]

  return (
    <div className={styles.container}>
      <header className={styles.progressContainer}>
        <span className={styles.progressText}>Step {currentStep + 1} of {totalSteps}</span>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </header>

      <main className={styles.card} key={currentStep}>
        <h2 className={styles.question}>{currentQuestion.question}</h2>
        
        <div className={styles.options}>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              className={[
                styles.option,
                answers[currentQuestion.id] === option.value ? styles.optionSelected : '',
                transitioning ? styles.optionDisabled : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
              disabled={transitioning}
            >
              {option.label}
            </button>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        {currentStep > 0 && (
          <button className={styles.backBtn} onClick={handleBack}>
            ← Back to Previous Question
          </button>
        )}
      </footer>
    </div>
  )
}
