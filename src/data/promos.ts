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
  /** One-line summary shown under the offer; the full list is in termsDetails */
  terms: 'Offer valid November 12 to 27, 2026 (ends 11:59 PM EST) on the Execution, Expansion, Authority, and Integrative Publishing Packages. The free package is the same tier as the package purchased. Available with full payment or two installments.',
  termsDetails: [
    { title: 'Eligible packages', text: 'Buy an Execution, Expansion, Authority, or Integrative Publishing Package and receive a second package of the exact same tier, free.' },
    { title: 'Transferable', text: 'The free package may be transferred to another author, including a spouse, family member, or friend, with written consent from the original package purchaser.' },
    { title: 'No deadline for your second book', text: 'There is no deadline to submit the manuscript for the free package. Start whenever your second book is ready.' },
    { title: 'Full payment', text: '100% of the package price must be paid on or before November 27, 2026. Both packages are activated once full payment is received.' },
    { title: 'Two installments', text: 'A 50% down payment is required, with the remaining 50% payable within 30 days. The free package is activated once the full payment has been completed.' },
    { title: 'Combine with other discounts', text: 'The offer may be combined with other applicable discounts, provided the required full payment for the purchased package is met.' },
    { title: 'Existing authors', text: 'Authors who purchased a package before November 12 also qualify by completing a new qualifying package upgrade during the promotional period.' },
  ],
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
