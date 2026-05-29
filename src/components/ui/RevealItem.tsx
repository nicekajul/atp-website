'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface RevealItemProps {
  children: ReactNode
  className?: string
  /** Delay in milliseconds before the reveal transition starts */
  delay?: number
}

/**
 * Wraps children in a div that fades/slides in when it enters the viewport.
 * Uses IntersectionObserver — fires once and disconnects.
 */
export default function RevealItem({ children, className = '', delay = 0 }: RevealItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
