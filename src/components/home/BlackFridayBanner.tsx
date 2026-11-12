import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import BlackFridayTerms from '@/components/shared/BlackFridayTerms'
import { getServiceBySlug } from '@/data/services'
import {
  BLACK_FRIDAY,
  BLACK_FRIDAY_CONTACT_HREF,
  BLACK_FRIDAY_HREF,
  isBlackFridayActive,
  isBlackFridayPackage,
} from '@/data/promos'
import styles from './BlackFridayBanner.module.css'

// Placeholder design built in code until the Black Friday artwork is ready.
// Rendered on the server; the homepage revalidates every 60 s, so it drops off soon after the offer ends.

function formatValue(price: string): string {
  const amount = Number(price.replace(/[^0-9.]/g, ''))
  return amount ? `$${amount.toLocaleString('en-US')}` : price
}

export default function BlackFridayBanner() {
  if (!isBlackFridayActive()) return null

  const tiers = (getServiceBySlug(BLACK_FRIDAY.serviceSlug)?.packages ?? [])
    .filter((pkg) => isBlackFridayPackage(pkg.name))

  return (
    <section className={styles.section} aria-labelledby="black-friday-heading">
      <Container>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Black Friday Exclusive 2026</span>
            <h2 id="black-friday-heading" className={styles.heading}>
              Buy 1, Get 1 <span className={styles.free}>Free!</span>
            </h2>
            <p className={styles.tagline}>Same package. Double the value.</p>
            <p className={styles.dates}>November 12 to 27, 2026</p>
            <p className={styles.body}>
              Purchase an Execution Publishing Package or higher and receive a{' '}
              <strong>second publishing package of the exact same tier, absolutely free.</strong>{' '}
              Whether you&rsquo;re preparing your next book, developing a sequel, or bringing another
              manuscript to life, publish more without buying a second package.
            </p>
            <div className={styles.actions}>
              <Button href={BLACK_FRIDAY_CONTACT_HREF} variant="primary" size="lg">
                Claim the Offer &rarr;
              </Button>
              <Button href={`${BLACK_FRIDAY_HREF}#pricing`} variant="gold" size="lg">
                Compare Packages
              </Button>
            </div>
          </div>

          <div className={styles.tiersCol}>
            <p className={styles.tiersTitle}>Here&rsquo;s how it works</p>
            <ul className={styles.tiers}>
              {tiers.map((pkg) => (
                <li key={pkg.name} className={styles.tier}>
                  <div className={styles.tierBuy}>
                    <span className={styles.tierLabel}>Buy 1</span>
                    <span className={styles.tierName}>{pkg.name}</span>
                    <span className={styles.tierPrice}>{pkg.price}</span>
                  </div>
                  <span className={styles.plus} aria-hidden="true">+</span>
                  <div className={styles.tierGet}>
                    <span className={styles.tierLabel}>Get 1</span>
                    <span className={styles.tierName}>{pkg.name}</span>
                    <span className={styles.tierFree}>Free ({formatValue(pkg.price)} value)</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.slogan}>Two Books. One Investment. Twice the Publishing Opportunity.</p>
          </div>
        </div>

        <p className={styles.deadline}>
          Offer ends Black Friday, {BLACK_FRIDAY.endLabel} at 11:59 PM EST.
        </p>
        <p className={styles.terms}>{BLACK_FRIDAY.terms}</p>
        <BlackFridayTerms className={styles.termsDetails} />
      </Container>
    </section>
  )
}
