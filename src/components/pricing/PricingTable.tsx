'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Package } from '@/data/services'
import Button from '@/components/ui/Button'
import styles from './PricingTable.module.css'

interface PricingTableProps {
  packages: Package[]
  ctaHref?: string
}

export default function PricingTable({
  packages,
  ctaHref = '/contact',
}: PricingTableProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'compare'>('compare')
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const [isTableExpanded, setIsTableExpanded] = useState(false)
  const [printType, setPrintType] = useState<'bw' | 'color'>('bw')
  const scrollRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const hasColorPricing = packages.some(p => p.colorPrice)
  const getPrice = (pkg: Package) =>
    printType === 'color' && pkg.colorPrice ? pkg.colorPrice : pkg.price

  const toggleExpand = (idx: number) => {
    setExpandedCards(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 20)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)
    }
  }

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const amount = direction === 'left' ? -clientWidth : clientWidth
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [viewMode])

  // Categorization Logic
  const getItemName = (item: string | { name: string; value?: string }) =>
    typeof item === 'string' ? item : item.name

  const allCategories = Array.from(new Set(
    packages.flatMap(pkg => pkg.categorizedFeatures?.map(cf => cf.category) || [])
  ))

  const allFeaturesAcrossCategories = allCategories.map(cat => ({
    category: cat,
    items: Array.from(new Set(
      packages.flatMap(pkg =>
        pkg.categorizedFeatures?.find(cf => cf.category === cat)?.items.map(getItemName) || []
      )
    ))
  }))

  // Adaptive Mode Logic
  const packageCount = packages.length
  const isAdaptiveSimple = packageCount <= 2
  const isAdaptiveMedium = packageCount === 3
  const isAdaptiveFull = packageCount >= 4

  // Slice categories for restricted initial view
  const initialCatCount = isAdaptiveSimple || isAdaptiveMedium ? 99 : 2
  const visibleCategories = isTableExpanded ? allFeaturesAcrossCategories : allFeaturesAcrossCategories.slice(0, initialCatCount)

  // Default view mode based on count
  useEffect(() => {
    if (isAdaptiveSimple) {
      setViewMode('grid')
    }
  }, [isAdaptiveSimple])

  return (
    <div className={styles.wrapper}>
      {/* Helper Text */}
      {(() => {
        const highlighted = packages.filter(p => p.highlight || p.tier === 'popular' || (p.tier === 'value' && p.highlight))
        if (highlighted.length === 0) return null
        const names = highlighted.map(p => p.name)
        return (
          <div className={styles.helperText}>
            <p>Most authors choose {names.map((n, i) => <React.Fragment key={n}><strong>{n}</strong>{i < names.length - 1 ? ' or ' : ''}</React.Fragment>)} for the best balance of value and results.</p>
          </div>
        )
      })()}

      {/* Print Type Toggle */}
      {hasColorPricing && (
        <div className={styles.printTypeToggle}>
          <span className={styles.printTypeLabel}>Print type:</span>
          <div className={styles.printTypePill}>
            <button
              className={`${styles.printTypeBtn} ${printType === 'bw' ? styles.printTypeBtnActive : ''}`}
              onClick={() => setPrintType('bw')}
            >
              <span className={styles.printTypeIcon}>◑</span> Black &amp; White
            </button>
            <button
              className={`${styles.printTypeBtn} ${printType === 'color' ? styles.printTypeBtnActive : ''} ${styles.printTypeBtnColor}`}
              onClick={() => setPrintType('color')}
            >
              <span className={styles.printTypeIcon}>◉</span> Full Color
            </button>
          </div>
        </div>
      )}

      {/* View Toggle */}
      {!isAdaptiveSimple && (
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.toggleBtnActive : ''}`}
            onClick={() => setViewMode('grid')}
          >
            Grid View
          </button>
          <button 
            className={`${styles.toggleBtn} ${viewMode === 'compare' ? styles.toggleBtnActive : ''}`}
            onClick={() => setViewMode('compare')}
          >
            Compare Features
          </button>
        </div>
      )}
      {viewMode === 'grid' ? (
        <div className={[
          styles.carouselContainer,
          canScrollLeft ? styles.hasScrollLeft : '',
          canScrollRight ? styles.hasScrollRight : '',
        ].join(' ')}>
          
          {/* Scroll Arrows */}
          <button 
            className={[styles.scrollBtn, styles.scrollBtnLeft, !canScrollLeft ? styles.scrollBtnDisabled : ''].join(' ')}
            onClick={() => scrollBy('left')}
            aria-label="Scroll left"
          >
            ←
          </button>
          
          <button 
            className={[styles.scrollBtn, styles.scrollBtnRight, !canScrollRight ? styles.scrollBtnDisabled : ''].join(' ')}
            onClick={() => scrollBy('right')}
            aria-label="Scroll right"
          >
            →
          </button>

          <div
            className={[styles.scrollArea, isAdaptiveSimple ? styles['scrollArea--static'] : ''].join(' ')}
            ref={scrollRef}
            onScroll={checkScroll}
          >
            <div className={[
              styles.grid,
              isAdaptiveSimple || isAdaptiveMedium ? styles['grid--centered'] : '',
              isAdaptiveSimple || isAdaptiveMedium ? styles[`grid--count-${packageCount}`] : '',
            ].join(' ')}>
              {packages.map((pkg, idx) => {
                const isExpanded = expandedCards.includes(idx)
                const hasMore = pkg.features.length > 5

                return (
                  <article
                    key={idx}
                    className={[
                      styles.card,
                      styles[`card--${pkg.tier || 'standard'}`],
                      pkg.highlight ? styles['card--highlight'] : '',
                    ].join(' ')}
                  >
                    {pkg.tier === 'popular' && (
                      <div className={styles.popularRibbon}>★ Most Popular</div>
                    )}

                    {pkg.tier === 'value' && pkg.highlight && (
                      <div className={styles.valueRibbon}>◆ Best Value</div>
                    )}

                    {pkg.tier === 'elite' && (
                      <div className={styles.eliteRibbon}>✦ Signature</div>
                    )}

                    <header className={styles.card__header}>
                      {pkg.bestFor && <span className={styles.bestForLabel}>Best for: {pkg.bestFor}</span>}
                      <h3 className={styles.card__name}>{pkg.name}</h3>
                      <div className={styles.card__price}>
                        <span className={styles.price}>{getPrice(pkg)}</span>
                        {pkg.priceNote && (
                          <span className={styles.priceNote}>{pkg.priceNote}</span>
                        )}
                      </div>
                      <p className={styles.card__desc}>{pkg.description}</p>
                    </header>

                    <div className={styles.featuresWrapper}>
                       <ul className={[
                         styles.features,
                         isExpanded ? styles.featuresExpanded : ''
                       ].join(' ')} aria-label={`Features of ${pkg.name} package`}>
                        {pkg.features.map((feature, fi) => (
                          <li key={fi} className={[
                            styles.feature,
                            !isExpanded && fi >= 5 ? styles.featureHidden : ''
                          ].join(' ')}>
                            <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="8" fill="rgba(201,168,76,0.1)"/>
                              <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {hasMore && (
                        <button 
                          className={styles.expandBtn} 
                          onClick={() => toggleExpand(idx)}
                        >
                          {isExpanded ? 'Show Less' : `+ ${pkg.features.length - 5} More Features`}
                        </button>
                      )}
                    </div>

                    <footer className={styles.card__footer}>
                      <Button
                        href={`${ctaHref}?package=${encodeURIComponent(pkg.name)}`}
                        variant={pkg.tier === 'popular' || pkg.tier === 'elite' ? 'primary' : 'outline'}
                        fullWidth
                      >
                        {pkg.ctaLabel ?? 'Get Started'}
                      </Button>
                    </footer>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={[styles.compareContainer, isAdaptiveFull ? styles['compareContainer--fullBleed'] : ''].join(' ')}>
          <div className={styles.compareWrapper}>
            <div className={styles.mobileScrollHint}>
              Swipe to compare packages →
            </div>
            <table className={styles.compareTable}>
              <thead>
                <tr className={styles.stickyHeader}>
                  <th className={styles.featureTh}>Features & Services</th>
                  {packages.map((pkg, i) => (
                    <th key={i} className={[
                      styles.packageTh,
                      styles[`col--${pkg.tier || 'standard'}`],
                      pkg.highlight ? styles.highlightCol : '',
                    ].join(' ')}>
                      {pkg.tier === 'popular' && (
                        <div className={styles.popularRibbon}>★ Most Popular</div>
                      )}
                      {pkg.tier === 'value' && pkg.highlight && (
                        <div className={styles.valueRibbon}>◆ Best Value</div>
                      )}
                      {pkg.tier === 'elite' && (
                        <div className={styles.eliteRibbon}>✦ Signature</div>
                      )}
                      <div className={styles.thContent}>
                        <span className={styles.thName}>{pkg.name}</span>
                        <span className={styles.thPrice}>{getPrice(pkg)}</span>
                        <div className={styles.thAction}>
                           <Button
                            href={`${ctaHref}?package=${encodeURIComponent(pkg.name)}`}
                            variant={pkg.tier === 'popular' || pkg.tier === 'elite' || (pkg.tier === 'value' && pkg.highlight) ? 'primary' : 'outline'}
                            size="sm"
                            fullWidth
                          >
                            Choose
                          </Button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
                {/* Summary Row */}
                <tr className={styles.summaryRow}>
                   <td className={styles.featureName}>Recommendation</td>
                   {packages.map((pkg, i) => (
                      <td key={i} className={[styles.summaryCell, styles[`col--${pkg.tier || 'standard'}`], pkg.highlight ? styles.highlightCol : ''].join(' ')}>
                         {pkg.bestForNote || pkg.bestFor}
                      </td>
                   ))}
                </tr>
              </thead>
              <tbody>
                {visibleCategories.map((cat: { category: string; items: string[] }, ci: number) => (
                  <React.Fragment key={ci}>
                    <tr className={styles.categoryRow}>
                      <td colSpan={packages.length + 1}>{cat.category}</td>
                    </tr>
                    {cat.items.map((item: string, fi: number) => (
                      <tr key={fi} className={styles.featureRow}>
                        <td className={styles.featureName}>{item}</td>
                        {packages.map((pkg, pi) => {
                          const catFeatures = pkg.categorizedFeatures?.find(cf => cf.category === cat.category)
                          const rawItem = catFeatures?.items.find(i => getItemName(i) === item)
                          const hasFeature = !!rawItem
                          const featureValue = rawItem && typeof rawItem === 'object' ? rawItem.value : undefined
                          const tier = pkg.tier || 'standard';

                          return (
                            <td key={pi} className={[
                              styles.featureCell,
                              styles[`col--${tier}`],
                              pkg.highlight ? styles.highlightCol : '',
                            ].join(' ')}>
                              {hasFeature ? (
                                featureValue ? (
                                  <span className={[styles.featureValue, styles[`featureValue--${tier}`]].join(' ')}>
                                    {featureValue}
                                  </span>
                                ) : (
                                  <span className={[styles.check, styles[`check--${tier}`]].join(' ')}>
                                    {tier === 'elite' ? '✦' : '✓'}
                                  </span>
                                )
                              ) : (
                                <span className={styles.dash}>—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            
            {!isAdaptiveMedium && allFeaturesAcrossCategories.length > 2 && (
              <div className={styles.tableToggle}>
                {isTableExpanded ? (
                  <Button onClick={() => setIsTableExpanded(false)} variant="outline">
                    Show Less ↑
                  </Button>
                ) : (
                  <Button onClick={() => setIsTableExpanded(true)} variant="outline">
                    Show Full Comparison (+{allFeaturesAcrossCategories.length - 2} Categories)
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.pricingFooter}>
        <p>Need a custom tailored solution? <Link href="/contact">Request a Custom Quote &rarr;</Link></p>
        {!isAdaptiveSimple && viewMode === 'grid' && (
          <p className={styles.hybridCta}>
            Not finding the perfect match? <Link href="/contact">Request a tailored proposal</Link> for your specific needs.
          </p>
        )}
      </div>
    </div>
  )
}
