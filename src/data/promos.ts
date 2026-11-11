// Seasonal campaign dates shared by PromoBar and BookPromo.
// Each promo hides itself once its end date passes.

/** Veterans Day 2026: shows through Nov 30 (ends at midnight local time) */
export const VETERANS_DAY_PROMO_END = new Date(2026, 11, 1)

export function isPromoActive(end: Date): boolean {
  return Date.now() < end.getTime()
}
