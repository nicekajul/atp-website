import { Metadata } from 'next'
import Container from '@/components/layout/Container'
import PageCTA from '@/components/shared/PageCTA'
import styles from './faq.module.css'

export const metadata: Metadata = {
  title: 'FAQ | Authors Tranquility Press',
  description: 'Frequently asked questions about publishing with Authors Tranquility Press — packages, timelines, royalties, and more.',
}

export default function FAQPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.patternLayer} />
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Got Questions?</span>
            <h1 className={styles.heroHeading}>
              Frequently Asked
              <span className={styles.heroHighlight}>Questions</span>
            </h1>
            <p className={styles.heroSub}>
              Everything you need to know about publishing with Authors Tranquility Press — packages, timelines, royalties, and more.
            </p>
          </div>
        </Container>
      </header>

      <section className={styles.content}>
        <Container>
          <div style={{ maxWidth: 800, margin: '0 auto', fontSize: 'var(--text-lg)', lineHeight: 1.8 }}>
            <p>This is a placeholder for the FAQ page content.</p>
          </div>
        </Container>
      </section>

      <PageCTA variant="discover" />
    </>
  )
}
