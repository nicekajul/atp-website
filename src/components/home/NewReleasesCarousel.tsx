'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import BookCard from '@/components/books/BookCard'
import { SanityBook } from '@/sanity/types'
import styles from './NewReleasesCarousel.module.css'

interface Props {
  books: SanityBook[]
  perPage?: number
}

export default function NewReleasesCarousel({ books, perPage = 5 }: Props) {
  const [page, setPage] = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const totalPages = Math.ceil(books.length / perPage)

  const goTo = useCallback((next: number) => {
    setVisible(false)
    setTimeout(() => {
      setPage(next)
      setVisible(true)
    }, 300)
  }, [])

  const advance = useCallback(() => {
    goTo((page + 1) % totalPages)
  }, [goTo, page, totalPages])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, 5000)
  }, [advance])

  useEffect(() => {
    if (totalPages <= 1) return
    timerRef.current = setInterval(advance, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [advance, totalPages])

  const handlePrev = () => {
    resetTimer()
    goTo((page - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    resetTimer()
    goTo((page + 1) % totalPages)
  }

  const handleDot = (i: number) => {
    resetTimer()
    goTo(i)
  }

  const slice = books.slice(page * perPage, page * perPage + perPage)

  return (
    <div className={styles.root}>
      <div
        className={[styles.grid, visible ? styles.visible : styles.hidden].join(' ')}
        style={{ '--per-page': perPage } as React.CSSProperties}
      >
        {slice.map(book => (
          <div key={book.slug} className={styles.bookWrapper}>
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.controls}>
          <button className={styles.arrow} onClick={handlePrev} aria-label="Previous">
            &#8592;
          </button>

          <div className={styles.dots}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={[styles.dot, i === page ? styles.dotActive : ''].join(' ')}
                onClick={() => handleDot(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button className={styles.arrow} onClick={handleNext} aria-label="Next">
            &#8594;
          </button>
        </div>
      )}
    </div>
  )
}
