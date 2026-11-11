'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VETERANS_DAY_PROMO_END, isPromoActive } from '@/data/promos'
import styles from './BookPromo.module.css'

interface PromoAd {
  id: string
  title: string
  tagline: string
  author: string
  image: string
  width: number
  height: number
  alt: string
  href: string
  ctaLabel: string
  external: boolean
}

// Veterans Day 2026 campaign. For the next promo, swap the ads, the eyebrow and the end date.
const PROMO_EYEBROW = 'Honoring Our Veterans'

const PROMO_ADS: PromoAd[] = [
  {
    id: 'a-hard-decision',
    title: 'A Hard Decision',
    tagline: 'A romantic suspense novel',
    author: 'Westley Thomas',
    image: '/promos/veterans-a-hard-decision.png',
    width: 1672,
    height: 941,
    alt: 'Happy Veterans Day ad for A Hard Decision, a multi-award-winning romantic suspense novel by Westley Thomas, available at Amazon and Barnes & Noble.',
    href: 'https://www.amazon.com/dp/1964037883',
    ctaLabel: 'Buy on Amazon',
    external: true,
  },
  {
    id: 'letters-from-vietnam',
    title: 'Letters from Vietnam',
    tagline: 'A memoir written during the Vietnam War',
    author: 'Dennis Hoy',
    image: '/promos/veterans-letters-from-vietnam.png',
    width: 1536,
    height: 1024,
    alt: 'Veterans Day ad for Letters from Vietnam, an award-winning memoir by Dennis Hoy, available at Amazon and Barnes & Noble.',
    href: '/bookstore/letters-from-vietnam',
    ctaLabel: 'Get the Book',
    external: false,
  },
]

const STORAGE_KEY = 'atp_veterans_promo_dismissed'
const SHOW_DELAY = 10000
const ROTATE_INTERVAL = 7000
/** Desktop only: a corner card would cover most of a phone screen */
const DESKTOP_QUERY = '(min-width: 769px)'

function PromoCta({ ad, className }: { ad: PromoAd; className: string }) {
  if (ad.external) {
    return (
      <a href={ad.href} target="_blank" rel="noopener noreferrer" className={className}>
        {ad.ctaLabel} &rarr;
      </a>
    )
  }
  return (
    <Link href={ad.href} className={className}>
      {ad.ctaLabel} &rarr;
    </Link>
  )
}

export default function BookPromo() {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!isPromoActive(VETERANS_DAY_PROMO_END)) return
    if (!window.matchMedia(DESKTOP_QUERY).matches) return
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {
      // Storage blocked: show the card anyway
    }

    // Wait for the delay, and never appear while the e-book modal is open
    const ebookOpen = () => document.documentElement.dataset.ebookPopup === 'open'
    let delayDone = false
    let timer: ReturnType<typeof setTimeout>

    const tryShow = () => {
      if (ebookOpen()) return
      window.removeEventListener('atp:ebook-popup', handleEbookChange)
      setVisible(true)
    }

    const handleEbookChange = () => {
      if (!delayDone || ebookOpen()) return
      clearTimeout(timer)
      timer = setTimeout(tryShow, 1500)
    }

    timer = setTimeout(() => {
      delayDone = true
      tryShow()
    }, SHOW_DELAY)
    window.addEventListener('atp:ebook-popup', handleEbookChange)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('atp:ebook-popup', handleEbookChange)
    }
  }, [])

  // Rotate between ads; pause on hover/focus, in the lightbox, and for reduced motion
  useEffect(() => {
    if (!visible || hovered || lightboxOpen || PROMO_ADS.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % PROMO_ADS.length)
    }, ROTATE_INTERVAL)
    return () => clearInterval(interval)
  }, [visible, hovered, lightboxOpen])

  const dismiss = () => {
    setVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Storage blocked: the card simply returns on the next page load
    }
  }

  const openLightbox = () => {
    dialogRef.current?.showModal()
    setLightboxOpen(true)
  }

  const closeLightbox = () => dialogRef.current?.close()

  if (!visible) return null

  const ad = PROMO_ADS[index]

  const dots = PROMO_ADS.length > 1 && (
    <div className={styles.dots} role="group" aria-label="Choose a book">
      {PROMO_ADS.map((item, i) => (
        <button
          key={item.id}
          type="button"
          className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
          onClick={() => setIndex(i)}
          aria-label={`Show ${item.title}`}
          aria-pressed={i === index}
        />
      ))}
    </div>
  )

  return (
    <>
      <aside
        className={styles.card}
        aria-label={`${PROMO_EYEBROW}: featured books`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span aria-hidden="true">★</span> {PROMO_EYEBROW}
          </span>
          <button type="button" className={styles.closeBtn} onClick={dismiss} aria-label="Close promotion">
            &times;
          </button>
        </div>

        <button
          type="button"
          className={styles.imageBtn}
          onClick={openLightbox}
          aria-label={`View the ${ad.title} ad full size`}
        >
          {PROMO_ADS.map((item, i) => (
            <Image
              key={item.id}
              src={item.image}
              alt={i === index ? item.alt : ''}
              width={item.width}
              height={item.height}
              sizes="340px"
              className={`${styles.image} ${i === index ? styles.imageActive : ''}`}
            />
          ))}
          <span className={styles.zoomHint} aria-hidden="true">Click to enlarge</span>
        </button>

        <div className={styles.body}>
          <p className={styles.title}>{ad.title}</p>
          <p className={styles.meta}>
            {ad.tagline} by {ad.author}
          </p>
        </div>

        <div className={styles.footer}>
          {dots}
          <PromoCta ad={ad} className={styles.cta} />
        </div>
      </aside>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label={`${ad.title} ad`}
        onClose={() => setLightboxOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox()
        }}
      >
        <div className={styles.lightboxInner}>
          <button type="button" className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close full-size ad">
            &times;
          </button>
          <Image
            src={ad.image}
            alt={ad.alt}
            width={ad.width}
            height={ad.height}
            sizes="(max-width: 1400px) 92vw, 1300px"
            quality={90}
            className={styles.lightboxImage}
          />
          <div className={styles.lightboxFooter}>
            <div>
              <p className={styles.lightboxTitle}>{ad.title}</p>
              <p className={styles.lightboxMeta}>
                {ad.tagline} by {ad.author}
              </p>
            </div>
            <div className={styles.lightboxActions}>
              {dots}
              <PromoCta ad={ad} className={styles.cta} />
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
