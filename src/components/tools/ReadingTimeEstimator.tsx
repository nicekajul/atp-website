'use client'

import { useState, useMemo } from 'react'
import styles from './tools.module.css'

const COMP_BOOKS = [
  { title: 'The Great Gatsby',       words: 47094 },
  { title: 'Harry Potter (Book 1)',   words: 77325 },
  { title: 'The Hunger Games',        words: 99750 },
  { title: 'Gone Girl',               words: 145719 },
  { title: 'A Game of Thrones',       words: 298000 },
]

export default function ReadingTimeEstimator() {
  const [wordCount, setWordCount] = useState(70000)

  const stats = useMemo(() => {
    const avgWpm      = 238
    const pagesPerK   = 250
    const minutes     = Math.round(wordCount / avgWpm)
    const hours       = Math.floor(minutes / 60)
    const mins        = minutes % 60
    const pages       = Math.round(wordCount / pagesPerK * 1000 / 1000)
    const chapters    = Math.round(wordCount / 3000)
    const closest     = COMP_BOOKS.reduce((a, b) =>
      Math.abs(b.words - wordCount) < Math.abs(a.words - wordCount) ? b : a)
    return { hours, mins, pages, chapters, closest }
  }, [wordCount])

  return (
    <div className={styles.toolBody}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Word Count <span className={styles.value}>{wordCount.toLocaleString()}</span>
        </label>
        <input type="range" min={5000} max={400000} step={1000}
          value={wordCount} onChange={e => setWordCount(+e.target.value)}
          className={styles.slider} />
        <div className={styles.sliderHints}><span>5k</span><span>400k</span></div>
      </div>

      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <p className={styles.statValue}>{stats.hours}h {stats.mins}m</p>
          <p className={styles.statLabel}>Average Reading Time</p>
          <p className={styles.statSub}>at 238 words/min</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statValue}>{stats.pages}</p>
          <p className={styles.statLabel}>Estimated Pages</p>
          <p className={styles.statSub}>at 250 words/page</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statValue}>~{stats.chapters}</p>
          <p className={styles.statLabel}>Suggested Chapters</p>
          <p className={styles.statSub}>at ~3,000 words each</p>
        </div>
      </div>

      <div className={styles.compNote}>
        <span className={styles.compLabel}>Closest comparable:</span>
        <span className={styles.compTitle}>{stats.closest.title}</span>
        <span className={styles.compWords}>({stats.closest.words.toLocaleString()} words)</span>
      </div>
    </div>
  )
}
