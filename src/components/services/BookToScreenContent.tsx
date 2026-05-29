import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import { Service } from '@/data/services'
import styles from './BookToScreenContent.module.css'

/* ── Standard Service Cards ──────────────────────────────── */
interface ServiceCard {
  id: string
  icon: string
  name: string
  price: string
  subtitle: string
  sections: { heading: string; items: string[] }[]
  turnaround: string
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: 'hollywood-coverage',
    icon: '🎬',
    name: 'Hollywood Coverage Service',
    price: '$999',
    subtitle: 'Evaluate Your Book\'s Film & TV Potential',
    sections: [
      {
        heading: 'What You\'ll Receive',
        items: ['Detailed Synopsis', 'Critical Analysis', 'Industry Rating (PASS / CONSIDER / RECOMMEND)'],
      },
      {
        heading: 'Why Choose This Service',
        items: ['Professional Insight', 'Standard Evaluation Format', 'Actionable Feedback'],
      },
    ],
    turnaround: '4–8 weeks',
  },
  {
    id: 'hollywood-treatment',
    icon: '📝',
    name: 'Hollywood Treatment Service',
    price: '$3,999',
    subtitle: 'Turn Your Book into a Screen-Ready Concept',
    sections: [
      {
        heading: 'What\'s Included',
        items: ['Professionally written treatment', 'Structured story and character arcs', 'Cinematic storytelling approach'],
      },
      {
        heading: 'Why This Matters',
        items: ['Refines story for adaptation', 'Strengthens pitch materials', 'Improves clarity for industry professionals'],
      },
    ],
    turnaround: '8–12 weeks',
  },
  {
    id: 'authors-pitch',
    icon: '🤝',
    name: 'Author\'s Pitch Service',
    price: '$999',
    subtitle: 'Connect Directly with Industry Professionals',
    sections: [
      {
        heading: 'How It Works',
        items: ['One private pitch session', 'Tailored professional matching', 'Guided preparation'],
      },
      {
        heading: 'Why Choose',
        items: ['Direct Access', 'Targeted Opportunity', 'Career Growth'],
      },
    ],
    turnaround: '4–12 weeks',
  },
  {
    id: 'ipitch-campaign',
    icon: '📡',
    name: 'iPitch Campaign',
    price: '$1,999',
    subtitle: 'Showcase Your Story on a Professional Pitch Platform',
    sections: [
      {
        heading: 'What\'s Included',
        items: ['Pitch platform placement', 'Project positioning', 'Industry exposure'],
      },
      {
        heading: 'Why Choose',
        items: ['Continuous exposure', 'Scalable visibility', 'No live pitching required'],
      },
    ],
    turnaround: '~4 weeks + ongoing visibility',
  },
  {
    id: 'document-endorsement',
    icon: '📋',
    name: 'Document Endorsement Program',
    price: '$2,499',
    subtitle: 'Prepare Your Book for Agents & Industry Gatekeepers',
    sections: [
      {
        heading: 'What\'s Included',
        items: ['Query Letter', 'Target Research', 'Agent Tracking (up to 60)'],
      },
      {
        heading: 'Pitch Development',
        items: ['3 pitch opportunities', 'Zoom/phone or written submission'],
      },
      {
        heading: 'Additional',
        items: ['Press Release', 'Marketing support'],
      },
    ],
    turnaround: 'Varies by submission',
  },
  {
    id: 'book-to-movie',
    icon: '🎞️',
    name: 'Book-to-Movie Campaign',
    price: '$4,999',
    subtitle: 'Position Your Book for Film & Television Opportunities',
    sections: [
      {
        heading: 'What\'s Included',
        items: ['Synopsis, logline, elevator pitch', 'Query letter', 'Genre positioning'],
      },
      {
        heading: 'Adaptation Insights',
        items: ['Film/TV evaluation', 'PASS / CONSIDER / RECOMMEND'],
      },
      {
        heading: 'Outreach',
        items: ['Submission to production companies', 'Producer coordination'],
      },
    ],
    turnaround: '3–4 months',
  },
]

/* ── Premium Service ─────────────────────────────────────── */
const SCREENPLAY = {
  icon: '🏆',
  name: 'Screenplay Adaptation Service',
  price: '$9,999',
  subtitle: 'Turn Your Book into an Industry-Standard Screenplay',
  included: [
    'Full screenplay development',
    'Professional screenwriting',
    'Collaborative revisions',
    'Industry formatting',
    'Full ownership',
  ],
  genres: ['Fiction / Non-fiction', 'Fantasy / Sci-Fi', 'Thriller / Mystery', 'Historical / Drama'],
  whyChoose: [
    { label: 'Complete Adaptation Solution', desc: 'Everything from concept to final draft, fully managed.' },
    { label: 'Industry-Ready Output', desc: 'Formatted and structured to professional studio standards.' },
    { label: 'Strong Foundation', desc: 'A solid screenplay opens doors to film and television opportunities.' },
  ],
  turnaround: '8–10 months',
}

/* ── Benefits ────────────────────────────────────────────── */
const BENEFITS = [
  { icon: '🌍', title: 'Expand Your Story', desc: 'Take your narrative beyond the page and into new entertainment mediums.' },
  { icon: '📺', title: 'Reach New Audiences', desc: 'Film and TV audiences are among the largest and most diverse in the world.' },
  { icon: '💰', title: 'Increase Long-Term Value', desc: 'Adaptation rights can significantly increase the commercial value of your work.' },
  { icon: '🤝', title: 'Connect with Professionals', desc: 'Gain access to agents, producers, and industry insiders through structured services.' },
]

