import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { allBooksQuery } from '@/sanity/queries'
import { SanityBook } from '@/sanity/types'
import Container from '@/components/layout/Container'
import BookstoreClient from '@/components/books/BookstoreClient'
import PageCTA from '@/components/shared/PageCTA'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'Browse the latest titles published by Author\'s Tranquility Press authors.',
}

export default async function BookstorePage() {
  const books: SanityBook[] = await client.fetch(allBooksQuery)

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.patternLayer} />
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>ATP Bookstore</span>
            <h1 className={styles.heroHeading}>
              Stories worth
              <span className={styles.heroHighlight}>reading.</span>
            </h1>
            <p className={styles.heroSub}>
              Discover captivating fiction, insightful memoirs, and actionable business guides, every title independently published by an ATP author.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{books.length}+</span>
                <span className={styles.heroStatLabel}>Titles available</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>10+</span>
                <span className={styles.heroStatLabel}>Genres</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>4.8★</span>
                <span className={styles.heroStatLabel}>Avg. rating</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Catalog ──────────────────────────────────────── */}
      <section className={styles.catalog}>
        <Container>
          <BookstoreClient books={books} />
        </Container>
      </section>

      <PageCTA
        variant="reader"
        primaryLabel="Start Your Publishing Journey"
        secondaryLabel="Back to Top ↑"
        secondaryHref="#"
      />

    </div>
  )
}
