'use client'

import { useState } from 'react'
import styles from './docs.module.css'

const ENTRIES = [
  {
    commit: 'b642df9',
    title: 'Remove Marketing & PR service, align nav with marketing hub',
    items: [
      'Removed the marketing slug service entry from services.ts (no live route existed)',
      'Removed Marketing & PR from mobile nav list in nav.ts',
      'Removed Marketing & PR option from InlineLeadForm service dropdown',
      'Redirected "Need Marketing Help" hero button from /services/marketing → /marketing',
      "Removed 'marketing' slug from the Launch & Promotion category in marketing/page.tsx",
    ],
  },
  {
    commit: '4fc70af',
    title: 'Align Marketing & Distribution submenu with marketing hub categories',
    items: [
      'Restructured desktop mega menu Marketing & Distribution column to match /marketing page',
      'New groups: Foundation · Launch & Promotion · Media & Press · Content & Video · Credibility & Recognition · Premium Exposure',
      'Print Advertising moved: Premium Opportunities → Media & Press',
      'Book-to-Screen moved: Advanced Opportunities → Content & Video',
      'Book Reviews joined Book Awards under Credibility & Recognition',
    ],
  },
  {
    commit: '4d71514',
    title: 'Remove Marketing and Bookstore from main navbar',
    items: [
      'Removed standalone Marketing top-level nav item (covered by Services submenu)',
      'Removed Bookstore top-level nav item (Browse Bookstore button in nav CTA area already exists)',
    ],
  },
  {
    commit: '4fc70af',
    title: 'Add starting prices to marketing hub cards',
    items: [
      'Added optional startingPrice?: string field to Service interface',
      'Book Reviews: startingPrice = "From $899"',
      'Book-to-Screen: startingPrice = "From $999"',
      'getStartingPrice() in MarketingHub.tsx uses the override before falling back to packages[0].price',
    ],
  },
  {
    commit: 'c724b76',
    title: 'Speed dial FAB replaces floating CTA button',
    items: [
      'Replaced pill button with 56px gold circle trigger (+ rotates to × when open)',
      '4 icon-only action buttons expand upward with 55ms stagger: Find My Package · View Packages · Get in Touch · Browse Bookstore',
      'Each button shows a label tooltip to the left on hover',
      'Quiz panel (quiz → lead capture → recommendation) retained, triggered by first action',
      'Floating button (EbookPopup FAB) excluded from changes',
    ],
  },
  {
    commit: 'c724b76',
    title: 'Free Guide tab moved to left; close button color fixed',
    items: [
      'Side tab moved from right: 0 to left: 0 to avoid overlap with speed dial',
      'Border-radius, shadow direction, hover translateX, and slide animation all flipped for left-side position',
      'Arrow changed from ‹ to › (points right, indicating open direction)',
      'Close button: was white-on-white (invisible). Fixed to navy/slate on translucent bg',
    ],
  },
  {
    commit: 'c024ab4',
    title: 'Mega menu column headings enhanced',
    items: [
      '.megaColHeading color: var(--atp-muted) → var(--atp-navy)',
      'Font weight: 700 → 800',
      'Bottom border: 1px solid var(--atp-border) → 2px solid var(--atp-gold)',
    ],
  },
  {
    commit: '79d6a0e',
    title: 'Full FAQ page built',
    items: [
      'Created src/data/faqData.ts — 7 categories, 60+ Q&As from all service pages + new general sections',
      'FAQClient.tsx — category filter tabs + individual accordion items with animated chevron',
      'Hero with stats bar: 7 Categories · 60+ Questions · Free Consultation Available',
      '"Still have questions?" contact nudge section above PageCTA',
      'Fixed syntax error: apostrophe in single-quoted string on line 244',
    ],
  },
  {
    commit: '0fafcc7',
    title: 'Shimmer hover effects applied to all button variants',
    items: [
      'position: relative; overflow: hidden moved to base .btn class',
      '::after shimmer sweep added globally (white gradient, left-to-right, 0.55s ease)',
      'Hover lift increased: translateY(-1px) → translateY(-2px)',
      'primary: box-shadow 0 6px 28px rgba(201,168,76,0.5)',
      'secondary: box-shadow 0 6px 28px rgba(15,31,61,0.4)',
      'outline: fills navy + shadow on hover',
      'gold: fills gold + glow on hover',
      'ghost: shimmer suppressed (display: none on ::after) — subtle cream fill only',
    ],
  },
  {
    commit: '8426a30',
    title: 'Brand Assets section added to /docs; developer credit restored',
    items: [
      'Added Brand Assets section (section 11) with 4 downloadable logo files',
      'Each asset card shows preview on correct background + Download button',
      'Restored developer card in sidebar: Alreen Christian Jul R. Omang',
      'Restored footer developer credit',
    ],
  },
  {
    commit: 'ba43d45',
    title: 'Vercel Analytics and Speed Insights integrated',
    items: [
      'Installed @vercel/analytics and @vercel/speed-insights',
      '<Analytics /> and <SpeedInsights /> added to root layout.tsx',
      'Activates automatically on Vercel deployment — no extra config needed',
    ],
  },
]

export default function DocsChangelog({ sectionNumber }: { sectionNumber: number }) {
  const [open, setOpen] = useState(false)

  return (
    <section id="changelog" className={styles.section}>
      <button className={styles.changelogToggle} onClick={() => setOpen(o => !o)}>
        <h2 className={styles.sectionTitleInline}>{sectionNumber}. Changelog — June 2026</h2>
        <span className={`${styles.changelogChevron} ${open ? styles.changelogChevronOpen : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <>
          <p className={styles.changelogMeta}>All changes on branch <code className={styles.code}>master</code>, most recent first.</p>
          {[...ENTRIES].reverse().map(entry => (
            <div key={entry.commit + entry.title} className={styles.changeEntry}>
              <div className={styles.changeHeader}>
                <code className={styles.commitHash}>{entry.commit}</code>
                <h3 className={styles.changeTitle}>{entry.title}</h3>
              </div>
              <ul className={styles.changeList}>
                {entry.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </>
      )}
    </section>
  )
}
