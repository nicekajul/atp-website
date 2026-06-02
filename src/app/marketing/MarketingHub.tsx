'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Service } from '@/data/services'
import styles from './marketing.module.css'

interface Category {
  id: string
  heading: string
  icon: string
  description: string
  slugs: string[]
}

interface Props {
  categories: Category[]
  servicesBySlug: Record<string, Service>
}

function getStartingPrice(service: Service): string {
  if (service.startingPrice) return service.startingPrice
  if (service.packages.length === 0) return 'Custom pricing'
  return `From ${service.packages[0].price}`
}

function ServiceTile({
  service,
  categoryLabel,
}: {
  service: Service
  categoryLabel: string
}) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.tile}>
      <div className={styles.tileTop}>
        <span className={styles.tileCat}>{categoryLabel}</span>
        <span className={styles.tileIcon} aria-hidden="true">{service.icon}</span>
      </div>
      <div className={styles.tileBody}>
        <span className={styles.tileTitle}>{service.title}</span>
        <span className={styles.tileTagline}>{service.tagline}</span>
      </div>
      <div className={styles.tileFooter}>
        <span className={styles.tilePrice}>{getStartingPrice(service)}</span>
        <span className={styles.tileArrow} aria-hidden="true">View →</span>
      </div>
    </Link>
  )
}

export default function MarketingHub({ categories, servicesBySlug }: Props) {
  const [active, setActive] = useState('all')

  const visibleCategories =
    active === 'all' ? categories : categories.filter(c => c.id === active)

  const tiles = visibleCategories.flatMap(cat =>
    cat.slugs
      .map(slug => servicesBySlug[slug])
      .filter(Boolean)
      .map(service => ({ service, categoryLabel: cat.heading }))
  )

  return (
    <>
      {/* Filter tabs */}
      <nav className={styles.catNav} aria-label="Filter by category">
        <div className={styles.catPills}>
          <button
            className={`${styles.catPill} ${active === 'all' ? styles.catPillActive : ''}`}
            onClick={() => setActive('all')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.catPill} ${active === cat.id ? styles.catPillActive : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.heading}
            </button>
          ))}
        </div>
      </nav>

      {/* Card grid */}
      <section className={styles.gridSection}>
        <div className={styles.tileGrid}>
          {tiles.map(({ service, categoryLabel }) => (
            <ServiceTile
              key={service.slug}
              service={service}
              categoryLabel={categoryLabel}
            />
          ))}
        </div>
      </section>
    </>
  )
}
