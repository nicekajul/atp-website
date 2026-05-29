import React from 'react'
import styles from './Badge.module.css'

type BadgeVariant = 'gold' | 'navy' | 'cream' | 'muted'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export default function Badge({
  children,
  variant = 'gold',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[styles.badge, styles[`badge--${variant}`], className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
