'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SanityBook, getCoverUrl } from '@/sanity/types'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import BookCard from '@/components/books/BookCard'
import PageCTA from '@/components/shared/PageCTA'
import styles from './BookDetail.module.css'

interface BookDetailProps {
  book: SanityBook
  relatedBooks: SanityBook[]
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  )
  return match?.[1] ?? null
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className={[styles.star, rating >= n ? styles.starFilled : rating >= n - 0.5 ? styles.starHalf : styles.starEmpty].join(' ')} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1l1.854 3.756 4.146.602-3 2.924.708 4.126L8 10.5l-3.708 1.908L5 8.282 2 5.358l4.146-.602L8 1z" />
        </svg>
      ))}
    </span>
  )
}

export default function BookDetail({ book, relatedBooks }: BookDetailProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>(book.formats?.[0] ?? 'Paperback')
  const [wishlisted, setWishlisted] = useState(false)
  const [imgError, setImgError] = useState(false)
  const coverUrl = getCoverUrl(book.isbn, book.amazonUrl, book.coverUrl)

  const publishedDate = book.publishedDate
    ? new Date(book.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : '—'

  const fmt = (n?: number | string) => n != null ? `$${Number(n).toFixed(2)}` : null
  const formatPrices: Record<string, string | null> = {
    Paperback:  fmt(book.price),
    Hardcover:  fmt(book.hardcoverPrice),
    eBook:      fmt(book.ebookPrice),
    Audiobook:  fmt(book.audiobookPrice),
  }

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>

            {/* Book cover */}
            <div className={styles.coverCol}>
              <div className={styles.coverShell}>
                {coverUrl && !imgError ? (
                  <div className={styles.coverImgWrapper}>
                    <Image
                      src={coverUrl}
                      alt={`Cover of ${book.title}`}
                      fill
                      sizes="(max-width: 768px) 80vw, 300px"
                      quality={100}
                      className={styles.coverImg}
                      onError={() => setImgError(true)}
                    />
                  </div>
                ) : (
                  <div className={styles.coverBook}>
                    <div className={styles.coverSpine} />
                    <div className={styles.coverFace}>
                      <span className={styles.coverOrnament}>✦</span>
                      <p className={styles.coverTitle}>{book.title}</p>
                      <div className={styles.coverDivider} />
                      <p className={styles.coverAuthor}>{book.author}</p>
                      <div className={styles.coverGenre}>{book.genre}</div>
                    </div>
                  </div>
                )}
                {book.isNewRelease && (
                  <div className={styles.newBadge}>New Release</div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className={styles.infoCol}>
              <div className={styles.genreTags}>
                {book.genres?.map(g => (
                  <Link key={g} href={`/bookstore?genre=${encodeURIComponent(g)}`} className={styles.genreTag}>
                    {g}
                  </Link>
                ))}
              </div>

              <h1 className={styles.title}>{book.title}</h1>
              <p className={styles.author}>by <span>{book.author}</span></p>

              <div className={styles.ratingRow}>
                <StarRating rating={book.rating} />
                <span className={styles.ratingNum}>{book.rating}</span>
                <span className={styles.ratingCount}>({book.reviewCount} reviews)</span>
              </div>

              <p className={styles.shortDesc}>{book.shortDescription}</p>

              {/* Format selector */}
              <div className={styles.formatSection}>
                <p className={styles.formatLabel}>Format</p>
                <div className={styles.formatPills}>
                  {book.formats?.filter(f => formatPrices[f] != null).map(fmt => (
                    <button
                      key={fmt}
                      className={[styles.formatPill, selectedFormat === fmt ? styles.formatPillActive : ''].join(' ')}
                      onClick={() => setSelectedFormat(fmt)}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className={styles.purchaseRow}>
                <p className={styles.price}>{formatPrices[selectedFormat] ?? fmt(book.price)}</p>
                <div className={styles.actions}>
                  {book.amazonUrl ? (
                    <Button
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="lg"
                    >
                      Buy on Amazon
                    </Button>
                  ) : (
                    <Button href="/contact?intent=purchase" variant="primary" size="lg">
                      Get This Book
                    </Button>
                  )}
                  <button
                    className={[styles.wishlistBtn, wishlisted ? styles.wishlistBtnActive : ''].join(' ')}
                    onClick={() => setWishlisted(w => !w)}
                    aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {wishlisted ? 'Saved' : 'Wishlist'}
                  </button>
                </div>
              </div>

              {/* Quick specs */}
              <dl className={styles.quickSpecs}>
                <div className={styles.specItem}>
                  <dt>Pages</dt>
                  <dd>{book.pageCount}</dd>
                </div>
                <div className={styles.specItem}>
                  <dt>Published</dt>
                  <dd>{publishedDate}</dd>
                </div>
                <div className={styles.specItem}>
                  <dt>Publisher</dt>
                  <dd>Authors Tranquility Press</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className={styles.aboutSection}>
        <Container>
          <div className={styles.aboutGrid}>
            <div className={styles.descriptionCol}>
              <h2 className={styles.sectionHeading}>About this Book</h2>
              <p className={styles.description}>{book.description}</p>

              <blockquote className={styles.pullQuote}>
                <p>{book.shortDescription}</p>
              </blockquote>
            </div>

            <aside className={styles.detailsCol}>
              <h3 className={styles.detailsHeading}>Book Details</h3>
              <dl className={styles.detailsList}>
                <div className={styles.detailRow}>
                  <dt>Author</dt>
                  <dd>{book.author}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Publisher</dt>
                  <dd>Authors Tranquility Press</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Published</dt>
                  <dd>{publishedDate}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Pages</dt>
                  <dd>{book.pageCount}</dd>
                </div>
                {book.isbn && (
                  <div className={styles.detailRow}>
                    <dt>ISBN</dt>
                    <dd>{book.isbn}</dd>
                  </div>
                )}
                <div className={styles.detailRow}>
                  <dt>Genres</dt>
                  <dd>{book.genres?.join(', ')}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Formats</dt>
                  <dd>{book.formats?.join(', ')}</dd>
                </div>
                <div className={styles.detailRow}>
                  <dt>Rating</dt>
                  <dd>
                    <span className={styles.detailRating}>
                      <StarRating rating={book.rating} />
                      <span>{book.rating} / 5</span>
                    </span>
                  </dd>
                </div>
              </dl>

              <div className={styles.shareRow}>
                <p className={styles.shareLabel}>Share this book</p>
                <div className={styles.shareBtns}>
                  {['Twitter / X', 'Facebook', 'Copy Link'].map(s => (
                    <button key={s} className={styles.shareBtn}>{s}</button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Book Trailer ─────────────────────────────────────── */}
      {book.trailerUrl && (() => {
        const videoId = getYouTubeId(book.trailerUrl)
        if (!videoId) return null
        return (
          <section className={styles.trailerSection}>
            <Container>
              <h2 className={styles.sectionHeading}>Book Trailer</h2>
              <div className={styles.trailerWrapper}>
                <iframe
                  className={styles.trailerFrame}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${book.title} — Book Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Container>
          </section>
        )
      })()}

      {/* ── Related books ────────────────────────────────────── */}
      {relatedBooks.length > 0 && (
        <section className={styles.relatedSection}>
          <Container>
            <div className={styles.relatedHeader}>
              <h2 className={styles.sectionHeading}>More in {book.genres?.[0] ?? book.genre}</h2>
              <Link href="/bookstore" className={styles.viewAll}>Browse all books →</Link>
            </div>
            <div className={styles.relatedGrid}>
              {relatedBooks.map(b => <BookCard key={b.slug} book={b} />)}
            </div>
          </Container>
        </section>
      )}

      <PageCTA
        variant="reader"
        secondaryLabel="← Back to Bookstore"
        secondaryHref="/bookstore"
      />

    </div>
  )
}
