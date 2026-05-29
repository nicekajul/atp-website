import React from 'react'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import RevealItem from '@/components/ui/RevealItem'
import { getFeaturedTestimonials } from '@/data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials(3)

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Author Success"
          heading="Trusted by the Best"
          subheading="Don't just take our word for it. Hear from authors who have partnered with us to bring their stories to life."
          align="center"
          theme="dark"
        />

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <RevealItem key={t.id} delay={i * 150}>
              <div className={styles.card}>
                <div className={styles.stars}>
                  {[...Array(t.rating)].map((_, idx) => (
                    <span key={idx} className={styles.star}>★</span>
                  ))}
                </div>
                <blockquote className={styles.quote}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className={styles.authorArea}>
                  <div className={styles.avatar}>
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className={styles.avatarImg} />
                    ) : t.bookSlug ? (
                      <div className={styles.bookThumb} title={`Author of ${t.bookTitle}`}>
                        <span className={styles.bookLetter}>{t.bookTitle?.charAt(0)}</span>
                      </div>
                    ) : (
                      <span className={styles.initials}>{t.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className={styles.authorInfo}>
                    <cite className={styles.name}>{t.name}</cite>
                    <span className={styles.title}>{t.title}</span>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>

        <div className={styles.footerRow}>
          <Button href="https://g.page/r/CQwn5g_P2kgPEAE/review" variant="ghost" size="lg" className={styles.viewMoreBtn}>
            View More Reviews &rarr;
          </Button>
        </div>
      </Container>
    </section>
  )
}
