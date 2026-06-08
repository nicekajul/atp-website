import { Metadata } from 'next'
import Container from '@/components/layout/Container'
import PageCTA from '@/components/shared/PageCTA'
import FAQClient from './FAQClient'
import styles from './faq.module.css'

export const metadata: Metadata = {
  title: 'FAQ | Author\'s Tranquility Press',
  description: 'Frequently asked questions about publishing with Author\'s Tranquility Press, packages, timelines, royalties, rights, marketing, and more.',
}

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
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
              Everything you need to know about publishing, marketing, rights, and working with Author&apos;s Tranquility Press, answered in one place.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>7</span>
                <span className={styles.heroStatLabel}>Categories</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>60+</span>
                <span className={styles.heroStatLabel}>Questions Answered</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>Free</span>
                <span className={styles.heroStatLabel}>Consultation Available</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ── FAQ Body ─────────────────────────────────────── */}
      <section className={styles.content}>
        <Container>
          <FAQClient />
        </Container>
      </section>

      {/* ── Still have questions? ─────────────────────────── */}
      <section className={styles.contactNudge}>
        <Container>
          <div className={styles.nudgeInner}>
            <div className={styles.nudgeIcon}>💬</div>
            <div className={styles.nudgeText}>
              <h2 className={styles.nudgeHeading}>Still have questions?</h2>
              <p className={styles.nudgeSub}>
                Our publishing advisors are happy to answer anything not covered here.
                Book a free consultation, no pressure, no obligation.
              </p>
            </div>
            <a href="/contact" className={styles.nudgeBtn}>Talk to an Advisor →</a>
          </div>
        </Container>
      </section>

      <PageCTA variant="discover" />
    </>
  )
}
