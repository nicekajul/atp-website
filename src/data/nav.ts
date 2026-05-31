// ============================================================
// ATP Navigation Data
// ============================================================

export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface MegaMenuLink {
  label: string
  href: string
  description: string
  icon: string
}

export interface MegaMenuCategory {
  label: string
  links: MegaMenuLink[]
}

export interface MegaMenuColumn {
  heading: string
  /** Flat link list — used when no sub-categories are needed */
  links?: MegaMenuLink[]
  /** Categorized link groups — used when the column has sub-headings */
  categories?: MegaMenuCategory[]
}

export interface MegaMenuFeatured {
  badge: string
  title: string
  edition: string
  description: string
  href: string
  cta: string
}

export interface NavMegaMenu {
  columns: MegaMenuColumn[]
  featured: MegaMenuFeatured
}

export interface NavItem {
  label: string
  href: string
  /** Flat list used by the mobile accordion */
  children?: NavChild[]
  /** Structured data used by the desktop mega menu */
  megaMenu?: NavMegaMenu
}

export const navItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',

    // -- Desktop mega menu
    megaMenu: {
      columns: [
        {
          heading: 'Publishing Services',
          links: [
            {
              label: 'Publishing Packages',
              href: '/services/publishing-packages',
              description: 'Full-service self-publishing bundles',
              icon: '\u{1F4DA}',
            },
            {
              label: 'Audiobook',
              href: '/services/audiobook',
              description: 'Professional narration & distribution',
              icon: '\u{1F3A7}',
            },
            {
              label: "Author's Tranquility Junior",
              href: '/services/authors-tranquility-junior',
              description: 'Illustrated picture books & early readers',
              icon: '\u{1F308}',
            },
            {
              label: 'eBook Conversion',
              href: '/services/ebook-conversion',
              description: 'Multi-format digital distribution',
              icon: '\u{1F4F1}',
            },
            {
              label: 'Book Illustration',
              href: '/services/book-illustration',
              description: 'Professional illustrations for your book',
              icon: '\u{1F58C}️',
            },
          ],
        },
        {
          heading: 'Marketing & Distribution',
          categories: [
            {
              label: 'Foundation',
              links: [
                {
                  label: 'Author Website',
                  href: '/services/author-website',
                  description: 'Professional author presence online',
                  icon: '\u{1F310}',
                },
                {
                  label: 'Book Spark',
                  href: '/services/book-spark',
                  description: 'Bookmarks, business cards & postcards',
                  icon: '✨',
                },
              ],
            },
            {
              label: 'Marketing & Exposure',
              links: [
                {
                  label: 'Social Media Ads',
                  href: '/services/social-media-advertising',
                  description: 'Targeted campaigns for authors',
                  icon: '\u{1F4F2}',
                },
                {
                  label: 'Digital Advertising',
                  href: '/services/digital-advertising',
                  description: 'YouTube & video ad campaigns',
                  icon: '\u{1F4E1}',
                },
                {
                  label: 'Press Release',
                  href: '/services/press-release',
                  description: 'Media distribution & syndication',
                  icon: '\u{1F4F0}',
                },
                {
                  label: 'Media Coverage',
                  href: '/services/media-coverage',
                  description: 'TV & podcast interview placements',
                  icon: '\u{1F399}️',
                },
              ],
            },
            {
              label: 'Engagement & Reviews',
              links: [
                {
                  label: 'Book Trailers',
                  href: '/services/book-trailers',
                  description: 'Cinematic trailers that sell your story',
                  icon: '\u{1F3AC}',
                },
                {
                  label: 'Book Reviews',
                  href: '/services/book-reviews',
                  description: 'Third-party reviews from top platforms',
                  icon: '⭐',
                },
              ],
            },
            {
              label: 'Credibility',
              links: [
                {
                  label: 'Book Awards',
                  href: '/services/book-awards',
                  description: 'Literary award submissions & registration',
                  icon: '\u{1F3C6}',
                },
              ],
            },
            {
              label: 'Premium Opportunities',
              links: [
                {
                  label: 'International Book Fairs',
                  href: '/services/international-book-fairs',
                  description: 'Global exposure at world-renowned book fairs',
                  icon: '\u{1F30D}',
                },
                {
                  label: 'Print Advertising',
                  href: '/services/print-advertising',
                  description: 'Ad placements in trusted print publications',
                  icon: '\u{1F4F0}',
                },
                {
                  label: 'Times Square Billboard',
                  href: '/services/times-square-billboard',
                  description: 'Feature your book on a NYC digital billboard',
                  icon: '\u{1F3D9}️',
                },
              ],
            },
            {
              label: 'Advanced Opportunities',
              links: [
                {
                  label: 'Book-to-Screen Services',
                  href: '/services/book-to-screen',
                  description: 'Film & TV adaptation development for authors',
                  icon: '\u{1F3AC}',
                },
              ],
            },
          ],
        },
      ],
      featured: {
        badge: 'Annual Release',
        title: "ATP Author's Quarterly",
        edition: '2025 Edition',
        description:
          'Author success stories, industry insights, and expert publishing tips — curated for serious writers.',
        href: '/magazine',
        cta: 'Read the Magazine',
      },
    },

    // -- Mobile fallback (flat list for the accordion)
    children: [
      { label: 'Publishing Packages',        href: '/services/publishing-packages',      description: 'Full-service self-publishing bundles' },
      { label: 'Audiobook',                  href: '/services/audiobook',                description: 'Professional narration & distribution' },
      { label: "Children's Book Publishing", href: '/services/authors-tranquility-junior', description: 'Illustrated picture books & early readers' },
      { label: 'eBook Conversion',           href: '/services/ebook-conversion',         description: 'Multi-format digital distribution' },
      { label: 'Book Illustration',          href: '/services/book-illustration',        description: 'Professional illustrations for your book' },
      { label: 'Marketing & PR',             href: '/services/marketing',                description: 'Author platform & book promotion' },
      { label: 'Author Website',             href: '/services/author-website',           description: 'Professional author presence online' },
      { label: 'Book Spark',                 href: '/services/book-spark',               description: 'Bookmarks, business cards & postcards' },
      { label: 'Social Media Ads',           href: '/services/social-media-advertising', description: 'Targeted campaigns for authors' },
      { label: 'Digital Advertising',        href: '/services/digital-advertising',      description: 'YouTube & video ad campaigns' },
      { label: 'Press Release',              href: '/services/press-release',            description: 'Media distribution & syndication' },
      { label: 'Media Coverage',             href: '/services/media-coverage',           description: 'TV & podcast interview placements' },
      { label: 'Print Advertising',          href: '/services/print-advertising',        description: 'Ad placements in trusted print publications' },
      { label: 'Book Trailers',              href: '/services/book-trailers',            description: 'Cinematic trailers that sell your story' },
      { label: 'Book Reviews',               href: '/services/book-reviews',             description: 'Third-party reviews from top platforms' },
      { label: 'Book Awards',               href: '/services/book-awards',              description: 'Literary award submissions & registration' },
      { label: 'International Book Fairs',   href: '/services/international-book-fairs', description: 'Global exposure at world-renowned book fairs' },
      { label: 'Times Square Billboard',     href: '/services/times-square-billboard',   description: 'Feature your book on a NYC digital billboard' },
      { label: 'Book-to-Screen Services',    href: '/services/book-to-screen',           description: 'Film & TV adaptation development for authors' },
    ],
  },
  { label: 'Bookstore', href: '/bookstore' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'About',     href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ',       href: '/faq' },
  { label: 'Contact',   href: '/contact' },
]

export const navCTA = {
  label: 'Start Publishing',
  href: '/contact',
}
