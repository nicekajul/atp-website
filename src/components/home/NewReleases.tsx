import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import NewReleasesCarousel from './NewReleasesCarousel'
import { client } from '@/sanity/lib/client'
import { newReleasesQuery } from '@/sanity/queries'
import { SanityBook } from '@/sanity/types'
import styles from './NewReleases.module.css'

export default async function NewReleases() {
  const newReleases: SanityBook[] = await client.fetch(newReleasesQuery, { limit: 10 })

  if (newReleases.length === 0) return null

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <SectionHeader
            eyebrow="Fresh off the press"
            heading="New Arrivals"
            align="left"
            className={styles.header}
          />
          <Link href="/bookstore" className={styles.viewAll}>
            View Bookstore &rarr;
          </Link>
        </div>

        <NewReleasesCarousel books={newReleases} perPage={5} />
      </Container>
    </section>
  )
}
