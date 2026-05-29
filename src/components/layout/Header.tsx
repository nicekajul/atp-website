'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems, navCTA } from '@/data/nav'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const dropdownEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const dropdownLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null)
      setOpenCategory(null)
    }, 120)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll() // sync on mount and every route change
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Clean up close timer on unmount
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        ref={headerRef}
        className={[styles.header, scrolled ? styles['header--scrolled'] : ''].join(' ')}
      >
        <Container>
          <nav className={styles.nav} aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className={styles.logo} aria-label="Author's Tranquility Press — Home">
              <span className={styles.logo__mark}>
                <Image src="/ATP-logo-dark.png" alt="Author's Tranquility Press" width={45} height={45} priority />
              </span>
              <span className={styles.logo__text}>
                <span className={styles.logo__name}>Author's Tranquility Press</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className={styles.navList} role="list">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={styles.navItem}
                  onMouseEnter={() => (item.megaMenu || item.children) && dropdownEnter(item.label)}
                  onMouseLeave={dropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={[
                      styles.navLink,
                      isActive(item.href) ? styles['navLink--active'] : '',
                    ].join(' ')}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                    {(item.megaMenu || item.children) && (
                      <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.megaMenu && (
                    <div
                      className={[
                        styles.megaMenu,
                        openDropdown === item.label ? styles['megaMenu--open'] : '',
                      ].join(' ')}
                      role="menu"
                      onMouseEnter={() => dropdownEnter(item.label)}
                      onMouseLeave={dropdownLeave}
                    >
                      <div className={styles.megaMenuInner}>
                        {item.megaMenu.columns.map((col) => (
                          <div key={col.heading} className={styles.megaCol}>
                            <p className={styles.megaColHeading}>{col.heading}</p>

                            {col.categories ? (() => {
                              const activeCat =
                                col.categories!.find((c) => c.label === openCategory) ??
                                col.categories![0]
                              return (
                                <div className={styles.megaColCategorized}>
                                  {/* Category nav rail */}
                                  <nav className={styles.megaCategoryNav} aria-label={`${col.heading} categories`}>
                                    {col.categories!.map((cat) => (
                                      <button
                                        key={cat.label}
                                        className={[
                                          styles.megaCategoryItem,
                                          activeCat.label === cat.label ? styles['megaCategoryItem--active'] : '',
                                        ].filter(Boolean).join(' ')}
                                        onMouseEnter={() => setOpenCategory(cat.label)}
                                        onClick={() => setOpenCategory(cat.label)}
                                      >
                                        <span>{cat.label}</span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                          <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </button>
                                    ))}
                                  </nav>

                                  {/* Links sub-panel */}
                                  <div className={styles.megaCategoryLinks}>
                                    <p className={styles.megaCategoryLinksHeading}>{activeCat.label}</p>
                                    <div className={styles.megaLinks}>
                                      {activeCat.links.map((link) => (
                                        <Link
                                          key={link.href}
                                          href={link.href}
                                          className={styles.megaLink}
                                          role="menuitem"
                                        >
                                          <span className={styles.megaLinkIcon}>{link.icon}</span>
                                          <span className={styles.megaLinkContent}>
                                            <span className={styles.megaLinkLabel}>{link.label}</span>
                                            <span className={styles.megaLinkDesc}>{link.description}</span>
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )
                            })() : (
                              <div className={styles.megaLinks}>
                                {col.links?.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className={styles.megaLink}
                                    role="menuitem"
                                  >
                                    <span className={styles.megaLinkIcon}>{link.icon}</span>
                                    <span className={styles.megaLinkContent}>
                                      <span className={styles.megaLinkLabel}>{link.label}</span>
                                      <span className={styles.megaLinkDesc}>{link.description}</span>
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Featured / Magazine column */}
                        <div className={styles.megaFeatured}>
                          <Image
                            src="/4735c5b5-4440-4cb8-b09d-6f77f6a54280.webp"
                            alt="LEXIS Magazine by Author's Tranquility Press"
                            width={180}
                            height={225}
                            className={styles.megaFeaturedCoverImg}
                          />
                          <span className={styles.megaFeaturedBadge}>{item.megaMenu.featured.badge}</span>
                          <p className={styles.megaFeaturedTitle}>{item.megaMenu.featured.title}</p>
                          <p className={styles.megaFeaturedDesc}>{item.megaMenu.featured.description}</p>
                          <Link href={item.megaMenu.featured.href} className={styles.megaFeaturedCTA}>
                            {item.megaMenu.featured.cta} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Simple Dropdown (for items without megaMenu) */}
                  {!item.megaMenu && item.children && (
                    <div
                      className={[
                        styles.dropdown,
                        openDropdown === item.label ? styles['dropdown--open'] : '',
                      ].join(' ')}
                      role="menu"
                      onMouseEnter={() => dropdownEnter(item.label)}
                      onMouseLeave={dropdownLeave}
                    >
                      <div className={styles.dropdownInner}>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={styles.dropdownLink}
                            role="menuitem"
                          >
                            <span className={styles.dropdownLink__label}>{child.label}</span>
                            {child.description && (
                              <span className={styles.dropdownLink__desc}>{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className={styles.navCTA}>
              <Link href="/bookstore" className={styles.secondaryCTA}>
                Browse Bookstore
              </Link>
              <Button href={navCTA.href} variant="primary" size="sm">
                {navCTA.label}
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={[styles.hamburger, mobileOpen ? styles['hamburger--open'] : ''].join(' ')}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={[styles.mobileDrawer, mobileOpen ? styles['mobileDrawer--open'] : ''].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileDrawerInner}>
          <ul className={styles.mobileNavList} role="list">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={styles.mobileNavItem}
                style={{ animationDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
              >
                {item.children ? (
                  <>
                    <button
                      className={styles.mobileNavGroup}
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg
                        className={[
                          styles.chevron,
                          openDropdown === item.label ? styles['chevron--open'] : '',
                        ].join(' ')}
                        width="14" height="14" viewBox="0 0 12 12" fill="none"
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <ul className={styles.mobileSubList} role="list">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={styles.mobileSubLink}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={[
                      styles.mobileNavLink,
                      isActive(item.href) ? styles['mobileNavLink--active'] : '',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileCTA}>
            <Button href={navCTA.href} variant="primary" size="lg" fullWidth>
              {navCTA.label}
            </Button>
          </div>

          <p className={styles.mobileFooter}>
            Questions? <Link href="/contact">Talk to our team →</Link>
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