interface Props {
  service: Service
}

export default function BookToScreenContent({ service }: Props) {
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
            <p className={styles.heroSub}>{service.description}</p>
          </div>
        </Container>
      </header>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className={styles.intro}>
        <Container>
          <p className={styles.introBody}>{service.longDescription}</p>
        </Container>
      </section>

      {/* ── Standard Services ────────────────────────────── */}
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Our Book-to-Screen Services</h2>
          <p className={styles.sectionSubhead}>
            Choose one service or combine them for a comprehensive adaptation strategy.
          </p>
          <div className={styles.servicesGrid}>
            {SERVICE_CARDS.map((svc) => (
              <article key={svc.id} className={styles.serviceCard}>
                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">{svc.icon}</span>
                  <h3 className={styles.cardName}>{svc.name}</h3>
                  <div className={styles.cardPrice}>{svc.price}</div>
                  <p className={styles.cardSubtitle}>{svc.subtitle}</p>
                </header>

                <div className={styles.cardSections}>
                  {svc.sections.map((sec, si) => (
                    <div key={si} className={styles.sectionBlock}>
                      <p className={styles.sectionHeadingSmall}>{sec.heading}</p>
                      <ul className={styles.sectionList}>
                        {sec.items.map((item, ii) => (
                          <li key={ii} className={styles.sectionListItem}>
                            <CheckIcon />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className={styles.turnaroundTag}>
                  ⏱ Turnaround: <strong>{svc.turnaround}</strong>
                </div>

                <footer className={styles.cardFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent(svc.name)}`}
                    variant="outline"
                    fullWidth
                    size="sm"
                  >
                    Inquire About This Service
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Premium: Screenplay Adaptation ───────────────── */}
      <section className={styles.premiumSection}>
        <Container>
          <div className={styles.premiumLabel}>Premium Service</div>
          <h2 className={styles.sectionHeading}>Full Screenplay Adaptation</h2>
          <p className={styles.sectionSubhead}>
            The most comprehensive path from book to screen — a fully developed, industry-formatted screenplay.
          </p>

          <article className={styles.premiumCard}>
            <div className={styles.premiumRibbon}>⭐ Premium — Most Comprehensive</div>

            <header className={styles.premiumHeader}>
              <div className={styles.premiumHeaderLeft}>
                <span className={styles.cardIcon} aria-hidden="true">{SCREENPLAY.icon}</span>
                <h3 className={styles.premiumName}>{SCREENPLAY.name}</h3>
                <div className={styles.premiumPrice}>{SCREENPLAY.price}</div>
                <p className={styles.cardSubtitle}>{SCREENPLAY.subtitle}</p>
              </div>
              <div className={styles.premiumMeta}>
                <div className={styles.premiumMetaItem}>
                  <p className={styles.sectionHeadingSmall}>Turnaround</p>
                  <p className={styles.premiumMetaValue}>{SCREENPLAY.turnaround}</p>
                </div>
                <div className={styles.premiumMetaItem}>
                  <p className={styles.sectionHeadingSmall}>Supported Genres</p>
                  <ul className={styles.genreList}>
                    {SCREENPLAY.genres.map((g, gi) => (
                      <li key={gi} className={styles.genreItem}>
                        <BulletIcon />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </header>

            <div className={styles.premiumBody}>
              <div className={styles.premiumCol}>
                <p className={styles.sectionHeadingSmall}>What&apos;s Included</p>
                <ul className={styles.sectionList}>
                  {SCREENPLAY.included.map((item, i) => (
                    <li key={i} className={styles.sectionListItem}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.premiumCol}>
                <p className={styles.sectionHeadingSmall}>Why Choose This Service</p>
                <div className={styles.whyList}>
                  {SCREENPLAY.whyChoose.map((w, wi) => (
                    <div key={wi} className={styles.whyItem}>
                      <p className={styles.whyItemLabel}>{w.label}</p>
                      <p className={styles.whyItemDesc}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <footer className={styles.premiumFooter}>
              <Button
                href="/contact?package=Screenplay+Adaptation+Service"
                variant="primary"
                size="lg"
              >
                Inquire About Screenplay Adaptation
              </Button>
            </footer>
          </article>
        </Container>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Explore Book-to-Screen Opportunities?</h2>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((b, bi) => (
              <div key={bi} className={styles.benefitCard}>
                <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                <div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <Container>
          <div className={styles.finalCtaInner}>
            <h2 className={styles.finalCtaTitle}>
              Start Your Book-to-Screen Journey
            </h2>
            <p className={styles.finalCtaBody}>
              Our team will guide you through the right path based on your book&apos;s potential
              and your goals for adaptation.
            </p>
            <Button
              href="/contact?package=Book-to-Screen+Services"
              variant="gold"
              size="lg"
            >
              Consult With Our Team
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Social Proof ─────────────────────────────────── */}
      <ServiceProof serviceType={service.title} />

    </article>
  )
}

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.1)" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BulletIcon() {
  return (
    <svg className={styles.bulletIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="rgba(201,168,76,0.1)" />
      <path d="M4 7L6.2 9.2L10 4.8" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
