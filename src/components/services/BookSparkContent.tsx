import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './BookSparkContent.module.css'

/* ── Local data types ──────────────────────────────────── */
interface Tier {
  qty: string
  price: string
}

interface PrintProduct {
  name: string
  size: string
  icon: string
  tiers: Tier[]
  bundle?: true
  bundleDesc?: string
}

interface WhyItem {
  icon: string
  title: string
  desc: string
}

/* ── Page data ─────────────────────────────────────────── */
const PRODUCTS: PrintProduct[] = [
  {
    name: 'Bookmarks',
    size: '2″ × 8″',
    icon: '🔖',
    tiers: [
      { qty: '100 pcs', price: '$400' },
      { qty: '300 pcs', price: '$600' },
      { qty: '500 pcs', price: '$800' },
    ],
  },
  {
    name: 'Business Cards',
    size: '2″ × 3.5″',
    icon: '🪪',
    tiers: [
      { qty: '100 pcs', price: '$250' },
      { qty: '300 pcs', price: '$450' },
      { qty: '500 pcs', price: '$650' },
    ],
  },
  {
    name: 'Postcards',
    size: '4.25″ × 6″',
    icon: '✉️',
    tiers: [
      { qty: '100 pcs', price: '$300' },
      { qty: '300 pcs', price: '$500' },
      { qty: '500 pcs', price: '$700' },
    ],
  },
]

const BUNDLE: PrintProduct = {
  name: 'Promotional Materials Bundle',
  size: 'Bookmarks + Business Cards + Postcards',
  icon: '📦',
  bundle: true,
  bundleDesc: 'Includes bookmarks, business cards, and postcards.',
  tiers: [
    { qty: '100 of each', price: '$500' },
    { qty: '300 of each', price: '$800' },
    { qty: '500 of each', price: '$1,100' },
  ],
}

const WHY_ITEMS: WhyItem[] = [
  {
    icon: '💰',
    title: 'Cost-effective bundles',
    desc: 'Save more when you combine all three materials.',
  },
  {
    icon: '🎨',
    title: 'Fully customizable design',
    desc: 'Feature your book cover, tagline, synopsis, author photo, and contact details.',
  },
  {
    icon: '⭐',
    title: 'Professional print quality',
    desc: 'Printed on premium cardstock.',
  },
  {
    icon: '📣',
    title: 'Author-ready marketing tools',
    desc: 'Perfect for book signings, events, direct mail, and giveaways.',
  },
]

/* ── Reusable pricing table ────────────────────────────── */
function TierTable({ tiers, productName }: { tiers: Tier[]; productName: string }) {
  return (
    <table className={styles.tierTable} aria-label={`${productName} pricing`}>
      <thead>
        <tr>
          <th className={styles.tierTh}>Quantity</th>
          <th className={styles.tierTh}>Price</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((t, i) => (
          <tr key={i} className={styles.tierRow}>
            <td className={styles.tierQty}>{t.qty}</td>
            <td className={styles.tierPrice}>{t.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ── Page component ────────────────────────────────────── */
interface Props {
  service: Service
}

export default function BookSparkContent({ service }: Props) {
  return (
    <article className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <div className={styles.badgeWrapper}>
              <Badge variant="navy">{service.category}</Badge>
            </div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroTagline}>{service.tagline}</p>
          </div>
        </Container>
      </header>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className={styles.intro}>
        <Container>
          <p className={styles.introBody}>{service.longDescription}</p>
        </Container>
      </section>

      {/* ── Pricing Tables ───────────────────────────────── */}
      <section className={styles.pricingSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right promotional package in 30 seconds" />
          <h2 className={styles.sectionHeading}>Pricing</h2>

          {/* 3 individual product cards */}
          <div className={styles.productsGrid}>
            {PRODUCTS.map((product, idx) => (
              <div key={idx} className={styles.productCard}>
                <header className={styles.productCardHeader}>
                  <span className={styles.productIcon} aria-hidden="true">{product.icon}</span>
                  <div>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <span className={styles.productSize}>{product.size}</span>
                  </div>
                </header>
                <TierTable tiers={product.tiers} productName={product.name} />
                <footer className={styles.productCardFooter}>
                  <Button
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    Order {product.name}
                  </Button>
                </footer>
              </div>
            ))}
          </div>

          {/* Bundle card — full width, highlighted */}
          <div className={styles.bundleCard}>
            <div className={styles.bundleRibbon}>◆ Best Value</div>
            <div className={styles.bundleInner}>
              <div className={styles.bundleLeft}>
                <span className={styles.productIcon} aria-hidden="true">{BUNDLE.icon}</span>
                <div>
                  <h3 className={styles.bundleName}>{BUNDLE.name}</h3>
                  <p className={styles.bundleSize}>{BUNDLE.size}</p>
                  {BUNDLE.bundleDesc && (
                    <p className={styles.bundleDesc}>{BUNDLE.bundleDesc}</p>
                  )}
                </div>
              </div>
              <div className={styles.bundleRight}>
                <TierTable tiers={BUNDLE.tiers} productName={BUNDLE.name} />
                <Button
                  href={`/contact?product=${encodeURIComponent(BUNDLE.name)}`}
                  variant="primary"
                  fullWidth
                >
                  Order Bundle
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why Choose Book Spark ─────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Choose Book Spark</h2>
          <div className={styles.whyGrid}>
            {WHY_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Footer Note + CTA ────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTurnaround}>
              ⏱ Standard production and delivery: <strong>4–6 weeks</strong>
            </p>
            <Button href="/contact?product=Book+Spark" variant="primary" size="lg">
              Order Your Materials
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Social Proof ─────────────────────────────────── */}
      <ServiceProof serviceType={service.title} />

    </article>
  )
}
