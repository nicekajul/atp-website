import React from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  return (
    <header
      className={[
        styles.header,
        styles[`align--${align}`],
        styles[`theme--${theme}`],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.heading}>{heading}</h2>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
    </header>
  )
}
