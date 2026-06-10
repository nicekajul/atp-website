'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SanityBook, getCoverUrl } from '@/sanity/types'
import Badge from '@/components/ui/Badge'
import BookPreviewModal from './BookPreviewModal'
import styles from './BookCard.module.css'

interface BookCardProps {
  book: SanityBook
}

export default function BookCard({ book }: BookCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const coverUrl = getCoverUrl(book.isbn, book.amazonUrl, book.coverUrl)

  const handleQuickPreview = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPreviewOpen(true)
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <Link href={`/bookstore/${book.slug}`} className={styles.card}>
          <div className={styles.coverWrapper}>
            <div className={styles.coverInner}>
              {coverUrl && !imgError ? (
                <Image
                  src={coverUrl}
                  alt={`Cover of ${book.title}`}
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 20vw"
                  quality={100}
                  className={styles.coverImage}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className={styles.coverPlaceholder}>
                  <span className={styles.coverTitle}>{book.title}</span>
                  <span className={styles.coverAuthor}>{book.author}</span>
                </div>
              )}

              {book.isFeatured && (
                <div className={styles.featuredRibbon}>
                  <span>Featured</span>
                </div>
              )}

              {book.isNewRelease && (
                <div className={styles.badgeWrapper}>
                  <Badge variant="gold">New Release</Badge>
                </div>
              )}

              {/* Hover Overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayActions}>
                  <button
                    className={styles.quickPreviewBtn}
                    onClick={handleQuickPreview}
                  >
                    Quick Preview
                  </button>
                  <span className={styles.viewDetailsBtn}>
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.genre}>{book.genre}</div>
            <h3 className={styles.title}>{book.title}</h3>
            <p className={styles.author}>by {book.author}</p>

            <div className={styles.footer}>
              <div className={styles.price}>${Number(book.price).toFixed(2)}</div>
              <div className={styles.rating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingNum}>{book.rating}</span>
                <span className={styles.reviewCount}>({book.reviewCount})</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <BookPreviewModal
        book={book}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  )
}
