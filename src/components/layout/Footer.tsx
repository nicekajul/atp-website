'use client';

import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import FooterNewsletter from './FooterNewsletter'
import styles from './Footer.module.css'

const footerLinks = {
  Services: [
    { label: 'Publishing Packages', href: '/services/publishing-packages' },
    { label: 'Authors Tranquility Junior', href: '/services/authors-tranquility-junior' },
    { label: 'Book Illustration', href: '/services/book-illustration' },
    { label: 'Marketing & PR', href: '/services/marketing' },
    { label: 'eBook Conversion', href: '/services/ebook-conversion' },
    { label: 'Author Website', href: '/services/author-website' },
  ],
  Explore: [
    { label: 'Bookstore', href: '/bookstore' },
    { label: 'About ATP', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Start Publishing', href: '/contact' },
    { label: 'Author Resources', href: '/resources' },
  ],
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/authorstranquility/',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/authorstranquilitypress',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@authorstranquilitypress',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@authorstranquilitypress1256',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Top: Brand + Links */}
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Author's Tranquility Press Home">
              <span className={styles.logo__mark}>
                <Image src="/ATP-logo-dark.png" alt="Author's Tranquility Press" width={50} height={50} />
              </span>
              <span className={styles.logo__name} style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Author's Tranquility Press
              </span>
            </Link>
            <p className={styles.tagline}>
              Guiding authors from first draft to bestseller. Professional publishing services rooted in craft, care, and community.
            </p>
            <div className={styles.social}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className={styles.linkCol}>
              <h3 className={styles.linkCol__heading}>{section}</h3>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletter__copy}>
            <h4 className={styles.newsletter__heading}>Publishing insights, straight to your inbox</h4>
            <p className={styles.newsletter__sub}>Tips, author stories, and exclusive resources—no spam, ever.</p>
          </div>
          <FooterNewsletter />
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} Author's Tranquility Press. All rights reserved.
          </p>
          <nav className={styles.legalLinks} aria-label="Legal">
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            <Link href="/accessibility" className={styles.legalLink}>Accessibility</Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
