'use client'

import React, { useState, useMemo } from 'react'
import BookGrid from './BookGrid'
import { SanityBook } from '@/sanity/types'
import styles from './BookstoreClient.module.css'

type FilterTab = 'all' | 'new' | 'featured'

interface BookstoreClientProps {
  books: SanityBook[]
}

export default function BookstoreClient({ books }: BookstoreClientProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const newCount      = useMemo(() => books.filter(b => b.isNewRelease).length, [books])
  const featuredCount = useMemo(() => books.filter(b => b.isFeatured).length,   [books])

  const filtered = useMemo(() => {
    let result = books

    if (activeTab === 'new')      result = result.filter(b => b.isNewRelease)
    if (activeTab === 'featured') result = result.filter(b => b.isFeatured)

    const q = searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter(
        b =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.genre.toLowerCase().includes(q)
      )
    }

    return result
  }, [books, activeTab, searchQuery])

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'all',      label: 'All Books',     count: books.length  },
    { id: 'new',      label: 'New Releases',  count: newCount      },
    { id: 'featured', label: 'Featured',      count: featuredCount },
  ]

  return (
    <div>
      <div className={styles.controls}>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span className={styles.tabCount}>{tab.count}</span>
            </button>
          ))}
        </div>

        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search by title, author or genre…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.resultCount}>
        Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'book' : 'books'}
        {searchQuery.trim() && <> for &ldquo;{searchQuery.trim()}&rdquo;</>}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>📚</div>
          <p>No books match your search. Try a different term or browse all books.</p>
          <button className={styles.clearBtn} onClick={() => { setSearchQuery(''); setActiveTab('all') }}>
            Clear filters
          </button>
        </div>
      ) : (
        <BookGrid books={filtered} />
      )}
    </div>
  )
}
