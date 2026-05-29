'use client'

import { useState } from 'react'
import styles from './tools.module.css'

export default function BlurbBuilder() {
  const [fields, setFields] = useState({
    protagonist: '',
    setting:     '',
    conflict:    '',
    stakes:      '',
    hook:        '',
  })
  const [copied, setCopied] = useState<number | null>(null)

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [k]: e.target.value }))

  const p = fields.protagonist || '[protagonist]'
  const s = fields.setting     || '[setting]'
  const c = fields.conflict    || '[conflict]'
  const st = fields.stakes     || '[stakes]'
  const h = fields.hook        || '[hook]'

  const blurbs = [
    `${h ? `${h}\n\n` : ''}In the heart of ${s}, ${p} has always played by the rules — until ${c} changes everything. Now, with ${st}, they must choose between the life they've always known and the truth they can no longer ignore.\n\nPerfect for fans of edge-of-your-seat storytelling, this unforgettable debut will keep you turning pages long after midnight.`,

    `${p} never expected ${c}. But in ${s}, nothing is ever what it seems.\n\nWhen the truth finally surfaces, the cost is higher than anyone imagined: ${st}. With time running out and nowhere to turn, one decision will change everything.\n\n${h ? `${h} — ` : ''}A gripping story of courage, betrayal, and what we risk for the ones we love.`,

    `What would you sacrifice to survive?\n\nFor ${p}, ${c} wasn't a question of if — it was a question of when. Set against the vivid backdrop of ${s}, this story of ${st} is a searing exploration of identity, resilience, and the choices that define us.\n\n${h ? `${h}. ` : ''}Readers of literary fiction and upmarket drama will find themselves utterly absorbed.`,
  ]

  const copy = (i: number) => {
    navigator.clipboard.writeText(blurbs[i]).catch(() => {})
    setCopied(i)
    setTimeout(() => setCopied(null), 2500)
  }

  return (
    <div className={styles.toolBody}>
      <div className={styles.row2}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Protagonist</label>
          <input type="text" value={fields.protagonist} onChange={set('protagonist')}
            placeholder="A grieving detective, a young queen, a reluctant hero…"
            className={styles.textInput} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Setting</label>
          <input type="text" value={fields.setting} onChange={set('setting')}
            placeholder="1920s Paris, a remote Scottish island, a dystopian city…"
            className={styles.textInput} />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Central Conflict</label>
        <input type="text" value={fields.conflict} onChange={set('conflict')}
          placeholder="she discovers her mentor is the killer she's been hunting"
          className={styles.textInput} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Stakes</label>
        <input type="text" value={fields.stakes} onChange={set('stakes')}
          placeholder="millions of lives hang in the balance, her family's survival, the truth that could destroy a nation"
          className={styles.textInput} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Opening Hook (optional)</label>
        <input type="text" value={fields.hook} onChange={set('hook')}
          placeholder="Some secrets were never meant to surface"
          className={styles.textInput} />
      </div>

      <div className={styles.blurbList}>
        {blurbs.map((blurb, i) => (
          <div key={i} className={styles.blurbCard}>
            <div className={styles.blurbHeader}>
              <span className={styles.blurbVariant}>Variation {i + 1}</span>
              <button className={styles.copyBtn} onClick={() => copy(i)}>
                {copied === i ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <p className={styles.blurbText}>{blurb}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
