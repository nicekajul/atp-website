import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
// import ServiceProof from '@/components/services/ServiceProof'
import DecisionFriction from '@/components/ui/DecisionFriction'
import { Service } from '@/data/services'
import styles from './BookReviewsContent.module.css'

/* ── Why Book Reviews ──────────────────────────────────── */
const WHY_ITEMS = [
  {
    icon: '🔐',
    title: 'Independent Credibility',
    desc: 'Third-party editorial reviews carry far more weight with readers, agents, and booksellers than any author-written copy.',
  },
  {
    icon: '📬',
    title: 'Fully Managed Submission',
    desc: 'ATP coordinates the entire submission process — so you receive your review without navigating each platform\'s requirements.',
  },
  {
    icon: '📣',
    title: 'Marketing-Ready Assets',
    desc: 'Approved review quotes and excerpts can be used in press kits, on your website, and across all social media channels.',
  },
  {
    icon: '🏆',
    title: 'Industry Recognition',
    desc: 'Reviews from Kirkus, Publishers Weekly, and BlueInk are respected by literary agents, librarians, and book trade professionals worldwide.',
  },
]

/* ── Individual Review Packages ──────────────────────── */
interface ReviewPackage {
  id: string
  name: string
  icon: string
  price: string
  description: string
  turnaround: string
  features: string[]
  highlight?: boolean
  badge?: string
  accent: string
}

const REVIEWS: ReviewPackage[] = [
  {
    id: 'hollywood',
    name: 'Hollywood Book Review',
    icon: '🎬',
    accent: '#C0562B',
    price: '$1,599',
    description: 'Hollywood Book Review provides detailed, professional analyses designed to help authors attract both readers and industry attention. Their reviews are distributed across multiple channels and databases that serve bookstores, libraries, and book buyers.',
    turnaround: '4–6 weeks',
    features: [
      'A comprehensive 400–600 word professional review by an independent critic',
      'Star rating (when applicable)',
      'Listing on the Hollywood Book Review website',
      'ATP handles submission, coordination, and delivery of your final review copy',
    ],
  },
  {
    id: 'pacific',
    name: 'Pacific Book Review',
    icon: '🌊',
    accent: '#0D7A8A',
    price: '$1,599',
    description: 'Recognized by publishers and retailers, their reviews help authors establish a professional reputation and reach a wider readership.',
    turnaround: '6–8 weeks',
    features: [
      'A professional 400–600 word review highlighting your book’s strengths and audience appeal.',
      'Publication on the Pacific Book Review website ',
      'Optional star rating or feature eligibility (when applicable)',
      'ATP manages your submission, monitoring, and final delivery of the review',
    ],
  },
  {
    id: 'us-review',
    name: 'The US Review of Books',
    icon: '📚',
    accent: '#1B4B8A',
    price: '$1,699',
    description: 'The US Review of Books is known for insightful, fair, and well-articulated reviews that connect books with engaged readers. A review here adds professional credibility and visibility.',
    turnaround: '6–8 weeks',
    features: [
      'A 400–500-word written review by an assigned professional reviewer.',
      'Feature listing on The US Review of Books website.',
      'Excerpt permission for your own marketing use (per reviewer terms).',
      'ATP coordinates submission, tracks progress, and forwards the final review to you.'
    ],
  },
  {
    id: 'kirkus',
    name: 'Kirkus Review',
    icon: '⭐',
    accent: '#C9A84C',
    price: '$1,999',
    highlight: true,
    badge: 'Most Prestigious',
    description: 'A Kirkus review can significantly enhance your book’s reputation with booksellers, libraries, and literary professionals.',
    turnaround: '7–9 weeks',
    features: [
      'A 250–350-word editorial review by a Kirkus critic.',
      'PListing on the Kirkus Reviews website and possible inclusion in the magazine issue.',
      'Option to quote excerpts in your marketing materials (per their terms).',
      'ATP handles all logistics and provides the final review once published.',
    ],
  },
  {
    id: 'publishers-weekly',
    name: 'Publishers Weekly Review',
    icon: '📰',
    accent: '#8B1A1A',
    price: '$2,499',
    description: 'A review in PW can open doors to media coverage, bookstore consideration, and library interest, making it a valuable endorsement for authors seeking professional recognition.',
    turnaround: '8–10 weeks',
    features: [
      'A 300–400-word professional review by a Publishers Weekly reviewer.',
      'Publication on the Publishers Weekly website and possible inclusion in the magazine.',
      'Copy of the completed review provided to you once available.',
      'ATP handles the submission process, coordination, and final review delivery.',
    ],
  },
]

/* ── Amazon Verified Reviews tiers ──────────────────── */
const AMAZON_TIERS = [
  { count: '4–5 Reviews', price: '$899' },
  { count: '7–10 Reviews', price: '$1,099' },
  { count: '15–20 Reviews', price: '$2,599' },
  { count: '25–30 Reviews', price: '$2,999' },
]

/* ── Trifecta Bundle ─────────────────────────────────── */
const TRIFECTA = {
  sources: ['Kirkus Indie', 'Clarion by ForeWord', 'BlueInk Review'],
  price: '$3,499',
  description: 'A high-impact bundle of three professional reviews from the most reputable sources in the industry. Through this comprehensive package, Author’s Tranquility Press facilitates your book’s submission to Kirkus Review, Clarion Review (Foreword Magazine), and BlueInk Review, giving your book unparalleled exposure and credibility. ',
  turnaround: '10–12 weeks',
  deliverables: [
    'Three guaranteed reviews (Kirkus, Clarion, and BlueInk).',
    'Review publication on all three respective websites.',
    'Copies of all completed reviews delivered to you.',
    '100% hands-off process managed entirely by ATP.',
  ],
}

