import { Metadata } from 'next'
import { services } from '@/data/services'
import Container from '@/components/layout/Container'
import PageCTA from '@/components/shared/PageCTA'
import MarketingHub from './MarketingHub'
import styles from './marketing.module.css'

export const metadata: Metadata = {
  title: 'Marketing Services | Authors Tranquility Press',
  description: 'Explore our full suite of book marketing services — from launch campaigns and media coverage to book trailers, award submissions, and premium exposure opportunities.',
}

const categories = [
  {
    id: 'foundation',
    heading: 'Foundation',
    icon: '🏗️',
    description: 'Build your author platform — the base every marketing effort relies on.',
    slugs: ['author-website', 'book-spark'],
  },
  {
    id: 'launch',
    heading: 'Launch & Promotion',
    icon: '🚀',
    description: 'Targeted campaigns that connect your book with the right readers.',
    slugs: ['social-media-advertising', 'digital-advertising'],
  },
  {
    id: 'media',
    heading: 'Media & Press',
    icon: '📰',
    description: 'Earn credible coverage in broadcast, digital, and print outlets.',
    slugs: ['press-release', 'media-coverage', 'print-advertising'],
  },
  {
    id: 'content',
    heading: 'Content & Video',
    icon: '🎬',
    description: 'Visual storytelling that extends your book\'s reach beyond the page.',
    slugs: ['book-trailers', 'book-to-screen'],
  },
  {
    id: 'credibility',
    heading: 'Credibility & Recognition',
    icon: '⭐',
    description: 'Independent reviews and award submissions that build author authority.',
    slugs: ['book-reviews', 'book-awards'],
  },
  {
    id: 'premium',
    heading: 'Premium Exposure',
    icon: '🌍',
    description: 'High-visibility opportunities that put your book on the world stage.',
    slugs: ['international-book-fairs', 'times-square-billboard'],
  },
]

export default function MarketingPage() {
  const servicesBySlug = Object.fromEntries(services.map(s => [s.slug, s]))

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.patternLayer} aria-hidden="true" />
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Marketing Services</span>
            <h1 className={styles.title}>
              Get Your Book{' '}
              <em className={styles.titleAccent}>Seen</em>
            </h1>
            <p className={styles.subtitle}>
              Publishing is only half the journey. From launch campaigns and media features
              to award submissions and premium placements — we handle the marketing so you
              can focus on writing.
            </p>
            <div className={styles.divider} />
          </div>
        </Container>
      </header>

      {/* ── Interactive hub (tabs + grid) ── */}
      <Container>
        <MarketingHub categories={categories} servicesBySlug={servicesBySlug} />
      </Container>

      <PageCTA
        variant="discover"
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/contact"
      />
    </div>
  )
}
