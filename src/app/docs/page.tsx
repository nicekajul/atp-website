import { Metadata } from 'next'
import styles from './docs.module.css'
import DocsChangelog from './DocsChangelog'
import DocsTemplates from './DocsTemplates'

export const metadata: Metadata = {
  title: 'Website Documentation | Author\'s Tranquility Press',
  description: 'Internal website documentation for Author\'s Tranquility Press.',
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
  { id: 'brand-assets',  label: 'Brand Assets' },
  { id: 'branding',      label: 'Branding Guidelines' },
  { id: 'templates',     label: 'Brand Templates' },
  { id: 'changelog',     label: 'Changelog — June 2026' },
]

const BRAND_ASSETS = [
  {
    file: 'ATP-Logo-Horizontal-Dark.png',
    label: 'Horizontal Logo — Dark',
    desc: 'Primary logo. Use on light/white backgrounds. Main logo variant.',
    bg: '#ffffff',
    border: true,
  },
  {
    file: 'ATP-Logo-Horizontal-Light.png',
    label: 'Horizontal Logo — Light',
    desc: 'Reversed primary logo. Use on dark/navy backgrounds and in emails.',
    bg: '#0f1b2d',
    border: false,
  },
  {
    file: 'ATP-Logo-Vertical-Dark.png',
    label: 'Vertical Logo — Dark',
    desc: 'Vertical variant. Use for email signatures and narrow-space contexts on light backgrounds.',
    bg: '#ffffff',
    border: true,
  },
  {
    file: 'ATP-Logo-Vertical-Light.png',
    label: 'Vertical Logo — Light',
    desc: 'Vertical variant reversed. Use for email signatures and narrow-space contexts on dark/navy backgrounds.',
    bg: '#0f1b2d',
    border: false,
  },
  {
    file: 'atp-logo-alt.png',
    label: 'App Icon',
    desc: 'Square icon mark with gold background. Use for favicons, social profiles, and app icons.',
    bg: '#f7f4ef',
    border: true,
  },
  {
    file: 'ATP-logo-dark.png',
    label: 'Icon Mark — Gold',
    desc: 'Standalone gold icon on transparent background. Use on light or navy surfaces.',
    bg: '#ffffff',
    border: true,
  },
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

        {/* 11. Brand Assets */}
        <section id="brand-assets" className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Brand Assets</h2>
          <p>Official logos and icons for Author&rsquo;s Tranquility Press. Click <strong>Download</strong> on any asset to save the file.</p>
          <div className={styles.assetGrid}>
            {BRAND_ASSETS.map(asset => (
              <div key={asset.file} className={styles.assetCard}>
                <div
                  className={styles.assetPreview}
                  style={{ background: asset.bg, border: asset.border ? '1px solid #e5e7eb' : 'none' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/${asset.file}`} alt={asset.label} className={styles.assetImg} />
                </div>
                <div className={styles.assetInfo}>
                  <p className={styles.assetLabel}>{asset.label}</p>
                  <p className={styles.assetDesc}>{asset.desc}</p>
                  <code className={styles.assetFile}>{asset.file}</code>
                  <a href={`/${asset.file}`} download={asset.file} className={styles.assetDownload}>
                    ↓ Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Branding Guidelines */}
        <section id="branding" className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Branding Guidelines</h2>
          <p>These guidelines ensure consistent brand presentation across all digital and print materials.</p>

          {/* Color Palette */}
          <h3 className={styles.subTitle}>Color Palette</h3>
          <div className={styles.colorGrid}>
            {[
              { name: 'Navy',        hex: '#0F1B2D', variable: '--atp-navy',       dark: true  },
              { name: 'Navy Dark',   hex: '#07111D', variable: '--atp-navy-dark',  dark: true  },
              { name: 'Navy Light',  hex: '#1A2E48', variable: '--atp-navy-light', dark: true  },
              { name: 'Gold',        hex: '#C9A84C', variable: '--atp-gold',       dark: false },
              { name: 'Gold Light',  hex: '#E2C070', variable: '--atp-gold-light', dark: false },
              { name: 'Gold Dark',   hex: '#A8882C', variable: '--atp-gold-dark',  dark: false },
              { name: 'Cream',       hex: '#F8F5EF', variable: '--atp-cream',      dark: false },
              { name: 'Charcoal',    hex: '#2D3748', variable: '--atp-charcoal',   dark: true  },
              { name: 'White',       hex: '#FFFFFF', variable: '--atp-white',      dark: false },
            ].map(c => (
              <div key={c.hex} className={styles.colorCard}>
                <div className={styles.colorSwatch} style={{ background: c.hex }}>
                  <span className={styles.colorHex} style={{ color: c.dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.6)' }}>{c.hex}</span>
                </div>
                <div className={styles.colorInfo}>
                  <p className={styles.colorName}>{c.name}</p>
                  <code className={styles.assetFile}>{c.variable}</code>
                </div>
              </div>
            ))}
          </div>

          {/* Typography */}
          <h3 className={styles.subTitle}>Typography</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Role</th><th>Font Family</th><th>CSS Variable</th><th>Usage</th></tr></thead>
              <tbody>
                {[
                  ['Serif', 'Playfair Display', '--font-serif', 'H1–H4 headings, hero text, section titles, pull quotes'],
                  ['Sans', 'Inter', '--font-sans', 'Body copy, nav, labels, buttons, captions, UI elements'],
                ].map(([role, font, variable, usage]) => (
                  <tr key={role}>
                    <td><strong>{role}</strong></td>
                    <td>{font}</td>
                    <td><code className={styles.code}>{variable}</code></td>
                    <td>{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.callout}>
            Both fonts are loaded via Google Fonts in the Next.js root layout. Always use the CSS variables — never hardcode font names in components.
          </div>

          {/* Logo Usage */}
          <h3 className={styles.subTitle}>Logo Usage</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Scenario</th><th>File</th></tr></thead>
              <tbody>
                {[
                  ['Light / white background (primary use)', 'ATP-Logo-Horizontal-Dark.png'],
                  ['Dark / navy background', 'ATP-Logo-Horizontal-Light.png'],
                  ['Email signatures, narrow layouts — light background', 'ATP-Logo-Vertical-Dark.png'],
                  ['Email signatures, narrow layouts — dark background', 'ATP-Logo-Vertical-Light.png'],
                  ['Favicon, app icon, social profile picture', 'atp-logo-alt.png'],
                  ['Standalone icon mark on any surface', 'ATP-logo-dark.png'],
                  ['Transactional emails (header & footer)', 'ATP-Logo-Horizontal-Light.png via NEXT_PUBLIC_SITE_URL'],
                ].map(([scenario, file]) => (
                  <tr key={scenario}><td>{scenario}</td><td><code className={styles.code}>{file}</code></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className={styles.list}>
            <li><strong>Primary variant:</strong> Horizontal logo — always the default. Vertical is for narrow/email contexts only.</li>
            <li><strong>Minimum size:</strong> 120px wide for horizontal logo; 80px wide for vertical logo; 32px for icon mark</li>
            <li><strong>Clear space:</strong> Maintain padding equal to the height of the icon mark on all sides</li>
            <li><strong>Never:</strong> stretch, skew, rotate, recolor, or place on a busy background without a backing shape</li>
            <li><strong>Never:</strong> use a rasterized logo below minimum size — use the icon mark instead</li>
          </ul>

          {/* Proportion Calculations */}
          <h3 className={styles.subTitle}>Logo Proportion System</h3>
          <div className={styles.callout}>
            These proportions were calculated by the brand designer to achieve optical balance between the bird mark and the wordmark across both logo variants.
          </div>

          <p className={styles.subTitle} style={{ fontSize: 'var(--text-sm)', marginTop: 0 }}>Vertical Logo</p>
          <ul className={styles.list}>
            <li><strong>Step 1 — Anchor point:</strong> Measure the exact pixel width of the word &ldquo;Tranquility&rdquo; (the widest word in the lockup).</li>
            <li><strong>Step 2 — Golden Ratio:</strong> Multiply that width by <strong>0.62</strong>. Set the total width of the bird mark to that value. The 60–65% range is optimal for organic, flowing marks — 0.62 sits precisely at the Golden Ratio.</li>
            <li><strong>Step 3 — Breathing room:</strong> The bird&rsquo;s tail is a sharp downward point that draws the eye directly into &ldquo;Author&rsquo;s.&rdquo; Use the physical cap-height of the letter &ldquo;A&rdquo; in &ldquo;Author&rsquo;s&rdquo; as the exact vertical gap between the tail tip and the top of the text below.</li>
          </ul>

          <p className={styles.subTitle} style={{ fontSize: 'var(--text-sm)', marginTop: 0 }}>Horizontal Logo</p>
          <ul className={styles.list}>
            <li><strong>Mark sizing:</strong> The bird mark height should be <strong>1.5× to 2.5×</strong> the cap-height of the wordmark. Matching it 1:1 makes the mark look too small.</li>
            <li><strong>Vertical alignment:</strong> Align the horizontal centerline of the bird mark exactly with the horizontal centerline of the wordmark text.</li>
            <li><strong>Gap:</strong> Use the pixel width of the lowercase &ldquo;o&rdquo; in &ldquo;Author&rsquo;s&rdquo; as the exact gap between the rightmost edge of the bird and the first letter of the wordmark. Wider logo = less breathing room needed.</li>
          </ul>

          {/* Brand Voice */}
          <h3 className={styles.subTitle}>Brand Voice & Tone</h3>
          <div className={styles.compGrid}>
            {[
              { name: 'Empowering', desc: 'Authors are the heroes. ATP is the guide. Every line of copy puts the author\'s success at the centre.' },
              { name: 'Professional', desc: 'We speak with expertise and confidence. Avoid slang, excessive exclamation marks, and vague claims without backing.' },
              { name: 'Warm', desc: 'We are not a corporation. Use "we" and "you" freely. Write the way a knowledgeable friend would explain publishing.' },
              { name: 'Precise', desc: 'Clear over clever. If a sentence can be shorter without losing meaning, shorten it. No filler phrases.' },
            ].map(v => (
              <div key={v.name} className={styles.compCard}>
                <code className={styles.compName}>{v.name}</code>
                <p className={styles.compDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Brand Don'ts */}
          <h3 className={styles.subTitle}>Copy Rules</h3>
          <ul className={styles.list}>
            <li>Brand name is <strong>Author&rsquo;s Tranquility Press</strong> — always with the apostrophe. Never "Authors Tranquility Press".</li>
            <li>Short form: <strong>ATP</strong> — acceptable after first full mention on a page.</li>
            <li>Email sender: <strong>support@authorstranquilitypress.com</strong></li>
            <li>Primary CTA: <strong>Start Publishing</strong> (header) · <strong>Book a Free Consultation</strong> (body)</li>
            <li>Avoid em-dash overuse — use it for strong breaks only, not as a comma substitute.</li>
            <li>Prices should always be preceded by "From" when showing a starting price (e.g., "From $899").</li>
          </ul>
        </section>

        {/* 13. Brand Templates */}
        <DocsTemplates sectionNumber={13} />

        {/* 14. Changelog */}
        <DocsChangelog sectionNumber={14} />

        <footer className={styles.footer}>
          <p>Author&rsquo;s Tranquility Press · Internal Documentation · {new Date().getFullYear()}</p>
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
