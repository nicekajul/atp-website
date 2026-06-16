import React from 'react'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import styles from './PromoBanner.module.css'

export default function PromoBanner() {
  return (
    <section className={styles.section} aria-label="Father's Day promotion">

      {/* Blurred background */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/Fathers Day Promo - 6-30-2026.webp"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className={styles.bgImage}
          priority
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Two-column grid */}
      <Container>
        <div className={styles.grid}>

          {/* Left — promo image */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/Fathers Day Promo - 6-30-2026.webp"
                alt="Father's Day Special — 20% off Publishing Packages. Use code DAD20. Ends June 30."
                width={720}
                height={180}
                quality={100}
                className={styles.promoImage}
                priority
              />
            </div>
          </div>

          {/* Right — CTA */}
          <div className={styles.ctaCol}>
            <span className={styles.badge}>Limited-Time Offer</span>
            <h2 className={styles.heading}>
              Dad&rsquo;s Story<br />Deserves to Be Told
            </h2>
            <p className={styles.body}>
              Celebrate Father&rsquo;s Day by turning his story into a published book.
              Get <strong>20% off</strong> any Publishing Package — today through June 30.
            </p>
            <div className={styles.codeRow}>
              <span className={styles.codeLabel}>Use code</span>
              <span className={styles.code}>DAD20</span>
            </div>
            <div className={styles.actions}>
              <Button href="/contact?promo=DAD20" variant="primary" size="lg">
                Claim 20% Off &rarr;
              </Button>
              <Button href="/services/publishing-packages" variant="gold" size="lg">
                View Packages
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
