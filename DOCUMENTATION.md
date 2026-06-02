# Author's Tranquility Press — Website Documentation

**Version:** Revamp (June 2026)
**Repository:** `nicekajul/atp-website` (GitHub)
**Production URL:** `https://atp-website-one.vercel.app` *(temporary — to be updated when domain is connected)*
**Target Domain:** `authorstranquilitypress.com`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Pages & Routes](#4-pages--routes)
5. [Services Catalog](#5-services-catalog)
6. [Key Components](#6-key-components)
7. [Data Layer](#7-data-layer)
8. [Forms & Integrations](#8-forms--integrations)
9. [Environment Variables](#9-environment-variables)
10. [Deployment](#10-deployment)
11. [Changelog — June 3, 2026](#11-changelog--june-3-2026)

---

## 1. Project Overview

Author's Tranquility Press (ATP) is a full-service self-publishing company. This website serves as the primary marketing and conversion platform for the business, enabling authors to:

- Discover and compare publishing service packages
- Take a guided quiz to find the right package
- Browse a curated bookstore of published ATP titles
- Access free author resources and tools
- Submit leads and book consultations
- Download a free Publishing Guide (email-gated)

The site is built as a modern, SEO-optimized Next.js application with server-side rendering, static generation, and a headless CMS (Sanity) for bookstore content.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules (scoped per component) |
| CMS | Sanity v3 (headless, for Bookstore) |
| Email | Resend API |
| Deployment | Vercel |
| Package Manager | npm |
| Version Control | Git / GitHub |

**Key dependencies:**
- `next` — framework with App Router, SSR, SSG
- `sanity` / `next-sanity` — headless CMS for bookstore
- `resend` — transactional email (lead forms, guide delivery)
- `@floating-ui/react-dom` — tooltip positioning (used in mega menu)

---

## 3. Project Structure

```
D:\ATP\Revamp\
├── public/                         # Static assets
│   ├── ATP-logo-light-1.png        # Full logo (light version, used in emails)
│   ├── ATP-logo-dark.png           # Full logo (dark version)
│   ├── ATP_Authors_Publishing_Guide.pdf         # Free guide download
│   └── ATP_Authors_Publishing_Guide_Page_1.jpg  # Guide cover image (popup)
│
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Homepage
│   │   ├── about/                  # About Us page
│   │   ├── faq/                    # FAQ page
│   │   ├── contact/                # Contact form page
│   │   ├── quiz/                   # Publishing package quiz
│   │   ├── bookstore/              # Bookstore listing + [slug] detail
│   │   ├── marketing/              # Marketing Services hub
│   │   ├── resources/              # Author resources & tools
│   │   ├── blog/                   # Blog (placeholder)
│   │   ├── services/               # Services overview
│   │   │   ├── [slug]/             # Dynamic service detail pages
│   │   │   ├── publishing-packages/
│   │   │   ├── audiobook/
│   │   │   ├── authors-tranquility-junior/
│   │   │   ├── ebook-conversion/
│   │   │   ├── book-illustration/
│   │   │   ├── author-website/
│   │   │   ├── book-spark/
│   │   │   ├── social-media-advertising/
│   │   │   ├── digital-advertising/
│   │   │   ├── press-release/
│   │   │   ├── media-coverage/
│   │   │   ├── book-trailers/
│   │   │   ├── book-reviews/
│   │   │   ├── book-awards/
│   │   │   ├── print-advertising/
│   │   │   ├── book-to-screen/
│   │   │   ├── international-book-fairs/
│   │   │   └── times-square-billboard/
│   │   ├── api/                    # API Routes
│   │   │   ├── contact/            # Contact form handler
│   │   │   ├── ebook-lead/         # Free guide lead capture + email
│   │   │   ├── quiz-lead/          # Quiz result lead capture
│   │   │   └── download-guide/     # HMAC-verified guide download
│   │   └── studio/                 # Sanity Studio (embedded)
│   │
│   ├── components/
│   │   ├── layout/                 # Header, Footer, Container, SiteShell
│   │   ├── home/                   # Homepage sections
│   │   ├── services/               # Service detail components
│   │   ├── pricing/                # PricingTable (compare + grid)
│   │   ├── books/                  # Bookstore components
│   │   ├── forms/                  # ContactForm, InlineLeadForm
│   │   ├── quiz/                   # PublishingQuiz, QuizResult
│   │   ├── tools/                  # Author resource tools
│   │   ├── shared/                 # Shared: FloatingCTA, EbookPopup, PageCTA, TrustBar
│   │   └── ui/                     # Button, Badge, SectionHeader, RevealItem
│   │
│   ├── data/                       # Static data files
│   │   ├── services.ts             # All service definitions + packages + FAQs
│   │   ├── nav.ts                  # Navigation structure (mega menu + mobile)
│   │   ├── faqData.ts              # FAQ categories and items (all pages)
│   │   ├── quizData.ts             # Quiz questions + recommendation logic
│   │   ├── books.ts                # Bookstore seed data
│   │   └── testimonials.ts         # Author testimonials
│   │
│   └── lib/
│       ├── email/
│       │   ├── template.ts         # HTML email template (header + footer with logo)
│       │   └── sheets.ts           # Google Sheets lead logging
│       └── formatPhone.ts          # US phone number formatter
│
├── next.config.ts                  # Next.js config (webpack aliases, ESLint bypass)
├── CLAUDE.md / AGENTS.md           # Project development configuration
└── DOCUMENTATION.md                # This file
```

---

## 4. Pages & Routes

### Public Pages

| Route | Page | Description |
|---|---|---|
| `/` | Homepage | Hero, services overview, how it works, testimonials, featured books, newsletter |
| `/about` | About Us | Company story, stats, values, team |
| `/services` | Services Overview | All services grouped by category |
| `/services/publishing-packages` | Publishing Packages | Flagship service with Compare Features table |
| `/services/[slug]` | Service Detail | Dynamic page for each service (uses `ServiceDetail` component) |
| `/marketing` | Marketing Hub | Tabbed hub for all marketing services |
| `/bookstore` | Bookstore | Sanity-powered book listing with filters |
| `/bookstore/[slug]` | Book Detail | Individual book page |
| `/quiz` | Package Quiz | Multi-step quiz with lead capture and package recommendation |
| `/faq` | FAQ | Categorized accordion FAQ with 60+ questions across 7 categories |
| `/contact` | Contact | Contact form with service selector |
| `/resources` | Resources | Author tools (royalty calc, cost calc, blurb builder, etc.) |
| `/blog` | Blog | Blog listing (placeholder) |

### API Routes

| Route | Method | Purpose |
|---|---|---|
| `/api/contact` | POST | Processes contact form; sends email via Resend |
| `/api/ebook-lead` | POST | Captures lead; sends free guide email with HMAC download token |
| `/api/quiz-lead` | POST | Captures quiz lead with package recommendation |
| `/api/download-guide` | GET | Verifies HMAC token; logs download to Google Sheets |

### CMS

| Route | Description |
|---|---|
| `/studio` | Embedded Sanity Studio (admin only) |

---

## 5. Services Catalog

All services are defined in `src/data/services.ts` as a typed `Service[]` array. Each service has: `slug`, `title`, `tagline`, `description`, `longDescription`, `icon`, `category`, `packages[]`, `faqs[]`, `turnaround`, `deliverables`, `startingPrice` (optional override).

### Publishing

| Slug | Title |
|---|---|
| `publishing-packages` | Publishing Packages *(flagship)* |
| `editorial-services` | Editorial Services |
| `book-design` | Book Design |
| `ghostwriting` | Ghostwriting |
| `audiobook` | Audiobook Production |
| `authors-tranquility-junior` | Author's Tranquility Junior *(children's books)* |
| `ebook-conversion` | eBook Conversion |
| `book-illustration` | Book Illustration |

### Marketing & Distribution

| Slug | Title | Category |
|---|---|---|
| `author-website` | Author Website | Foundation |
| `book-spark` | Book Spark | Foundation |
| `social-media-advertising` | Social Media Ads | Launch & Promotion |
| `digital-advertising` | Digital Advertising | Launch & Promotion |
| `press-release` | Press Release | Media & Press |
| `media-coverage` | Media Coverage | Media & Press |
| `print-advertising` | Print Advertising | Media & Press |
| `book-trailers` | Book Trailers | Content & Video |
| `book-to-screen` | Book-to-Screen Services | Content & Video |
| `book-reviews` | Book Reviews | Credibility & Recognition |
| `book-awards` | Book Awards | Credibility & Recognition |
| `international-book-fairs` | International Book Fairs | Premium Exposure |
| `times-square-billboard` | Times Square Billboard | Premium Exposure |

---

## 6. Key Components

### Layout

**`Header.tsx`** — Fixed top navigation with:
- ATP logo (links to homepage)
- Desktop mega menu (two columns: Publishing Services / Marketing & Distribution, each with categorized sub-links and a featured panel)
- Mobile hamburger accordion menu
- "Browse Bookstore" ghost link + "Start Publishing" gold CTA button in nav bar

**`Footer.tsx`** — Full-width footer with:
- Brand column (logo, tagline, social links: Instagram, Facebook, TikTok, YouTube)
- Link columns: Services, Explore, Support
- Newsletter subscription form
- Legal links (Terms, Privacy, Accessibility)
- Marketing Services link preserved in footer

**`SiteShell.tsx`** — Wraps all pages; renders Header, Footer, FloatingCTA, EbookPopup

### Shared / Global

**`FloatingCTA.tsx`** — Speed dial FAB (bottom-right corner):
- Gold `+` trigger button (appears after 400px scroll), rotates to `×` when open
- Expands upward into 4 icon-only action buttons with staggered animation
- Hover reveals label tooltip to the left
- Actions: Find My Package (quiz panel), View Packages, Get in Touch, Browse Bookstore
- Quiz panel retained: multi-step quiz → lead capture → package recommendation

**`EbookPopup.tsx`** — Free Guide popup (left side tab):
- Navy side tab anchored to the left edge at vertical center
- Auto-opens after 6 seconds or 40% page scroll (once per session)
- Two-panel modal: book cover image (left) + email capture form (right)
- On success: shows "Check your inbox" message; sends guide via email
- Tab arrow points right (`›`); slides in from left

**`PageCTA.tsx`** — Reusable end-of-page CTA section (used across all inner pages)

**`TrustBar.tsx`** — Social proof bar (logos, stats)

### Services

**`ServiceDetail.tsx`** — Template for all `/services/[slug]` pages:
- Dark navy hero with badge, title, tagline
- Long description body
- Two-column meta cards: Turnaround Time + Deliverables (with gold checkmarks)
- Pricing section (renders `PricingTable`)
- FAQ accordion
- Inline lead form

**`PricingTable.tsx`** — Dual-view pricing component:
- **Grid View:** Scrollable card carousel with feature list per package
- **Compare Features (default):** Full comparison table with category rows
  - Highlighted columns: Execution (gold tint), Expansion (green tint), Integrative (navy tint)
  - Show Full Comparison / Show Less toggle
  - Package name in bold navy, price, Choose CTA per column
- Helper text: "Most authors choose X or Y for the best balance of value and results"

### UI Primitives

**`Button.tsx`** — Universal button component. Variants:
- `primary` — Gold background, navy text, shimmer sweep + lift + gold glow on hover
- `secondary` — Navy background, white text, shimmer + lift + navy shadow on hover
- `outline` — Navy border, fills navy on hover with shimmer + shadow
- `gold` — Gold border, fills gold on hover with shimmer + glow
- `ghost` — Transparent, subtle cream fill on hover (no shimmer)

Sizes: `sm`, `md`, `lg`. Renders as `<button>` or `<Link>` depending on whether `href` is provided.

**`RevealItem.tsx`** — Scroll-reveal animation wrapper

**`Badge.tsx`** — Pill badge for service categories and labels

### Homepage Sections

| Component | Section |
|---|---|
| `HeroSection.tsx` | Full-bleed dark hero with headline, CTA pair, segmentation buttons |
| `ServicesOverview.tsx` | Service category cards grid |
| `HowItWorks.tsx` | Step-by-step process section |
| `StartJourney.tsx` | Getting started steps + Book Free Consultation CTA |
| `Testimonials.tsx` | Author testimonials carousel |
| `FeaturedBooks.tsx` | Featured published titles |
| `NewReleases.tsx` / `NewReleasesCarousel.tsx` | Recent releases slider |
| `HomeCTA.tsx` | Bottom homepage CTA band |

---

## 7. Data Layer

### `services.ts`
Central source of truth for all services. Exports `services: Service[]` and individual typed interfaces (`Package`, `ServiceFAQ`, `Service`). Used by:
- Service detail pages (`/services/[slug]`)
- Publishing packages page (`PricingTable`)
- Marketing hub (`/marketing`)
- FAQ page (historically sourced from here)

**Service interface:**
```ts
interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  icon: string
  category: 'publishing' | 'marketing' | 'editorial' | 'design' | 'distribution' | 'digital'
  packages: Package[]
  faqs: ServiceFAQ[]
  featured: boolean
  turnaround?: string
  deliverables?: string[]
  startingPrice?: string   // override for custom pricing display in hub cards
}
```

### `nav.ts`
Defines full navigation structure. Exports `navItems: NavItem[]` and `navCTA`. Controls both desktop mega menu (structured `MegaMenuColumn[]` with categories/links) and mobile accordion (flat `children[]` list).

### `faqData.ts`
Standalone FAQ data with 7 categories and 60+ items. Exported as `faqCategories: FAQCategory[]`. Used exclusively by the FAQ page client component.

**Categories:**
1. Getting Started
2. Publishing Packages
3. Editorial & Design
4. Digital & Audiobook
5. Marketing & Promotion
6. Children's & Specialty
7. Rights & Royalties

### `quizData.ts`
Quiz questions and answer options. Exports `QUIZ_QUESTIONS` and `getRecommendedPackage(answers)` logic used by both the `/quiz` page and the FloatingCTA quiz panel.

### `testimonials.ts`
Author testimonial objects with name, book title, service used, and quote.

---

## 8. Forms & Integrations

### Contact Form (`/api/contact`)
- Collects: name, email, phone, service interest, message
- Sends notification email to ATP via Resend
- Sends confirmation email to the author

### Free Guide Lead (`/api/ebook-lead`)
- Collects: name, email
- Generates HMAC-signed download token (`DOWNLOAD_SECRET` env var)
- Sends branded email with secure download link
- Token verified server-side via `/api/download-guide`

### Quiz Lead (`/api/quiz-lead`)
- Collects: name, email, phone, recommended package
- Sends email notification to ATP team

### Download Verification (`/api/download-guide`)
- Stateless HMAC token verification using `crypto.createHmac` + `timingSafeEqual`
- Logs download event to Google Sheets via `logToLeadsSheet()`
- Cold-start safe — no in-memory state

### Email Template (`src/lib/email/template.ts`)
- Full HTML email with ATP branding
- Header: centered ATP logo (`ATP-logo-light-1.png`, 280px) on navy background
- Footer: smaller logo (220px) + legal text
- Variables: `SITE_URL` (from `NEXT_PUBLIC_SITE_URL`)

---

## 9. Environment Variables

Set in Vercel dashboard (Production) and `.env.local` (local development).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public base URL — used in email links and download URLs |
| `RESEND_API_KEY` | Resend API key for transactional email |
| `DOWNLOAD_SECRET` | HMAC secret for signing/verifying guide download tokens |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID for bookstore CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name (usually `production`) |
| `SANITY_API_TOKEN` | Sanity write token (server-only) |

> **Security note:** Rotate `RESEND_API_KEY` if it has been exposed. Never commit `.env.local` to version control.

---

## 10. Deployment

**Platform:** Vercel (connected to `nicekajul/atp-website` GitHub repository)

**Build settings:**
- Framework: Next.js (auto-detected)
- Build command: `next build`
- Output directory: `.next`
- ESLint is bypassed during build (`eslint: { ignoreDuringBuilds: true }` in `next.config.ts`)

**Webpack config** (`next.config.ts`):
- React aliased to project's own `node_modules/react` on client bundles only — prevents Sanity's vendored React from conflicting with Next.js internals
- `serverExternalPackages: ['sanity', '@sanity/vision', 'next-sanity']` — prevents bundling Sanity server-side

**Pending tasks:**
- Connect domain `authorstranquilitypress.com` to Vercel
- Update `NEXT_PUBLIC_SITE_URL` in Vercel dashboard to the live domain
- Add domain to Resend (for branded email sending)

---

## 11. Changelog — June 3, 2026

All changes in this session are on branch `master`. Commits are in chronological order.

---

### `b642df9` — Remove Marketing & PR service, align nav with marketing hub

**What changed:**
- Removed the `marketing` slug entry from `src/data/services.ts` (the standalone Marketing & PR service page that had no live URL)
- Removed `Marketing & PR` from the mobile navigation list in `src/data/nav.ts`
- Removed `Marketing & PR` option from the service interest dropdown in `InlineLeadForm.tsx`
- Redirected the "Need Marketing Help" hero segmentation button from `/services/marketing` to `/marketing` (the proper marketing hub)
- Removed `'marketing'` slug from the Launch & Promotion category in `src/app/marketing/page.tsx`

**Why:** The Marketing & PR page was a service entry without a corresponding route or submenu category. All marketing services are now properly housed under the `/marketing` hub.

---

### `4fc70af` — Align Marketing & Distribution submenu with marketing hub categories

**What changed:**
- Restructured the desktop mega menu's "Marketing & Distribution" column in `src/data/nav.ts` to exactly mirror the category groupings on the `/marketing` page
- Old groupings: Foundation, Marketing & Exposure, Engagement & Reviews, Credibility, Premium Opportunities, Advanced Opportunities
- New groupings (matching marketing hub):
  1. **Foundation** — Author Website, Book Spark
  2. **Launch & Promotion** — Social Media Ads, Digital Advertising
  3. **Media & Press** — Press Release, Media Coverage, Print Advertising
  4. **Content & Video** — Book Trailers, Book-to-Screen Services
  5. **Credibility & Recognition** — Book Reviews, Book Awards
  6. **Premium Exposure** — International Book Fairs, Times Square Billboard
- Services were reorganized to match (Print Advertising moved from Premium → Media & Press; Book-to-Screen moved from its own group → Content & Video; Book Reviews joined Book Awards under Credibility & Recognition)

**Why:** Consistency — the nav submenu and the Marketing hub page now use identical category names and groupings, reducing visitor confusion.

---

### `4d71514` — Remove Marketing from main navbar

**What changed:**
- Removed the standalone `{ label: 'Marketing', href: '/marketing' }` top-level nav item from `src/data/nav.ts`
- Marketing is now accessible via Services → Marketing & Distribution submenu

**Why:** Redundant with the Services mega menu. Keeps the top nav lean.

---

### `4d71514` (same commit) — Remove Bookstore from main navbar

**What changed:**
- Removed `{ label: 'Bookstore', href: '/bookstore' }` from the top-level nav
- Bookstore remains accessible via the "Browse Bookstore" button in the nav bar CTA area

**Why:** The dedicated Browse Bookstore button in the header already provides prominent access; a duplicate nav link was unnecessary.

---

### `4fc70af` — Add starting prices to Book Reviews and Book-to-Screen hub cards

**What changed:**
- Added optional `startingPrice?: string` field to the `Service` interface in `services.ts`
- Set `startingPrice: 'From $899'` on the `book-reviews` service
- Set `startingPrice: 'From $999'` on the `book-to-screen` service
- Updated `getStartingPrice()` in `MarketingHub.tsx` to use the override when present

**Why:** Both services have empty `packages[]` arrays (custom pricing), so the hub cards showed "Custom pricing". The override allows communicating a starting price without adding full package data.

---

### `c724b76` — Speed dial FAB replaces floating CTA button

**What changed (`FloatingCTA.tsx` / `FloatingCTA.module.css`):**
- Replaced the single "Find Your Perfect Package" pill button with a **speed dial FAB** (Floating Action Button)
- Trigger: 56px gold circle with a `+` icon (rotates 45° to `×` when open) — appears after 400px scroll
- Four action buttons expand upward with staggered animation (55ms per step, bottom to top):
  1. 🧭 **Find My Package** — opens the quiz panel
  2. 📦 **View Packages** — links to `/services/publishing-packages`
  3. 💬 **Get in Touch** — links to `/contact`
  4. 📚 **Browse Bookstore** — links to `/bookstore`
- Each action button: 48px navy circle with gold icon; hover reveals a label tooltip sliding in from the right
- Quiz panel (multi-step quiz → lead capture → recommendation) retained and triggered by the first action
- Floating button excluded from these changes (exempt per user instruction)

---

### `c724b76` (same commit) — Free Guide tab moved to left side; close button fixed

**What changed (`EbookPopup.tsx` / `EbookPopup.module.css`):**
- Moved the Free Guide side tab from `right: 0` to `left: 0`
- Flipped border-radius: `0 var(--radius-lg) var(--radius-lg) 0` (opens from left)
- Updated box-shadow direction and hover translateX direction
- Changed slide-in animation from right (`translateX(100%)`) to left (`translateX(-100%)`)
- Changed tab arrow from `‹` to `›` (pointing right, indicating interaction direction)
- Fixed close button: was white text on white background (invisible). Changed to `color: var(--atp-slate)` on `rgba(15,27,45,0.07)` background — clearly visible on the white right panel

**Why:** The right side overlapped with the new speed dial FAB. The close button was always invisible on desktop due to white-on-white contrast.

---

### `c024ab4` — Mega menu column headings enhanced

**What changed (`Header.module.css`):**
- `.megaColHeading`: color changed from `var(--atp-muted)` (pale grey) to `var(--atp-navy)` (dark, readable)
- Font weight increased from `700` to `800`
- Bottom border changed from `1px solid var(--atp-border)` (light grey) to `2px solid var(--atp-gold)` (gold accent)

**Why:** The "Publishing Services" and "Marketing & Distribution" column headings were too faint and easy to miss. The gold underline and navy text give them the visual weight they need.

---

### `79d6a0e` — Full FAQ page built

**What changed:**

**New file — `src/data/faqData.ts`:**
- 7 categories with 60+ questions and answers sourced from all service pages plus new general sections
- Categories: Getting Started, Publishing Packages, Editorial & Design, Digital & Audiobook, Marketing & Promotion, Children's & Specialty, Rights & Royalties

**New file — `src/app/faq/FAQClient.tsx`:**
- Client component with category filter tabs (All + 7 categories with item counts)
- Accordion items (individual open/close per question with animated chevron)

**Updated — `src/app/faq/page.tsx`:**
- Hero section with stats bar: 7 Categories, 60+ Questions Answered, Free Consultation Available
- FAQ body section (renders `FAQClient`)
- "Still have questions?" contact nudge section above the PageCTA

**Updated — `src/app/faq/faq.module.css`:**
- Full styles for tabs, accordion, section headers, contact nudge, and responsive breakpoints
- Gold `2px` border-bottom on each category section heading
- Active tab: navy background, gold count pill

---

### `0fafcc7` — Shimmer hover effects applied to all button variants

**What changed (`Button.module.css`):**
- Moved `position: relative; overflow: hidden` to the base `.btn` class (required for the `::after` shimmer on all variants)
- Added `::after` shimmer sweep to the base `.btn` — a white gradient that sweeps left-to-right on hover (`left: -75%` → `left: 125%`, 0.55s ease)
- Increased hover lift from `translateY(-1px)` to `translateY(-2px)`
- Enhanced box shadows per variant:
  - `primary`: `box-shadow: 0 6px 28px rgba(201,168,76,0.5)` (gold glow)
  - `secondary`: `box-shadow: 0 6px 28px rgba(15,31,61,0.4)` (navy depth)
  - `outline`: fills navy + `box-shadow: 0 6px 28px rgba(15,31,61,0.3)`
  - `gold`: fills gold + `box-shadow: 0 6px 28px rgba(201,168,76,0.45)` (gold glow)
  - `ghost`: suppressed shimmer (`::after { display: none }`) — too faint on light bg; subtle cream fill instead
- All button shapes (border-radius) preserved as-is per variant

**Why:** The shimmer + lift + glow effect was previously only on the `primary` variant. Consistent hover feedback across all variants creates a more polished, unified interactive feel across the entire site.

---

---

**Developed by:** Alreen Christian Jul R. Omang
**Title:** Marketing Technology Manager / Senior Full-Stack Developer
**Date:** June 3, 2026
