// Seasonal campaigns shared across the site (top bar, homepage, pricing, contact form).
// Each promo turns itself on and off by date, so nothing needs removing afterwards.
// Dates are Eastern Time (EST is UTC-5 in November).

/** Veterans Day 2026 greeting and book card: show through Nov 30 */
export const VETERANS_DAY_PROMO_END = new Date('2026-12-01T00:00:00-05:00')

export const BLACK_FRIDAY = {
  /** Sent from promo links to the contact form and recorded on the lead */
  code: 'black-friday-bogo',
  label: 'Black Friday BOGO',
  start: new Date('2026-11-12T00:00:00-05:00'),
  /** Offer ends at 11:59 PM EST on Nov 27 */
  end: new Date('2026-11-28T00:00:00-05:00'),
  endLabel: 'November 27, 2026',
  serviceSlug: 'publishing-packages',
  /** Buying one of these gets a second package of the same tier free */
  eligiblePackages: ['Execution', 'Expansion', 'Authority', 'Integrative'],
  terms: 'Offer valid November 12 to 27, 2026 (ends 11:59 PM EST). Applies to the Execution, Expansion, Authority, and Integrative Publishing Packages. The free package is the same tier as the package purchased. Terms apply; contact us for details.',
} as const

/** Promo codes the contact form accepts, mapped to the label shown on the lead */
export const PROMO_LABELS: Record<string, string> = {
  [BLACK_FRIDAY.code]: BLACK_FRIDAY.label,
}

/** Label for a promo code sent with a form, or '' if unknown; flags codes sent after the offer ended */
export function describeOffer(promo: unknown, now = Date.now()): string {
  if (typeof promo !== 'string' || !PROMO_LABELS[promo]) return ''
  const label = PROMO_LABELS[promo]
  if (promo === BLACK_FRIDAY.code && !isBlackFridayActive(now)) return `${label} (sent after the offer ended)`
  return label
}

export function isPromoActive(end: Date, start?: Date, now = Date.now()): boolean {
  return now < end.getTime() && (!start || now >= start.getTime())
}

export function isBlackFridayActive(now = Date.now()): boolean {
  return isPromoActive(BLACK_FRIDAY.end, BLACK_FRIDAY.start, now)
}

export function isBlackFridayPackage(name: string): boolean {
  return (BLACK_FRIDAY.eligiblePackages as readonly string[]).includes(name)
}

export const BLACK_FRIDAY_HREF = `/services/${BLACK_FRIDAY.serviceSlug}`
export const BLACK_FRIDAY_CONTACT_HREF = `/contact?promo=${BLACK_FRIDAY.code}`

/** Whole days left in Eastern Time: 0 on the last day */
export function blackFridayDaysLeft(now = Date.now()): number {
  const DAY = 86_400_000
  const EST_OFFSET = 5 * 3_600_000
  const today = Math.floor((now - EST_OFFSET) / DAY)
  const lastDay = Math.floor((BLACK_FRIDAY.end.getTime() - 1 - EST_OFFSET) / DAY)
  return lastDay - today
}

/** "Ends Nov 27", "Ends tomorrow" or "Last day!" */
export function blackFridayDeadlineText(now = Date.now()): string {
  const days = blackFridayDaysLeft(now)
  if (days <= 0) return 'Last day!'
  if (days === 1) return 'Ends tomorrow'
  return `Ends Nov 27 (${days} days left)`
}
