import { Metadata } from 'next'
import styles from './docs.module.css'

export const metadata: Metadata = {
  title: 'Website Documentation | Authors Tranquility Press',
  description: 'Internal website documentation for Authors Tranquility Press.',
  robots: { index: false, follow: false },
}

const sections = [
  { id: 'overview',      label: 'Project Overview' },
  { id: 'tech-stack',    label: 'Tech Stack' },
  { id: 'structure',     label: 'Project Structure' },
  { id: 'routes',        label: 'Pages & Routes' },
  { id: 'services',      label: 'Services Catalog' },
  { id: 'components',    label: 'Key Components' },
  { id: 'data',          label: 'Data Layer' },
  { id: 'forms',         label: 'Forms & Integrations' },
  { id: 'env',           label: 'Environment Variables' },
  { id: 'deployment',    label: 'Deployment' },
  { id: 'changelog',     label: 'Changelog — June 3, 2026' },
]

export default function DocsPage() {
  return (
    <div className={styles.page}>
      {/* ── Sidebar ─────────────────────────────────────── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.sidebarBrand}>
            <span className={styles.sidebarLogo}>ATP</span>
            <div>
              <p className={styles.sidebarTitle}>Documentation</p>
              <p className={styles.sidebarVersion}>v2.0 · June 2026</p>
            </div>
          </div>
          <nav className={styles.toc}>
            <p className={styles.tocLabel}>On this page</p>
            <ul className={styles.tocList}>
              {sections.map(s => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={styles.tocLink}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.sidebarBadge}>Internal Use Only</div>

          <div className={styles.devCard}>
            <p className={styles.devLabel}>Developed by</p>
            <p className={styles.devName}>Alreen Christian Jul R. Omang</p>
            <p className={styles.devRole}>Marketing Technology Manager</p>
            <p className={styles.devRole}>Senior Full-Stack Developer</p>
          </div>
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────── */}
      <main className={styles.main}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>Internal Documentation</span>
          <h1 className={styles.heading}>Authors Tranquility Press<br/>Website Documentation</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>📅 June 3, 2026</span>
            <span className={styles.metaDot}/>
            <span className={styles.metaItem}>🌐 atp-website-one.vercel.app</span>
            <span className={styles.metaDot}/>
            <span className={styles.metaItem}>🔒 Not indexed</span>
          </div>
        </header>

        {/* 1. Overview */}
        <section id="overview" className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Project Overview</h2>
          <p>Authors Tranquility Press (ATP) is a full-service self-publishing company. This website is the primary marketing and conversion platform for the business, enabling authors to:</p>
          <ul className={styles.list}>
            <li>Discover and compare publishing service packages</li>
            <li>Take a guided quiz to find the right publishing package</li>
            <li>Browse a curated bookstore of published ATP titles</li>
            <li>Access free author resources and interactive tools</li>
            <li>Submit leads and book free consultations</li>
            <li>Download a free Publishing Guide (email-gated)</li>
          </ul>
          <p>The site is built as a modern, SEO-optimized Next.js application with server-side rendering, static generation, and a headless CMS (Sanity) for bookstore content.</p>
        </section>

        {/* 2. Tech Stack */}
        <section id="tech-stack" className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Tech Stack</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>Layer</th><th>Technology</th></tr>
              </thead>
              <tbody>
                {[
                  ['Framework', 'Next.js 15 (App Router)'],
                  ['Language', 'TypeScript'],
                  ['Styling', 'CSS Modules (scoped per component)'],
                  ['CMS', 'Sanity v3 (headless, for Bookstore)'],
                  ['Email', 'Resend API'],
                  ['Deployment', 'Vercel'],
                  ['Package Manager', 'npm'],
                  ['Version Control', 'Git / GitHub'],
                ].map(([layer, tech]) => (
                  <tr key={layer}><td>{layer}</td><td><code className={styles.code}>{tech}</code></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.callout}>
            <strong>Key dependencies:</strong> next, sanity / next-sanity, resend, @floating-ui/react-dom
          </div>
        </section>

        {/* 3. Project Structure */}
        <section id="structure" className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Project Structure</h2>
          <pre className={styles.pre}>{`D:\\ATP\\Revamp\\
├── public/
│   ├── ATP-logo-light-1.png          # Full logo — light (used in emails)
│   ├── ATP-logo-dark.png             # Full logo — dark
│   ├── ATP_Authors_Publishing_Guide.pdf
│   └── ATP_Authors_Publishing_Guide_Page_1.jpg
│
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Homepage
│   │   ├── about/                    # About Us
│   │   ├── faq/                      # FAQ page
│   │   ├── contact/                  # Contact form
│   │   ├── quiz/                     # Package quiz
│   │   ├── bookstore/                # Bookstore + [slug] detail
│   │   ├── marketing/                # Marketing Services hub
│   │   ├── resources/                # Author tools
│   │   ├── blog/                     # Blog (placeholder)
│   │   ├── docs/                     # This documentation page
│   │   ├── services/
│   │   │   ├── [slug]/               # Dynamic service detail
│   │   │   └── publishing-packages/  # Flagship packages page
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   ├── ebook-lead/
│   │   │   ├── quiz-lead/
│   │   │   └── download-guide/
│   │   └── studio/                   # Sanity Studio (embedded)
│   │
│   ├── components/
│   │   ├── layout/     Header, Footer, Container, SiteShell
│   │   ├── home/       Homepage section components
│   │   ├── services/   ServiceDetail, PricingTable, service-specific content
│   │   ├── pricing/    PricingTable (compare + grid views)
│   │   ├── books/      Bookstore components
│   │   ├── forms/      ContactForm, InlineLeadForm
│   │   ├── quiz/       PublishingQuiz, QuizResult, QuizLeadCapture
│   │   ├── tools/      RoyaltyCalc, CostCalc, BlurbBuilder, etc.
│   │   ├── shared/     FloatingCTA, EbookPopup, PageCTA, TrustBar
│   │   └── ui/         Button, Badge, SectionHeader, RevealItem
│   │
│   ├── data/
│   │   ├── services.ts    All services, packages, FAQs
│   │   ├── nav.ts         Navigation structure
│   │   ├── faqData.ts     Standalone FAQ categories
│   │   ├── quizData.ts    Quiz questions + recommendation logic
│   │   ├── books.ts       Bookstore seed data
│   │   └── testimonials.ts
│   │
│   └── lib/
│       ├── email/template.ts   HTML email template
│       ├── email/sheets.ts     Google Sheets lead logging
│       └── formatPhone.ts
│
├── next.config.ts
└── DOCUMENTATION.md`}</pre>
        </section>

        {/* 4. Routes */}
        <section id="routes" className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Pages & Routes</h2>
          <h3 className={styles.subTitle}>Public Pages</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>Route</th><th>Description</th></tr>
              </thead>
              <tbody>
                {[
                  ['/', 'Homepage — hero, services overview, how it works, testimonials, featured books, newsletter'],
                  ['/about', 'About Us — company story, stats (500+ books, 4.9★, 12+ years, 40+ countries), values'],
                  ['/services', 'Services overview — all services grouped by category'],
                  ['/services/publishing-packages', 'Flagship service — Compare Features table with highlighted columns'],
                  ['/services/[slug]', 'Dynamic service detail — turnaround cards, pricing table, FAQ accordion, lead form'],
                  ['/marketing', 'Marketing hub — tabbed category filter with service cards and starting prices'],
                  ['/bookstore', 'Sanity-powered book listing with filters and search'],
                  ['/bookstore/[slug]', 'Individual book detail page'],
                  ['/quiz', 'Multi-step package quiz with lead capture and recommendation'],
                  ['/faq', 'Categorized accordion FAQ — 7 categories, 60+ questions'],
                  ['/contact', 'Contact form with service selector'],
                  ['/resources', 'Author tools — royalty calc, cost calc, blurb builder, title generator, etc.'],
                  ['/docs', 'This documentation page (not indexed, not in nav)'],
                ].map(([route, desc]) => (
                  <tr key={route}>
                    <td><code className={styles.code}>{route}</code></td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.subTitle}>API Routes</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>Route</th><th>Method</th><th>Purpose</th></tr>
              </thead>
              <tbody>
                {[
                  ['/api/contact', 'POST', 'Processes contact form; sends notification + confirmation emails via Resend'],
                  ['/api/ebook-lead', 'POST', 'Captures lead; sends free guide email with HMAC-signed download token'],
                  ['/api/quiz-lead', 'POST', 'Captures quiz lead with recommended package'],
                  ['/api/download-guide', 'GET', 'Verifies HMAC token; logs download to Google Sheets'],
                ].map(([route, method, purpose]) => (
                  <tr key={route}>
                    <td><code className={styles.code}>{route}</code></td>
                    <td><span className={styles.badge}>{method}</span></td>
                    <td>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Services Catalog */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Services Catalog</h2>
          <p>All services are defined in <code className={styles.code}>src/data/services.ts</code> as a typed <code className={styles.code}>Service[]</code> array.</p>

          <h3 className={styles.subTitle}>Publishing Services</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Slug</th><th>Title</th><th>Category</th></tr></thead>
              <tbody>
                {[
                  ['publishing-packages', 'Publishing Packages', 'publishing'],
                  ['editorial-services', 'Editorial Services', 'editorial'],
                  ['book-design', 'Book Design', 'design'],
                  ['ghostwriting', 'Ghostwriting', 'publishing'],
                  ['audiobook', 'Audiobook Production', 'publishing'],
                  ['authors-tranquility-junior', "Author's Tranquility Junior", 'publishing'],
                  ['ebook-conversion', 'eBook Conversion', 'digital'],
                  ['book-illustration', 'Book Illustration', 'design'],
                ].map(([slug, title, cat]) => (
                  <tr key={slug}>
                    <td><code className={styles.code}>/services/{slug}</code></td>
                    <td>{title}</td>
                    <td><span className={styles.tag}>{cat}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.subTitle}>Marketing & Distribution Services</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Slug</th><th>Title</th><th>Nav Group</th></tr></thead>
              <tbody>
                {[
                  ['author-website', 'Author Website', 'Foundation'],
                  ['book-spark', 'Book Spark', 'Foundation'],
                  ['social-media-advertising', 'Social Media Ads', 'Launch & Promotion'],
                  ['digital-advertising', 'Digital Advertising', 'Launch & Promotion'],
                  ['press-release', 'Press Release', 'Media & Press'],
                  ['media-coverage', 'Media Coverage', 'Media & Press'],
                  ['print-advertising', 'Print Advertising', 'Media & Press'],
                  ['book-trailers', 'Book Trailers', 'Content & Video'],
                  ['book-to-screen', 'Book-to-Screen Services', 'Content & Video'],
                  ['book-reviews', 'Book Reviews', 'Credibility & Recognition'],
                  ['book-awards', 'Book Awards', 'Credibility & Recognition'],
                  ['international-book-fairs', 'International Book Fairs', 'Premium Exposure'],
                  ['times-square-billboard', 'Times Square Billboard', 'Premium Exposure'],
                ].map(([slug, title, group]) => (
                  <tr key={slug}>
                    <td><code className={styles.code}>/services/{slug}</code></td>
                    <td>{title}</td>
                    <td><span className={styles.tag}>{group}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Components */}
        <section id="components" className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Key Components</h2>

          <h3 className={styles.subTitle}>Layout</h3>
          <div className={styles.compGrid}>
            {[
              { name: 'Header.tsx', desc: 'Fixed top nav with desktop mega menu (two columns: Publishing Services / Marketing & Distribution with category sub-groups) and mobile accordion. Renders logo, nav items, Browse Bookstore link, and Start Publishing CTA.' },
              { name: 'Footer.tsx', desc: 'Full-width footer with brand column (logo, tagline, social links), three link columns (Services, Explore, Support), newsletter form, and legal links. Marketing Services link preserved here.' },
              { name: 'SiteShell.tsx', desc: 'Global wrapper rendered around all pages. Mounts Header, Footer, FloatingCTA (speed dial), and EbookPopup.' },
              { name: 'Container.tsx', desc: 'Max-width content wrapper with consistent horizontal padding.' },
            ].map(c => (
              <div key={c.name} className={styles.compCard}>
                <code className={styles.compName}>{c.name}</code>
                <p className={styles.compDesc}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.subTitle}>Shared / Global</h3>
          <div className={styles.compGrid}>
            {[
              { name: 'FloatingCTA.tsx', desc: 'Speed dial FAB (bottom-right). Gold + trigger expands upward into 4 icon-only action buttons: Find My Package (quiz panel), View Packages, Get in Touch, Browse Bookstore. Each shows a label tooltip on hover. Appears after 400px scroll.' },
              { name: 'EbookPopup.tsx', desc: 'Free Guide popup anchored to the left side. Auto-opens after 6s or 40% page scroll (once per session). Two-panel modal: book cover + email form. On success shows inbox confirmation and sends guide via email.' },
              { name: 'PageCTA.tsx', desc: 'Reusable CTA banner used at the bottom of all inner pages.' },
              { name: 'TrustBar.tsx', desc: 'Social proof strip with partner logos and author stats.' },
            ].map(c => (
              <div key={c.name} className={styles.compCard}>
                <code className={styles.compName}>{c.name}</code>
                <p className={styles.compDesc}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.subTitle}>UI Primitives</h3>
          <div className={styles.compGrid}>
            {[
              { name: 'Button.tsx', desc: 'Universal button. Variants: primary (gold bg + shimmer), secondary (navy bg + shimmer), outline (navy border → fills navy), gold (gold border → fills gold), ghost (transparent, no shimmer). All except ghost have shimmer sweep + lift + glow on hover. Renders as <button> or <Link> depending on href prop.' },
              { name: 'Badge.tsx', desc: 'Small pill label for service categories and feature highlights.' },
              { name: 'RevealItem.tsx', desc: 'Scroll-reveal animation wrapper using Intersection Observer.' },
              { name: 'SectionHeader.tsx', desc: 'Standardized section eyebrow + heading + subtitle layout.' },
            ].map(c => (
              <div key={c.name} className={styles.compCard}>
                <code className={styles.compName}>{c.name}</code>
                <p className={styles.compDesc}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.subTitle}>PricingTable.tsx</h3>
          <p>Dual-view pricing component used on publishing package service pages:</p>
          <ul className={styles.list}>
            <li><strong>Grid View</strong> — Scrollable card carousel, one card per package with feature list</li>
            <li><strong>Compare Features (default)</strong> — Full HTML table with category section rows, feature rows, and package columns. Highlighted columns: Execution (gold tint), Expansion (green tint), Integrative (navy tint). Show Full Comparison / Show Less toggle.</li>
            <li>Helper text dynamically lists the recommended packages from the data</li>
            <li>Print type toggle (B&W / Color) for services with color pricing variants</li>
          </ul>
        </section>

        {/* 7. Data Layer */}
        <section id="data" className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Data Layer</h2>
          <div className={styles.compGrid}>
            {[
              { name: 'services.ts', desc: 'Central source of truth for all services. Exports services: Service[]. Each entry has slug, title, tagline, description, longDescription, icon, category, packages[], faqs[], turnaround, deliverables, startingPrice (optional override for hub cards).' },
              { name: 'nav.ts', desc: 'Full navigation structure. Controls both desktop mega menu (MegaMenuColumn[] with categories/links) and mobile accordion (flat children[] list). Also exports navCTA (Start Publishing button).' },
              { name: 'faqData.ts', desc: 'Standalone FAQ data. 7 categories, 60+ Q&As. Exported as faqCategories: FAQCategory[]. Used exclusively by the FAQ page. Categories: Getting Started, Publishing Packages, Editorial & Design, Digital & Audiobook, Marketing & Promotion, Children\'s & Specialty, Rights & Royalties.' },
              { name: 'quizData.ts', desc: 'Quiz questions, answer options, and getRecommendedPackage(answers) logic. Used by /quiz page and FloatingCTA quiz panel.' },
              { name: 'testimonials.ts', desc: 'Author testimonial objects: name, book title, service, quote.' },
              { name: 'books.ts', desc: 'Seed data for bookstore. Main bookstore data comes from Sanity CMS.' },
            ].map(c => (
              <div key={c.name} className={styles.compCard}>
                <code className={styles.compName}>{c.name}</code>
                <p className={styles.compDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Forms & Integrations */}
        <section id="forms" className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Forms & Integrations</h2>
          <div className={styles.compGrid}>
            {[
              { name: 'Contact Form', desc: 'Route: /api/contact. Collects name, email, phone, service interest, message. Sends notification email to ATP team and confirmation to the author via Resend.' },
              { name: 'Free Guide Lead', desc: 'Route: /api/ebook-lead. Collects name, email. Generates HMAC-signed download token (DOWNLOAD_SECRET env var). Sends branded email with secure download link. Token verified via /api/download-guide.' },
              { name: 'Quiz Lead', desc: 'Route: /api/quiz-lead. Collects name, email, phone, and the recommended package computed from quiz answers. Sends notification to ATP team.' },
              { name: 'Download Verification', desc: 'Route: /api/download-guide. Stateless HMAC token verification using crypto.createHmac + timingSafeEqual. Logs download to Google Sheets. Cold-start safe — no in-memory state.' },
              { name: 'Email Template', desc: 'src/lib/email/template.ts. Full HTML email with ATP branding. Header: centered ATP logo (280px) on navy bg. Footer: smaller logo (220px) + legal. Uses NEXT_PUBLIC_SITE_URL for all links.' },
              { name: 'Google Sheets', desc: 'src/lib/email/sheets.ts. Logs lead submissions and guide downloads to a Google Sheet for CRM purposes.' },
            ].map(c => (
              <div key={c.name} className={styles.compCard}>
                <code className={styles.compName}>{c.name}</code>
                <p className={styles.compDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Environment Variables */}
        <section id="env" className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Environment Variables</h2>
          <p>Set in Vercel dashboard (Production) and <code className={styles.code}>.env.local</code> (local development).</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Variable</th><th>Purpose</th></tr></thead>
              <tbody>
                {[
                  ['NEXT_PUBLIC_SITE_URL', 'Public base URL — used in email links and download URLs'],
                  ['RESEND_API_KEY', 'Resend API key for transactional email delivery'],
                  ['DOWNLOAD_SECRET', 'HMAC secret for signing and verifying guide download tokens'],
                  ['NEXT_PUBLIC_SANITY_PROJECT_ID', 'Sanity project ID for bookstore CMS'],
                  ['NEXT_PUBLIC_SANITY_DATASET', 'Sanity dataset name (typically "production")'],
                  ['SANITY_API_TOKEN', 'Sanity write token (server-only, never exposed to client)'],
                ].map(([key, desc]) => (
                  <tr key={key}>
                    <td><code className={styles.code}>{key}</code></td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.callout + ' ' + styles.calloutWarn}>
            ⚠️ <strong>Security:</strong> Rotate <code className={styles.code}>RESEND_API_KEY</code> if it has been exposed in plain text. Never commit <code className={styles.code}>.env.local</code> to version control.
          </div>
        </section>

        {/* 10. Deployment */}
        <section id="deployment" className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Deployment</h2>
          <p><strong>Platform:</strong> Vercel — connected to <code className={styles.code}>nicekajul/atp-website</code> on GitHub. Every push to <code className={styles.code}>master</code> triggers an automatic production deployment.</p>
          <h3 className={styles.subTitle}>Build Configuration</h3>
          <ul className={styles.list}>
            <li>Framework: Next.js (auto-detected by Vercel)</li>
            <li>Build command: <code className={styles.code}>next build</code></li>
            <li>ESLint bypassed during build — <code className={styles.code}>eslint: {'{ ignoreDuringBuilds: true }'}</code> in <code className={styles.code}>next.config.ts</code></li>
            <li>React aliased to project node_modules on client bundles only (prevents Sanity React conflict)</li>
            <li><code className={styles.code}>serverExternalPackages: ['sanity', '@sanity/vision', 'next-sanity']</code> prevents SSR bundling issues</li>
          </ul>
          <h3 className={styles.subTitle}>Pending Tasks</h3>
          <ul className={styles.list}>
            <li>Connect domain <code className={styles.code}>authorstranquilitypress.com</code> to Vercel</li>
            <li>Update <code className={styles.code}>NEXT_PUBLIC_SITE_URL</code> in Vercel dashboard to the live domain</li>
            <li>Add domain to Resend for branded email sending</li>
            <li>Rotate Resend API key</li>
          </ul>
        </section>

        {/* 11. Changelog */}
        <section id="changelog" className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changelog — June 3, 2026</h2>
          <p>All changes on branch <code className={styles.code}>master</code>, in chronological order.</p>

          {[
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
          ].map(entry => (
            <div key={entry.commit} className={styles.changeEntry}>
              <div className={styles.changeHeader}>
                <code className={styles.commitHash}>{entry.commit}</code>
                <h3 className={styles.changeTitle}>{entry.title}</h3>
              </div>
              <ul className={styles.changeList}>
                {entry.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <footer className={styles.footer}>
          <p>Authors Tranquility Press · Internal Documentation · {new Date().getFullYear()}</p>
          <p>
            Developed by <strong>Alreen Christian Jul R. Omang</strong> —
            Marketing Technology Manager / Senior Full-Stack Developer
          </p>
          <p>This page is not indexed by search engines and is not linked from the public navigation.</p>
        </footer>
      </main>
    </div>
  )
}