interface Props {
  service: Service
}

export default function BookReviewsContent({ service }: Props) {
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

      {/* ── Why Book Reviews ─────────────────────────────── */}
      <section className={styles.whySection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Book Reviews Matter</h2>
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

      {/* ── Review Packages ──────────────────────────────── */}
      <section className={styles.packagesSection}>
        <Container>
          <DecisionFriction customHeadline="Find the right review platform in 30 seconds" />
          <h2 className={styles.sectionHeading}>Review Packages</h2>
          <p className={styles.packagesSubhead}>
            Choose from individual professional reviews or our exclusive <strong>Trifecta Review package</strong> for maximum visibility across multiple platforms. 
          </p>

          <div className={styles.packagesGrid}>

            {/* Standard review cards (5 platforms) */}
            {REVIEWS.map((review) => (
              <Link
                key={review.id}
                href={`/contact?package=${encodeURIComponent(review.name)}`}
                className={[
                  styles.reviewCard,
                  review.highlight ? styles['reviewCard--highlight'] : '',
                ].filter(Boolean).join(' ')}
                style={{ '--card-accent': review.accent } as React.CSSProperties}
              >
                {review.highlight && (
                  <div className={styles.highlightRibbon}>★ {review.badge}</div>
                )}

                <div className={styles.iconWrapper}>
                  <span aria-hidden="true">{review.icon}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardBadges}>
                    <span className={styles.categoryBadge}>Editorial Review</span>
                    <span className={styles.turnaroundBadge}>⏱ {review.turnaround}</span>
                  </div>

                  <h3 className={styles.cardName}>{review.name}</h3>
                  <p className={styles.cardTagline}>Professional Book Review Platform</p>

                  <div className={styles.descWrapper}>
                    <p className={styles.cardDesc}>{review.description}</p>
                    <ul className={styles.hoverFeatures} aria-label={`${review.name} includes`}>
                      {review.features.map((f, fi) => (
                        <li key={fi} dangerouslySetInnerHTML={{ __html: f }} />
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardPricing}>
                      <span className={styles.pricingLabel}>Investment</span>
                      <span className={styles.pricingAmount}>{review.price}</span>
                    </div>
                    <span className={styles.requestLink}>Request Review &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Amazon Verified Reviews */}
            <Link
              href="/contact?package=Amazon+Verified+Reviews"
              className={[styles.reviewCard, styles.amazonCard].join(' ')}
              style={{ '--card-accent': '#E47911' } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                <span aria-hidden="true">🛒</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardBadges}>
                  <span className={styles.categoryBadge}>Verified Reviews</span>
                  <span className={styles.turnaroundBadge}>⏱ 11–12 weeks</span>
                </div>

                <h3 className={styles.cardName}>Amazon Verified Reviews</h3>
                <p className={styles.cardTagline}>Boost Your Amazon Social Proof</p>

                <div className={styles.descWrapper}>
                  <p className={styles.cardDesc}>
                    Enhance your book&apos;s credibility and boost your visibility on Amazon through genuine, verified reader feedback. These reviews help improve your book&apos;s algorithmic ranking and purchasing appeal.
                  </p>
                  <ul className={styles.hoverFeatures}>
                    {AMAZON_TIERS.map((tier, ti) => (
                      <li key={ti}>{tier.count} — {tier.price}</li>
                    ))}
                    <li>Monitoring and reporting of review progress</li>
                    <li>Final summary report of verified reviews once live</li>
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.cardPricing}>
                    <span className={styles.pricingLabel}>Starting at</span>
                    <span className={styles.pricingAmount}>$899</span>
                  </div>
                  <span className={styles.requestLink}>Request Review &rarr;</span>
                </div>
              </div>
            </Link>

          </div>
        </Container>
      </section>

      {/* ── Trifecta Bundle ──────────────────────────────── */}
      <section className={styles.trifectaSection}>
        <Container>
          <div className={styles.trifectaInner}>

            <div className={styles.trifectaMeta}>
              <span className={styles.trifectaBadge}>◆ Best Value Bundle</span>
              <h2 className={styles.trifectaTitle}>Trifecta Review Bundle</h2>
              <div className={styles.sourcePills}>
                {TRIFECTA.sources.map((source, si) => (
                  <span key={si} className={styles.sourcePill}>{source}</span>
                ))}
              </div>
              <p className={styles.trifectaDesc}>{TRIFECTA.description}</p>
              <div className={styles.trifectaPriceRow}>
                <span className={styles.trifectaPrice}>{TRIFECTA.price}</span>
                <span className={styles.trifectaTurnaround}>⏱ {TRIFECTA.turnaround}</span>
              </div>
            </div>

            <div className={styles.trifectaDeliverables}>
              <p className={styles.deliverablesHeading}>What&apos;s Included</p>
              <ul className={styles.deliverablesList}>
                {TRIFECTA.deliverables.map((item, di) => (
                  <li key={di} className={styles.deliverablesItem}>
                    <CheckIconLight />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact?package=Trifecta+Review+Bundle"
                variant="gold"
                size="lg"
                fullWidth
              >
                Get the Trifecta Bundle
              </Button>
            </div>

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
              Not sure which review is right for your book? Our team will help you choose.
            </p>
            <Button href="/contact?package=Book+Reviews" variant="primary" size="lg">
              Talk to a Publishing Specialist
            </Button>
          </div>
        </Container>
      </section>
    </article>
  )
}

function CheckIcon({ accent = '#C9A84C' }: { accent?: string }) {
  return (
    <svg className={styles.checkIcon} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill={`${accent}18`} />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIconLight() {
  return (
    <svg className={styles.checkIconLight} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.2)" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
