/**
 * Auto-formats a US phone number as the user types.
 * Strips non-digits, drops a leading country code "1", then
 * builds: (XXX) XXX-XXXX
 * Safe for Google Sheets — no leading + that Sheets mistakes for a formula.
 */
export function formatPhoneUS(raw: string): string {
  let digits = raw.replace(/\D/g, '')

  // Drop leading country code "1" only when 11 digits were entered
  if (digits.length === 11 && digits.startsWith('1')) {
    digits = digits.slice(1)
  }

  // Cap at 10 digits
  digits = digits.slice(0, 10)

  if (digits.length === 0) return ''
  if (digits.length <= 3)  return `(${digits}`
  if (digits.length <= 6)  return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}
