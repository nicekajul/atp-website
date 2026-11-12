'use client'

import { useEffect, useState } from 'react'
import { isBlackFridayActive } from '@/data/promos'

/**
 * Client-side check for Black Friday UI on statically built pages: false during
 * the server render, then the real answer after mount, so a cached page can't
 * keep showing an expired offer.
 */
export function useBlackFridayActive(): boolean {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(isBlackFridayActive())
  }, [])
  return active
}
