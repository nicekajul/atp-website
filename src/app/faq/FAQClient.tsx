'use client'

import { useState } from 'react'
import { faqCategories, FAQItem } from '@/data/faqData'
import styles from './faq.module.css'

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className={styles.answer}>
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleCategories =
    activeCategory === 'all'
      ? faqCategories
      : faqCategories.filter(c => c.id === activeCategory)

  const totalCount = faqCategories.reduce((sum, c) => sum + c.items.length, 0)

  return (
    <div className={styles.faqBody}>
      {/* ── Category tabs ─────────────────────────────────── */}
      <nav className={styles.tabs} aria-label="Filter by category">
        <button
          className={`${styles.tab} ${activeCategory === 'all' ? styles.tabActive : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All <span className={styles.tabCount}>{totalCount}</span>
        </button>
        {faqCategories.map(cat => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeCategory === cat.id ? styles.tabActive : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span aria-hidden="true">{cat.icon}</span>
            {cat.label}
            <span className={styles.tabCount}>{cat.items.length}</span>
          </button>
        ))}
      </nav>

      {/* ── FAQ sections ──────────────────────────────────── */}
      <div className={styles.sections}>
        {visibleCategories.map(cat => (
          <section key={cat.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon} aria-hidden="true">{cat.icon}</span>
              <h2 className={styles.sectionTitle}>{cat.label}</h2>
              <span className={styles.sectionCount}>{cat.items.length} questions</span>
            </div>
            <div className={styles.accordion}>
              {cat.items.map((item, i) => (
                <AccordionItem key={i} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
