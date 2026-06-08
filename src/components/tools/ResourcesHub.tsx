'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './ResourcesHub.module.css'

const PublishingCostCalc   = dynamic(() => import('./PublishingCostCalc'),   { ssr: false })
const RoyaltyCalc          = dynamic(() => import('./RoyaltyCalc'),          { ssr: false })
const LaunchChecklist      = dynamic(() => import('./LaunchChecklist'),      { ssr: false })
const TitleGenerator       = dynamic(() => import('./TitleGenerator'),       { ssr: false })
const ReadingTimeEstimator = dynamic(() => import('./ReadingTimeEstimator'), { ssr: false })
// const QueryLetterBuilder   = dynamic(() => import('./QueryLetterBuilder'),   { ssr: false })
const BlurbBuilder         = dynamic(() => import('./BlurbBuilder'),         { ssr: false })

const TOOLS = [
  {
    id: 'cost',
    category: 'calculators',
    icon: '💰',
    title: 'Publishing Cost Calculator',
    desc: 'Estimate your total self-publishing investment based on word count, design tier, and marketing budget.',
    component: <PublishingCostCalc />,
  },
  {
    id: 'royalty',
    category: 'calculators',
    icon: '📈',
    title: 'Royalty Calculator',
    desc: 'Calculate your per-sale royalty and monthly income projections across Amazon KDP and IngramSpark.',
    component: <RoyaltyCalc />,
  },
  {
    id: 'checklist',
    category: 'planning',
    icon: '✅',
    title: 'Book Launch Checklist',
    desc: 'A timeline-based checklist from 6 months out to post-launch. Progress saves automatically.',
    component: <LaunchChecklist />,
  },
  {
    id: 'readtime',
    category: 'planning',
    icon: '⏱️',
    title: 'Reading Time Estimator',
    desc: 'Instantly see estimated reading time, page count, and chapter count for any word count.',
    component: <ReadingTimeEstimator />,
  },
  {
    id: 'title',
    category: 'writing',
    icon: '✨',
    title: 'Book Title Generator',
    desc: 'Generate catchy title ideas by genre and keyword using proven titling formulas.',
    component: <TitleGenerator />,
  },
  // {
  //   id: 'query',
  //   category: 'writing',
  //   icon: '✉️',
  //   title: 'Query Letter Builder',
  //   desc: 'Build a professional query letter from your plot details, bio, and comp titles.',
  //   component: <QueryLetterBuilder />,
  // },
  {
    id: 'blurb',
    category: 'writing',
    icon: '📝',
    title: 'Book Blurb Builder',
    desc: 'Generate three back-cover blurb variations from your protagonist, conflict, and stakes.',
    component: <BlurbBuilder />,
  },
]

const CATEGORIES = [
  { id: 'all',         label: 'All Tools' },
  { id: 'calculators', label: 'Calculators' },
  { id: 'planning',    label: 'Planning' },
  { id: 'writing',     label: 'Writing' },
]

export default function ResourcesHub() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openTool,       setOpenTool]       = useState<string | null>(null)

  const visible = TOOLS.filter(t => activeCategory === 'all' || t.category === activeCategory)

  return (
    <div>
      {/* Category filter */}
      <div className={styles.filters}>
        {CATEGORIES.map(c => (
          <button key={c.id}
            className={`${styles.filter} ${activeCategory === c.id ? styles.filterActive : ''}`}
            onClick={() => { setActiveCategory(c.id); setOpenTool(null) }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Tool grid */}
      <div className={styles.grid}>
        {visible.map(tool => {
          const isOpen = openTool === tool.id
          return (
            <div key={tool.id} className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
              <button className={styles.cardHeader} onClick={() => setOpenTool(isOpen ? null : tool.id)}>
                <span className={styles.cardIcon}>{tool.icon}</span>
                <div className={styles.cardMeta}>
                  <h2 className={styles.cardTitle}>{tool.title}</h2>
                  <p className={styles.cardDesc}>{tool.desc}</p>
                </div>
                <span className={`${styles.cardChevron} ${isOpen ? styles.cardChevronOpen : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="5 8 10 13 15 8" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className={styles.cardBody}>
                  <div className={styles.cardDivider} />
                  {tool.component}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
