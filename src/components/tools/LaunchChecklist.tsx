'use client'

import { useState, useEffect } from 'react'
import styles from './tools.module.css'

const STORAGE_KEY = 'atp_launch_checklist'

const PHASES = [
  {
    label: '6 Months Out',
    color: '#4A90D9',
    items: [
      'Finalize manuscript and complete self-edits',
      'Hire a developmental or copy editor',
      'Research your target audience and comparable titles',
      'Choose your publishing path (KDP, IngramSpark, hybrid)',
      'Set your publication date and work backwards',
      'Begin building your author platform (website, social)',
    ],
  },
  {
    label: '3 Months Out',
    color: '#7B68EE',
    items: [
      'Complete final edits and send to proofreader',
      'Commission cover design',
      'Write your book description / back-cover blurb',
      'Set up author accounts on KDP / IngramSpark',
      'Apply for ARC (Advance Review Copy) readers',
      'Begin collecting early reviews and endorsements',
      'Set up or update your author website',
      'Plan your launch team and street team',
    ],
  },
  {
    label: '1 Month Out',
    color: '#E67E22',
    items: [
      'Upload files to your distribution platform and proof copy',
      'Finalize pricing strategy',
      'Schedule social media content calendar',
      'Send ARCs to book bloggers and reviewers',
      'Prepare press release',
      'Set up pre-order (if applicable)',
      'Reach out to local bookstores and libraries',
      'Prepare your email newsletter announcement',
    ],
  },
  {
    label: 'Launch Week',
    color: '#C9A84C',
    items: [
      'Publish your book!',
      'Send email announcement to your list',
      'Go live on social media — share behind-the-scenes',
      'Ask launch team to post reviews on Amazon & Goodreads',
      'Run a limited-time launch promotion or price drop',
      'Do a live reading or author Q&A online',
      'Submit to BookBub and book promotion sites',
      'Monitor sales dashboard and respond to readers',
    ],
  },
  {
    label: 'Post-Launch',
    color: '#27AE60',
    items: [
      'Thank your launch team and early supporters',
      'Analyze sales data and adjust marketing',
      'Continue gathering and responding to reviews',
      'Pitch for podcast interviews and guest posts',
      'Plan your next book or sequel',
      'Submit for book awards',
      'Evaluate paid advertising performance',
    ],
  },
]

export default function LaunchChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setChecked(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  const toggle = (key: string) => {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch { /* ignore */ }
      return next
    })
  }

  const totalItems   = PHASES.reduce((s, p) => s + p.items.length, 0)
  const totalChecked = Object.values(checked).filter(Boolean).length
  const overallPct   = Math.round((totalChecked / totalItems) * 100)

  return (
    <div className={styles.toolBody}>
      <div className={styles.checklistProgress}>
        <div className={styles.checklistProgressBar}>
          <div className={styles.checklistProgressFill} style={{ width: `${overallPct}%` }} />
        </div>
        <span className={styles.checklistProgressLabel}>{overallPct}% complete — {totalChecked}/{totalItems} tasks</span>
      </div>

      <div className={styles.phaseTabs}>
        {PHASES.map((p, i) => {
          const phaseChecked = p.items.filter((_, j) => checked[`${i}-${j}`]).length
          return (
            <button key={i}
              className={`${styles.phaseTab} ${activePhase === i ? styles.phaseTabActive : ''}`}
              onClick={() => setActivePhase(i)}
              style={{ '--phase-color': p.color } as React.CSSProperties}>
              <span className={styles.phaseTabLabel}>{p.label}</span>
              <span className={styles.phaseTabCount}>{phaseChecked}/{p.items.length}</span>
            </button>
          )
        })}
      </div>

      <div className={styles.checklistItems}>
        {PHASES[activePhase].items.map((item, j) => {
          const key = `${activePhase}-${j}`
          return (
            <label key={key} className={`${styles.checkItem} ${checked[key] ? styles.checkItemDone : ''}`}>
              <input type="checkbox" checked={!!checked[key]} onChange={() => toggle(key)} className={styles.checkBox} />
              <span>{item}</span>
            </label>
          )
        })}
      </div>

      <button className={styles.resetBtn}
        onClick={() => {
          setChecked({})
          try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
        }}>
        Reset All Progress
      </button>
    </div>
  )
}
