'use client'

import { useState } from 'react'
import styles from './tools.module.css'

export default function QueryLetterBuilder() {
  const [fields, setFields] = useState({
    agentName:   '',
    title:       '',
    genre:       '',
    wordCount:   '',
    hook:        '',
    summary:     '',
    compTitles:  '',
    bio:         '',
  })
  const [copied, setCopied] = useState(false)

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [k]: e.target.value }))

  const letter = `Dear ${fields.agentName || '[Agent Name]'},

I am seeking representation for my ${fields.genre || '[Genre]'} novel, ${fields.title || '[Title]'}, complete at ${fields.wordCount || '[Word Count]'} words.

${fields.hook || '[Write a one-sentence hook that captures the core conflict and stakes of your story.]'}

${fields.summary || '[Provide a 2–3 paragraph synopsis covering the main character, central conflict, key plot points, and resolution stakes — without spoiling the ending.]'}

${fields.compTitles ? `${fields.title || 'My novel'} will appeal to readers of ${fields.compTitles}.` : '[Include 2 comparable published titles from the last 5 years, and briefly explain how your book fits alongside them.]'}

${fields.bio ? fields.bio : '[Write a brief professional bio. Include relevant credentials, previous publications, platform size, or personal connection to the subject matter. If unpublished, simply note this is your debut.]'}

Thank you for your time and consideration. I would be delighted to send sample pages or the full manuscript at your request.

Sincerely,
[Your Full Name]
[Your Email]
[Your Phone / Website]`

  const copy = () => {
    navigator.clipboard.writeText(letter).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className={styles.toolBody}>
      <div className={styles.row2}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Agent / Editor Name</label>
          <input type="text" value={fields.agentName} onChange={set('agentName')}
            placeholder="Ms. Jane Smith" className={styles.textInput} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Book Title</label>
          <input type="text" value={fields.title} onChange={set('title')}
            placeholder="The Silent Crown" className={styles.textInput} />
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Genre</label>
          <input type="text" value={fields.genre} onChange={set('genre')}
            placeholder="Historical Thriller" className={styles.textInput} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Word Count</label>
          <input type="text" value={fields.wordCount} onChange={set('wordCount')}
            placeholder="82,000" className={styles.textInput} />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>One-Sentence Hook</label>
        <input type="text" value={fields.hook} onChange={set('hook')}
          placeholder="When a disgraced detective uncovers a decades-old murder in her small town, she realises the killer never left."
          className={styles.textInput} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Plot Summary (2–3 paragraphs)</label>
        <textarea value={fields.summary} onChange={set('summary')} rows={5}
          placeholder="Describe your protagonist, central conflict, key turning points, and the stakes — without giving away the ending."
          className={styles.textarea} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Comparable Titles</label>
        <input type="text" value={fields.compTitles} onChange={set('compTitles')}
          placeholder="Gone Girl by Gillian Flynn and The Silent Patient by Alex Michaelides"
          className={styles.textInput} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Author Bio</label>
        <textarea value={fields.bio} onChange={set('bio')} rows={3}
          placeholder="Jane Smith is a former journalist with 10 years of investigative reporting experience. This is her debut novel."
          className={styles.textarea} />
      </div>

      <div className={styles.queryOutput}>
        <div className={styles.queryOutputHeader}>
          <span>Your Query Letter</span>
          <button className={styles.copyBtn} onClick={copy}>
            {copied ? '✓ Copied' : 'Copy to Clipboard'}
          </button>
        </div>
        <pre className={styles.queryText}>{letter}</pre>
      </div>
    </div>
  )
}
