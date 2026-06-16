import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './BookFairsContent.module.css'

/* ── Upcoming Events ─────────────────────────────────────── */
const UPCOMING_EVENTS = [
  {
    name: 'Manila International Book Fair',
    date: 'September 9–13, 2026',
    location: 'Manila, Philippines',
    flag: '\u{1F1F5}\u{1F1ED}',
  },
  {
    name: 'Frankfurter Buchmesse',
    date: 'October 7–11, 2026',
    location: 'Frankfurt, Germany',
    flag: '\u{1F1E9}\u{1F1EA}',
  },
]

/* ── Available Experiences ───────────────────────────────── */
const EXPERIENCES = [
  {
    icon: '\u{1F4D6}',
    title: 'Book Title Display',
    description:
      'Your book is prominently featured within our exhibit space, giving it visibility among readers and industry professionals.',
  },
  {
    icon: '✨',
    title: 'Literary Showcase',
    description:
      'A curated promotional setup designed to attract attention and encourage engagement at the booth through branded materials and book distribution.',
  },
  {
    icon: '✍️',
    title: 'Book Signing Experiences',
    description:
      'Create meaningful, memorable interactions with readers through our professionally managed book signing sessions—available during major events such as the London Book Fair and Frankfurter Buchmesse.',
  },
]

/* ── Signing Packages ────────────────────────────────────── */
interface SigningPackage {
  id: string
  name: string
  badge: string
  duration: string
  features: string[]
  idealFor: string
  highlight?: boolean
}

const SIGNING_PACKAGES: SigningPackage[] = [
  {
    id: 'launching-pad',
    name: 'Book Launching Pad',
    badge: 'Standard',
    duration: '1 Hour',
    features: [
      '1-hour book signing session with photo opportunities',
      '25 copies available for signing',
      'Short author interview (pre- and post-session)',
      'Social media promotion',
      'Event poster',
      'Curated promotional merchandise',
      'Post-event photo and video assets',
    ],
    idealFor:
      'Authors looking to establish a strong and polished international presence.',
  },
  {
    id: 'grand-signing',
    name: 'Grand Book Signing Pad',
    badge: 'Premium',
    duration: '2+ Hours',
    highlight: true,
    features: [
      '2+ hour book signing session with extended audience engagement',
      '40 copies available for signing',
      'Extended author interview (pre- and post-session)',
      'Social media promotion',
      'On-site promotional video display during the event',
      'Expanded promotional merchandise and branding materials',
      'Post-event photo and video assets',
    ],
    idealFor:
      'Authors who want to maximize visibility, audience interaction, and overall impact at major international book fairs.',
  },
]

/* ── Benefits ────────────────────────────────────────────── */
const BENEFITS = [
  { icon: '\u{1F30D}', text: 'Showcase your book to a global audience' },
  { icon: '⭐', text: 'Strengthen your author brand and credibility' },
  { icon: '\u{1F91D}', text: 'Connect with readers, publishers, and industry professionals' },
  { icon: '\u{1F3C6}', text: 'Be part of world-renowned literary events' },
]

interface Props {
  service: Service
}

