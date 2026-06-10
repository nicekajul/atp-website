'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SanityBook, getCoverUrl } from '@/sanity/types'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import styles from './BookPreviewModal.module.css'

interface BookPreviewModalProps {
  book: SanityBook
  isOpen: boolean
  onClose: () => void
}

export default function BookPreviewModal({ book, isOpen, onClose }: BookPreviewModalProps) {
  const [imgError, setImgError] = useState(false)
  const coverUrl = getCoverUrl(book.isbn, book.amazonUrl, book.coverUrl)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.grid}>
          <div className={styles.coverSide}>
            {coverUrl && !imgError ? (
              <div className={styles.coverImageWrapper}>
                <Image
                  src={coverUrl}
                  alt={`Cover of ${book.title}`}
                  fill
                  sizes="200px"
                  quality={100}
                  className={styles.coverImage}
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className={styles.coverPlaceholder}>
                <span className={styles.coverTitle}>{book.title}</span>
                <span className={styles.coverAuthor}>{book.author}</span>
              </div>
            )}
          </div>

          <div className={styles.contentSide}>
            <div className={styles.header}>
              <div className={styles.meta}>
                <Badge variant="navy">{book.genre}</Badge>
                {book.isNewRelease && <Badge variant="gold">New Release</Badge>}
              </div>

              <div className={styles.rating}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>({book.rating})</span>
              </div>
            </div>

            <h2 className={styles.title}>{book.title}</h2>
            <p className={styles.author}>by {book.author}</p>

            <div className={styles.description}>
              <p>{book.shortDescription || book.description}</p>
            </div>

            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Format</span>
                <span className={styles.specValue}>{book.formats?.join(', ') ?? '—'}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Published</span>
                <span className={styles.specValue}>Authors Tranquility Press</span>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.priceRow}>
                <div className={styles.price}>${Number(book.price).toFixed(2)}</div>
                <button className={styles.wishlistBtn} aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0z"></path>
                  </svg>
                  <span>Wishlist</span>
                </button>
              </div>

              <div className={styles.actions}>
                <Button href={`/bookstore/${book.slug}`} variant="primary" size="lg" fullWidth>
                  View Full Details
                </Button>
                <Button href="/bookstore" variant="outline" size="lg" fullWidth>
                  Go to Bookstore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
