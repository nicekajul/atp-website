'use client'

import { useState, useMemo } from 'react'
import styles from './tools.module.css'

const EDITING = { perWord: [0.01, 0.025] }
const FORMATTING = { diy: [0, 0], basic: [300, 600], premium: [800, 1500] }
const COVER = { diy: [0, 0], template: [50, 200], custom: [500, 1500] }
const MARKETING = 1
const ISBN_COST = 125

type FormatKey = keyof typeof FORMATTING
type CoverKey  = keyof typeof COVER

export default function PublishingCostCalc() {
  const [wordCount,  setWordCount]  = useState(60000)
  const [formatting, setFormatting] = useState<FormatKey>('basic')
  const [cover,      setCover]      = useState<CoverKey>('template')
  const [marketing,  setMarketing]  = useState(500)
  const [includeISBN, setISBN]      = useState(true)

  const { low, high, breakdown } = useMemo(() => {
    const editLow  = Math.round(wordCount * EDITING.perWord[0])
    const editHigh = Math.round(wordCount * EDITING.perWord[1])
    const fmtLow   = FORMATTING[formatting][0]
    const fmtHigh  = FORMATTING[formatting][1]
    const covLow   = COVER[cover][0]
    const covHigh  = COVER[cover][1]
    const isbn     = includeISBN ? ISBN_COST : 0

    return {
      low:  editLow  + fmtLow  + covLow  + marketing + isbn,
      high: editHigh + fmtHigh + covHigh + marketing + isbn,
      breakdown: [
        { label: 'Editing & Proofreading', low: editLow,  high: editHigh },
        { label: 'Formatting / Typesetting', low: fmtLow, high: fmtHigh },
        { label: 'Cover Design',             low: covLow,  high: covHigh },
        { label: 'Marketing Budget',         low: marketing, high: marketing },
        { label: 'ISBN Registration',        low: isbn,   high: isbn },
      ],
    }
  }, [wordCount, formatting, cover, marketing, includeISBN])

  return (
    <div className={styles.toolBody}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Word Count <span className={styles.value}>{wordCount.toLocaleString()}</span>
        </label>
        <input type="range" min={10000} max={200000} step={5000}
          value={wordCount} onChange={e => setWordCount(+e.target.value)}
          className={styles.slider} />
        <div className={styles.sliderHints}><span>10k</span><span>200k</span></div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Formatting / Interior Design</label>
        <div className={styles.pills}>
          {(['diy','basic','premium'] as FormatKey[]).map(k => (
            <button key={k} className={`${styles.pill} ${formatting === k ? styles.pillActive : ''}`}
              onClick={() => setFormatting(k)}>
              {k === 'diy' ? 'DIY' : k === 'basic' ? 'Basic ($300–600)' : 'Premium ($800–1,500)'}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Cover Design</label>
        <div className={styles.pills}>
          {(['diy','template','custom'] as CoverKey[]).map(k => (
            <button key={k} className={`${styles.pill} ${cover === k ? styles.pillActive : ''}`}
              onClick={() => setCover(k)}>
              {k === 'diy' ? 'DIY' : k === 'template' ? 'Template ($50–200)' : 'Custom ($500–1,500)'}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Marketing Budget <span className={styles.value}>${marketing.toLocaleString()}</span>
        </label>
        <input type="range" min={0} max={5000} step={100}
          value={marketing} onChange={e => setMarketing(+e.target.value)}
          className={styles.slider} />
        <div className={styles.sliderHints}><span>$0</span><span>$5,000</span></div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.checkRow}>
          <input type="checkbox" checked={includeISBN} onChange={e => setISBN(e.target.checked)} />
          Include ISBN registration ($125)
        </label>
      </div>

      <div className={styles.result}>
        <p className={styles.resultLabel}>Estimated Total Cost</p>
        <p className={styles.resultValue}>${low.toLocaleString()} – ${high.toLocaleString()}</p>
        <div className={styles.breakdown}>
          {breakdown.filter(r => r.high > 0).map(r => (
            <div key={r.label} className={styles.breakdownRow}>
              <span>{r.label}</span>
              <span>{r.low === r.high ? `$${r.low.toLocaleString()}` : `$${r.low.toLocaleString()} – $${r.high.toLocaleString()}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