export default function BookFairsContent({ service }: Props) {
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
            <p className={styles.heroSub}>
              Global exposure, meaningful connections, and lasting credibility for your book.
            </p>
          </div>
        </Container>
      </header>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className={styles.intro}>
        <Container>
          <div className={styles.introBody}>
            {service.longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Upcoming Events ──────────────────────────────── */}
      <section className={styles.eventsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Upcoming Events</h2>
          <div className={styles.eventsGrid}>
            {UPCOMING_EVENTS.map((event, idx) => (
              <div key={idx} className={styles.eventCard}>
                <div className={styles.eventCardHeader}>
                  <span className={styles.eventFlag} aria-hidden="true">{event.flag}</span>
                  <h3 className={styles.eventName}>{event.name}</h3>
                  <p className={styles.eventLocation}>{event.location}</p>
                </div>
                <div className={styles.eventCardBody}>
                  <div className={styles.eventDateBlock}>
                    <span className={styles.eventDateLabel}>Date</span>
                    <span className={styles.eventDate}>{event.date}</span>
                  </div>
                  <span className={styles.eventStatusBadge}>Upcoming</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Participation Options ─────────────────────────── */}
      <section className={styles.participationSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Participation Options</h2>

          <div className={styles.participationGrid}>

            {/* Company Participation — consultation, no fixed price */}
            <div className={styles.consultCard}>
              <div className={styles.consultCardHeader}>
                <span className={styles.consultIcon} aria-hidden="true">{'\u{1F91D}'}</span>
                <div>
                  <p className={styles.consultSubtitle}>A more immersive and engaging author experience</p>
                  <h3 className={styles.consultName}>Company Participation in Book Fairs</h3>
                </div>
              </div>
              <div className={styles.consultPriceNote}>
                <span className={styles.consultPriceLabel}>Pricing Varies</span>
                <span className={styles.consultPriceSub}>Based on event &amp; participation level</span>
              </div>
              <p className={styles.consultDesc}>
                For authors seeking a stronger presence, our company participation packages provide enhanced
                opportunities to connect with audiences and stand out during the event.
              </p>
              <p className={styles.consultDesc}>
                Pricing varies depending on the event, level of participation, and selected services. We
                recommend consulting with our team to determine the best approach based on your goals.
              </p>
              <div className={styles.consultFooter}>
                <Button
                  href="/contact?package=Company+Participation+Book+Fair"
                  variant="gold"
                  fullWidth
                >
                  Consult With Our Team
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Available Experiences ─────────────────────────── */}
      <section className={styles.experiencesSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Available Experiences</h2>
          <p className={styles.experiencesSubhead}>
            Each participation includes access to one or more of the following experience formats.
          </p>
          <div className={styles.experiencesGrid}>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className={styles.experienceCard}>
                <span className={styles.experienceIcon} aria-hidden="true">{exp.icon}</span>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <p className={styles.experienceDesc}>{exp.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Signing Packages ─────────────────────────────── */}
      <section className={styles.signingSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Book Signing Packages</h2>
          <p className={styles.signingSubhead}>
            Choose the signing experience that matches your presence goals at major international fairs.
          </p>
          <div className={styles.signingGrid}>
            {SIGNING_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className={[
                  styles.signingCard,
                  pkg.highlight ? styles['signingCard--premium'] : '',
                ].filter(Boolean).join(' ')}
              >
                <div className={styles.signingRibbon}>{pkg.badge}</div>

                <header className={styles.signingHeader}>
                  <div className={styles.signingDuration}>
                    <span>⏱</span> {pkg.duration}
                  </div>
                  <h3 className={styles.signingName}>{pkg.name}</h3>
                </header>

                <ul className={styles.signingFeatures}>
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className={styles.signingFeatureItem}>
                      <CheckIcon highlight={pkg.highlight} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.signingIdealFor}>
                  <span className={styles.idealForLabel}>Ideal for</span>
                  <p className={styles.idealForText}>{pkg.idealFor}</p>
                </div>

                <footer className={styles.signingFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.highlight ? 'primary' : 'outline'}
                    fullWidth
                  >
                    Book This Experience
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Participate in International Book Fairs?</h2>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((b, idx) => (
              <div key={idx} className={styles.benefitItem}>
                <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                <p className={styles.benefitText}>{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <Container>
          <div className={styles.finalCtaInner}>
            <h2 className={styles.finalCtaTitle}>Bring Your Book to the Global Stage</h2>
            <p className={styles.finalCtaBody}>
              Every author&apos;s journey is different. Our team will work with you to determine the most
              effective way to showcase your book at international events based on your goals, audience,
              and preferred level of participation.
            </p>
            <p className={styles.finalCtaNote}>
              Connect with us today to explore your options and secure your spot at upcoming book fairs.
            </p>
            <Button
              href="/contact?package=International+Book+Fairs"
              variant="gold"
              size="lg"
            >
              Get Started Today
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Social Proof ─────────────────────────────────── */}
      <ServiceProof serviceType={service.title} />

    </article>
  )
}

function CheckIcon({ highlight }: { highlight?: boolean }) {
  const stroke = highlight ? '#C9A84C' : '#C9A84C'
  return (
    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.1)" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
