'use client'

import { useState, useMemo } from 'react'
import styles from './tools.module.css'

const PLATFORMS = {
  kdp:    { label: 'Amazon KDP',    ebookRate: null,  printRate: 0.60 },
  ingram: { label: 'IngramSpark',   ebookRate: 0.40,  printRate: 0.45 },
}

const SALES_VOLUMES = [50, 100, 250, 500, 1000]

export default function RoyaltyCalc() {
  const [listPrice,    setListPrice]    = useState(14.99)
  const [printingCost, setPrintingCost] = useState(4.50)
  const [platform,     setPlatform]     = useState<'kdp' | 'ingram'>('kdp')
  const [format,       setFormat]       = useState<'print' | 'ebook'>('print')

  const { royaltyPerSale, note } = useMemo(() => {
    if (format === 'ebook') {
      if (platform === 'kdp') {
        const rate = listPrice >= 2.99 && listPrice <= 9.99 ? 0.70 : 0.35
        return {
          royaltyPerSale: +(listPrice * rate).toFixed(2),
          note: `KDP eBook: ${rate * 100}% royalty (${listPrice >= 2.99 && listPrice <= 9.99 ? '$2.99–$9.99 range' : 'outside $2.99–$9.99'})`,
        }
      } else {
        return {
          royaltyPerSale: +(listPrice * PLATFORMS.ingram.ebookRate!).toFixed(2),
          note: 'IngramSpark eBook: 40% royalty',
        }
      }
    } else {
      const rate = PLATFORMS[platform].printRate
      const royalty = +(listPrice * rate - printingCost).toFixed(2)
      return {
        royaltyPerSale: Math.max(0, royalty),
        note: `${PLATFORMS[platform].label} Print: ${rate * 100}% × list price − printing cost`,
      }
    }
  }, [listPrice, printingCost, platform, format])

  return (
    <div className={styles.toolBody}>
      <div className={styles.row2}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Platform</label>
          <div className={styles.pills}>
            {(['kdp','ingram'] as const).map(p => (
              <button key={p} className={`${styles.pill} ${platform === p ? styles.pillActive : ''}`}
                onClick={() => setPlatform(p)}>
                {PLATFORMS[p].label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Format</label>
          <div className={styles.pills}>
            {(['print','ebook'] as const).map(f => (
              <button key={f} className={`${styles.pill} ${format === f ? styles.pillActive : ''}`}
                onClick={() => setFormat(f)}>
                {f === 'print' ? 'Print' : 'eBook'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>List Price</label>
          <div className={styles.inputPrefix}>
            <span>$</span>
            <input type="number" min={0.99} max={99.99} step={0.50}
              value={listPrice} onChange={e => setListPrice(+e.target.value)}
              className={styles.numberInput} />
          </div>
        </div>
        {format === 'print' && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Printing Cost</label>
            <div className={styles.inputPrefix}>
              <span>$</span>
              <input type="number" min={0} max={30} step={0.25}
                value={printingCost} onChange={e => setPrintingCost(+e.target.value)}
                className={styles.numberInput} />
            </div>
          </div>
        )}
      </div>

      <div className={styles.result}>
        <p className={styles.resultLabel}>Royalty Per Sale</p>
        <p className={styles.resultValue}>${royaltyPerSale.toFixed(2)}</p>
        <p className={styles.resultNote}>{note}</p>
        <div className={styles.breakdown}>
          <div className={styles.breakdownRow} style={{ fontWeight: 700, marginBottom: '0.25rem' }}>
            <span>Monthly Sales</span><span>Estimated Income</span>
          </div>
          {SALES_VOLUMES.map(v => (
            <div key={v} className={styles.breakdownRow}>
              <span>{v} copies/mo</span>
              <span>${(royaltyPerSale * v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
