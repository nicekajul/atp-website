'use client'

import React, { useState, useMemo, useEffect } from 'react'
import BookGrid from './BookGrid'
import { SanityBook, getGenreTags, genreKey } from '@/sanity/types'
import styles from './BookstoreClient.module.css'

type FilterTab = 'all' | 'new' | 'featured'

interface BookstoreClientProps {
  books: SanityBook[]
}

function updateGenreInUrl(key: string, label: string) {
  const url = new URL(window.location.href)
  if (key) url.searchParams.set('genre', label)
  else url.searchParams.delete('genre')
  window.history.replaceState(null, '', url)
}

export default function BookstoreClient({ books }: BookstoreClientProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [genre, setGenre] = useState('')

  // One entry per genre (spelling variants merged), most common first
  const genreOptions = useMemo(() => {
    const byKey = new Map<string, { label: string; count: number; spellings: Map<string, number> }>()
    for (const book of books) {
      const seen = new Set<string>()
      for (const tag of getGenreTags(book)) {
        const key = genreKey(tag)
        const entry = byKey.get(key) ?? { label: tag, count: 0, spellings: new Map() }
        entry.spellings.set(tag, (entry.spellings.get(tag) ?? 0) + 1)
        if (!seen.has(key)) entry.count += 1
        seen.add(key)
        byKey.set(key, entry)
      }
    }
    return [...byKey.entries()]
      .map(([key, e]) => ({
        key,
        count: e.count,
        label: [...e.spellings.entries()].sort((a, b) => b[1] - a[1])[0][0],
      }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
  }, [books])

  // Arriving from a genre tag on a book page: /bookstore?genre=Memoir
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('genre')
    if (!wanted) return
    const key = genreKey(wanted.trim())
    if (genreOptions.some(o => o.key === key)) setGenre(key)
  }, [genreOptions])

  const selectGenre = (key: string) => {
    setGenre(key)
    updateGenreInUrl(key, genreOptions.find(o => o.key === key)?.label ?? '')
  }

  const newCount      = useMemo(() => books.filter(b => b.isNewRelease).length, [books])
  const featuredCount = useMemo(() => books.filter(b => b.isFeatured).length,   [books])

  const filtered = useMemo(() => {
    let result = books

    if (activeTab === 'new')      result = result.filter(b => b.isNewRelease)
    if (activeTab === 'featured') result = result.filter(b => b.isFeatured)

    if (genre) result = result.filter(b => getGenreTags(b).some(t => genreKey(t) === genre))

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
  }, [books, activeTab, searchQuery, genre])

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

        <select
          className={styles.genreSelect}
          value={genre}
          onChange={e => selectGenre(e.target.value)}
          aria-label="Filter by genre"
        >
          <option value="">All genres</option>
          {genreOptions.map(o => (
            <option key={o.key} value={o.key}>{o.label} ({o.count})</option>
          ))}
        </select>

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
          <button className={styles.clearBtn} onClick={() => { setSearchQuery(''); setActiveTab('all'); selectGenre('') }}>
            Clear filters
          </button>
        </div>
      ) : (
        <BookGrid books={filtered} />
      )}
    </div>
  )
}
