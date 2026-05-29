import React from 'react'
import Container from '@/components/layout/Container'
import PublishingQuiz from '@/components/quiz/PublishingQuiz'
import styles from './QuizPage.module.css'

export const metadata = {
  title: 'Find Your Publishing Path | Authors Tranquility Press',
  description: 'Take our 30-second quiz to find the perfect publishing package for your goals and budget.',
}

export default function QuizPage() {
  return (
    <div className={styles.quizPage}>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Find Your Publishing Path</h1>
          <p className={styles.subtitle}>Answer 6 quick questions to get a personalised recommendation.</p>
          <div className={styles.goldDivider} />
        </Container>
      </section>

      <div className={styles.quizWrapper}>
        <Container>
          <PublishingQuiz />
        </Container>
      </div>
    </div>
  )
}
