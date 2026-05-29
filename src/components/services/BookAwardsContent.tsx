import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './BookAwardsContent.module.css'

/* ── Why Awards ────────────────────────────────────────── */
const WHY_ITEMS = [
  {
    icon: '🏅',
    title: 'Verified Recognition',
    desc: 'Award seals and listings validate your work to readers, booksellers, and agents — signals that no amount of self-promotion can replicate.',
  },
  {
    icon: '📬',
    title: 'Fully Managed Process',
    desc: 'ATP handles submissions, deadlines, and entry requirements across award programs so you focus entirely on your writing.',
  },
  {
    icon: '📈',
    title: 'Increased Discoverability',
    desc: 'Award-winning and shortlisted books gain amplified visibility in editorial features, searches, and retailer highlights.',
  },
  {
    icon: '✍️',
    title: 'Lasting Credibility',
    desc: 'Award recognition strengthens your author profile and press materials long after the competition concludes.',
  },
]

/* ── Award Data Types ────────────────────────────────── */
type SectionContent = string | string[]

interface AwardSection {
  heading: string
  content: SectionContent
}

interface Award {
  id: string
  name: string
  icon: string
  price: string
  badge?: string
  description: string
  sections: AwardSection[]
  deadline: string
  highlight?: boolean
}

/* ── Award Packages ──────────────────────────────────── */
const AWARDS: Award[] = [
  {
    id: 'book-excellence',
    name: 'Book Excellence Award Registration',
    icon: '🏆',
    price: '$599',
    badge: 'Global Competition',
    description:
      'Elevate your book\'s credibility and visibility by entering the prestigious Book Excellence Awards, a global competition that recognizes outstanding books across a wide range of genres.',
    sections: [
      {
        heading: 'About the Award',
        content:
          'The Book Excellence Awards celebrate excellence in writing, publishing, and storytelling. Open to both self-published and traditionally published authors, this program provides valuable recognition and post-award support to help authors grow their platform.',
      },
      {
        heading: 'Why Enter?',
        content: [
          'Increased visibility and industry recognition',
          'Enhanced credibility with readers and retailers',
          'Access to marketing tools, templates, and promotional resources',
          'Opportunities for media exposure and industry attention',
        ],
      },
      {
        heading: 'Potential Outcomes',
        content: [
          'Increased book sales and discoverability',
          'Expanded media exposure',
          'Greater opportunities for partnerships and adaptations',
        ],
      },
    ],
    deadline: 'December 31 (Annual)',
  },
  {
    id: 'eric-hoffer',
    name: 'Eric Hoffer Book Award Registration',
    icon: '✍️',
    price: '$399',
    description:
      'Named after the renowned American philosopher Eric Hoffer, this award honors excellence in writing while celebrating the independent spirit of publishers and authors worldwide.',
    sections: [
      {
        heading: 'About the Award',
        content:
          'Named after the renowned American philosopher Eric Hoffer, this award honors excellence in writing while celebrating the independent spirit of publishers and authors worldwide.',
      },
      {
        heading: 'Award Highlights',
        content: [
          'Annual Grand Prize of $2,500',
          'Recognition across multiple categories and distinctions',
          'Additional honors: Montaigne Medal and First Horizon Award',
        ],
      },
      {
        heading: 'Eligibility',
        content: [
          'Books published or copyrighted within the last two (2) years',
          'Open to self-published, independent, and small press authors',
          'Includes limited print-run titles',
        ],
      },
      {
        heading: 'Why Enter?',
        content: [
          'Gain international recognition',
          'Strengthen your author brand',
          'Increase credibility within the publishing industry',
        ],
      },
    ],
    deadline: 'January 21 (Annual)',
  },
  {
    id: 'pacific-book',
    name: 'Pacific Book Award Registration',
    icon: '🌟',
    price: '$399',
    description:
      'The Pacific Book Awards highlight exceptional books and authors, providing valuable exposure and recognition across multiple genres.',
    sections: [
      {
        heading: 'About the Award',
        content:
          'The Pacific Book Awards highlight exceptional books and authors, providing valuable exposure and recognition across multiple genres.',
      },
      {
        heading: 'Benefits of Winning',
        content: [
          'Official Award Seal for use on covers and marketing materials',
          'Featured placement on Pacific Book Review',
          'National media and industry exposure',
          'Enhanced credibility with readers and buyers',
        ],
      },
      {
        heading: 'Why Awards Matter',
        content:
          'Winning or being shortlisted for a book award adds instant credibility to your work. Award seals signal quality to readers, helping your book stand out in a competitive market and potentially increasing sales.',
      },
    ],
    deadline: 'April 22 (Annual)',
  },
]

interface Props {
  service: Service
}

export default function BookAwardsContent({ service }: Props) {
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

      {/* ── Why Awards Matter ────────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Enter a Literary Award?</h2>
          <div className={styles.whyGrid}>
            {WHY_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Award Packages ───────────────────────────────── */}
      <section className={styles.packagesSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right award for your book in 30 seconds" />
          <h2 className={styles.sectionHeading}>Award Registration Packages</h2>
          <p className={styles.packagesSubhead}>
            ATP manages the full submission on your behalf — entry materials, requirements, and deadlines included.
          </p>

          <div className={styles.packagesGrid}>
            {AWARDS.map((award) => (
              <article
                key={award.id}
                className={[
                  styles.awardCard,
                  award.highlight ? styles['awardCard--highlight'] : '',
                ].filter(Boolean).join(' ')}
              >
                {award.badge && (
                  <div className={styles.cardRibbon}>{award.badge}</div>
                )}

                {/* Card header */}
                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">{award.icon}</span>
                  <h3 className={styles.cardName}>{award.name}</h3>
                  <div className={styles.cardPrice}>{award.price}</div>
                  <p className={styles.cardDesc}>{award.description}</p>
                </header>

                {/* Named content sections */}
                <div className={styles.cardSections}>
                  {award.sections.map((section, si) => (
                    <div key={si} className={styles.sectionBlock}>
                      <p className={styles.sectionHeadingSmall}>{section.heading}</p>
                      {Array.isArray(section.content) ? (
                        <ul className={styles.sectionList}>
                          {section.content.map((item, li) => (
                            <li key={li} className={styles.sectionListItem}>
                              <BulletIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={styles.sectionText}>{section.content}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Deadline */}
                <div className={styles.deadlineTag}>
                  📅 Submission Deadline: <strong>{award.deadline}</strong>
                </div>

                {/* CTA */}
                <footer className={styles.cardFooter}>
                  <Button
                    href={`/contact?package=${encodeURIComponent(award.name)}`}
                    variant={award.highlight ? 'primary' : 'outline'}
                    fullWidth
                    size="sm"
                  >
                    Register for This Award
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQs ─────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <Container>
            <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {service.faqs.map((faq, fi) => (
                <details key={fi} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── CTA Section ──────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <p className={styles.ctaNote}>
              Not sure which award suits your book? Our team will help you identify the best opportunities.
            </p>
            <Button href="/contact?package=Book+Awards+Registration" variant="primary" size="lg">
              Talk to a Publishing Specialist
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Social Proof ─────────────────────────────────── */}
      <ServiceProof serviceType={service.title} />

    </article>
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
