import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { client } from '@/sanity/lib/client'
import { featuredBooksQuery } from '@/sanity/queries'
import { SanityBook, getCoverUrl } from '@/sanity/types'
import { getFeaturedBooks } from '@/data/books'
import styles from './FeaturedBooks.module.css'

export default async function FeaturedBooks() {
  let featuredBooks: SanityBook[] = await client.fetch(featuredBooksQuery, { limit: 2 })

  if (featuredBooks.length === 0) {
    // Fall back to local data while Sanity is being populated
    featuredBooks = getFeaturedBooks(2).map(b => ({
      _id: b.slug,
      slug: b.slug,
      title: b.title,
      author: b.author,
      isbn: undefined,   // placeholder ISBNs — skip to show cover placeholder
      amazonUrl: undefined,
      genre: b.genre,
      genres: b.genres,
      price: parseFloat(b.price.replace('$', '')),
      rating: b.rating,
      reviewCount: b.reviewCount,
      isNewRelease: b.isNewRelease,
      isFeatured: b.isFeatured,
      shortDescription: b.shortDescription,
      description: b.description,
      publishedDate: b.publishedDate,
      pageCount: b.pageCount,
      formats: b.formats,
    }))
  }

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Author Spotlight"
          heading="Featured Releases"
          subheading="Discover the stories that are capturing readers' hearts and making waves in the literary world."
        />

        <div className={styles.grid}>
          {featuredBooks.map(book => {
            const coverUrl = getCoverUrl(book.isbn, book.amazonUrl, book.coverUrl)
            return (
              <div key={book.slug} className={styles.card}>
                <div className={styles.coverSide}>
                  {coverUrl ? (
                    <div className={styles.coverImgWrapper}>
                      <Image
                        src={coverUrl}
                        alt={`Cover of ${book.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 340px"
                        quality={100}
                        className={styles.coverImg}
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
                  <div className={styles.meta}>
                    <Badge variant="navy">{book.genre}</Badge>
                    {book.isNewRelease && <Badge variant="gold">New</Badge>}
                  </div>
                  <h3 className={styles.title}>{book.title}</h3>
                  <p className={styles.author}>By <span className={styles.authorName}>{book.author}</span></p>
                  <p className={styles.desc}>{book.shortDescription}</p>

                  <div className={styles.actions}>
                    <Button href={`/bookstore/${book.slug}`} variant="primary" size="md">
                      View Details
                    </Button>
                    <div className={styles.price}>${Number(book.price).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.footerRow}>
          <Button href="/bookstore" variant="outline" size="lg">
            View All Featured Books &rarr;
          </Button>
        </div>
      </Container>
    </section>
  )
}
