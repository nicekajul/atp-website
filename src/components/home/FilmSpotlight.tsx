import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import RevealItem from '@/components/ui/RevealItem'
import styles from './FilmSpotlight.module.css'

const TRAILER_URL = 'https://www.youtube.com/watch?v=o_FsyshXmmI'
const AMAZON_URL = 'https://www.primevideo.com/detail/0ON3IA7PF67AGZVAZ0XTK8Q6E3?_ssoLoop=1'

const filmJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: 'Cheer Dad',
  description: "Her father is her biggest fan. A feature film based on the book by Patrick Riccards, published by Author's Tranquility Press.",
  director: { '@type': 'Person', name: 'Joyce Licorish' },
  actor: [
    { '@type': 'Person', name: 'Tim Perez-Ross' },
    { '@type': 'Person', name: 'Joey Victoria Lezama' },
    { '@type': 'Person', name: 'Kat Nagar' },
    { '@type': 'Person', name: 'Megan Cleary' },
  ],
  trailer: { '@type': 'VideoObject', name: 'Cheer Dad — Official Trailer', url: TRAILER_URL },
  sameAs: [AMAZON_URL],
  image: '/cheer-dad-movie-poster.png',
}

export default function FilmSpotlight() {
  return (
    <section className={styles.section} aria-label="From manuscript to motion picture">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(filmJsonLd) }}
      />
      <Container>
        <RevealItem>
          <SectionHeader
            eyebrow="🎬 Author Success Story"
            heading="From Manuscript to Motion Picture"
            subheading="Publishing is just the beginning. See how one author's book, brought to life with Author's Tranquility Press, went on to become a feature film."
            align="center"
          />
        </RevealItem>

        <RevealItem delay={120}>
          <div className={styles.card}>
            <div className={styles.patternLayer} />

            <div className={styles.posterCol}>
              <Link
                href={TRAILER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.posterFrame}
                aria-label="Watch the Cheer Dad trailer on YouTube"
              >
                <Image
                  src="/cheer-dad-movie-poster.png"
                  alt="Cheer Dad movie poster — a film based on the book by Patrick Riccards, published by Author's Tranquility Press"
                  width={460}
                  height={616}
                  quality={100}
                  className={styles.posterImg}
                />
                <span className={styles.playOverlay} aria-hidden="true">
                  <span className={styles.playButton}>▶</span>
                </span>
              </Link>
            </div>

            <div className={styles.contentCol}>
              <div className={styles.badgeRow}>
                <Badge variant="gold">Now Streaming</Badge>
                <Badge variant="cream">Book &rarr; Film</Badge>
              </div>

              <h3 className={styles.title}>Cheer Dad</h3>
              <p className={styles.tagline}>One author&rsquo;s story became a feature film.</p>
              <p className={styles.credits}>
                A film by Joyce Licorish &middot; based on the book by Patrick Riccards
              </p>

              <div className={styles.divider} aria-hidden="true" />

              <p className={styles.published}>Published by Author&rsquo;s Tranquility Press</p>

              <div className={styles.actions}>
                <Button href={TRAILER_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                  ▶ Watch the Trailer
                </Button>
                <Button href={AMAZON_URL} target="_blank" rel="noopener noreferrer" variant="gold" size="lg">
                  🎥 Watch on Amazon Prime
                </Button>
              </div>
            </div>
          </div>
        </RevealItem>
      </Container>
    </section>
  )
}
