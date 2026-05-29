'use client'

import { useState } from 'react'
import styles from './tools.module.css'

const TEMPLATES: Record<string, string[]> = {
  thriller:  ['The {adj} {noun}', 'Before {keyword} Falls', '{keyword} in the Dark', 'The {noun} Protocol', 'When {keyword} Ends', 'The Last {adj} {noun}', 'Shadow of {keyword}', 'The {noun} Conspiracy'],
  romance:   ['Forever {keyword}', 'The {adj} {noun} of Love', '{keyword} and the {noun}', 'A {adj} Promise', 'Love in {keyword}', 'The {noun} Between Us', '{keyword} Ever After', 'One {adj} Night'],
  fantasy:   ['The {adj} Throne of {keyword}', '{keyword} Rising', 'Realm of the {adj} {noun}', 'The {noun} Chronicles', 'Born of {keyword}', 'The {adj} Mage', 'Siege of {keyword}', '{keyword} and the {noun} King'],
  mystery:   ['The {keyword} Murders', 'A {adj} Clue', 'Death in {keyword}', 'The {noun} of {keyword}', '{adj} Evidence', 'Who Killed {keyword}?', 'The {noun} Witness', 'Buried in {keyword}'],
  scifi:     ['Project {keyword}', 'Beyond the {adj} {noun}', '{keyword} Protocol', 'The {noun} Directive', 'Children of {keyword}', 'Code {adj}', 'The Last {noun} of {keyword}', '{keyword} Ascendant'],
  memoir:    ['Finding {keyword}', 'The {adj} Truth', '{keyword}: A Memoir', 'Learning to {keyword}', 'After {keyword}', 'The {noun} I Became', '{adj} Ground', 'Walking Through {keyword}'],
  selfhelp:  ['The {adj} Path to {keyword}', '{keyword} for Life', 'Mastering {keyword}', 'The {noun} Mindset', '{adj} Habits', 'Unlock Your {keyword}', 'The Power of {keyword}', 'Rise: {adj} {keyword}'],
  children:  ['{keyword} Finds a Friend', 'The {adj} Little {noun}', 'Where Does {keyword} Go?', '{keyword} and the Big {noun}', 'My {adj} {keyword}', 'The {noun} Who Could', 'Good Night, {keyword}', '{keyword}\'s Big Day'],
}

const ADJECTIVES = ['Hidden','Broken','Lost','Golden','Dark','Forgotten','Sacred','Final','Secret','Restless','Burning','Silent','Wild','Bright','Shadow','Ancient','Last','Red','Hollow','Twisted']
const NOUNS      = ['Crown','Heir','Storm','Code','Veil','Door','Path','Key','Throne','Mirror','Chain','Letter','Map','Clock','Garden','Tower','Name','Heart','Hand','Voice']

function fill(template: string, keyword: string): string {
  const adj  = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)]
  const kw   = keyword.trim() || 'Tomorrow'
  return template
    .replace('{adj}', adj)
    .replace('{noun}', noun)
    .replace('{keyword}', kw.charAt(0).toUpperCase() + kw.slice(1))
}

export default function TitleGenerator() {
  const [genre,   setGenre]   = useState('thriller')
  const [keyword, setKeyword] = useState('')
  const [titles,  setTitles]  = useState<string[]>([])
  const [copied,  setCopied]  = useState('')

  const generate = () => {
    const templates = TEMPLATES[genre]
    const shuffled  = [...templates].sort(() => Math.random() - 0.5).slice(0, 6)
    setTitles(shuffled.map(t => fill(t, keyword)))
    setCopied('')
  }

  const copy = (title: string) => {
    navigator.clipboard.writeText(title).catch(() => {})
    setCopied(title)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className={styles.toolBody}>
      <div className={styles.row2}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Genre</label>
          <select value={genre} onChange={e => setGenre(e.target.value)} className={styles.select}>
            {Object.keys(TEMPLATES).map(g => (
              <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>
            ))}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Key Word / Theme</label>
          <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)}
            placeholder="e.g. betrayal, ocean, London…"
            className={styles.textInput}
            onKeyDown={e => e.key === 'Enter' && generate()} />
        </div>
      </div>

      <button className={styles.generateBtn} onClick={generate}>Generate Titles</button>

      {titles.length > 0 && (
        <div className={styles.titleList}>
          {titles.map(title => (
            <div key={title} className={styles.titleRow}>
              <span className={styles.titleText}>{title}</span>
              <button className={styles.copyBtn} onClick={() => copy(title)}>
                {copied === title ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
