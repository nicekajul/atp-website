/**
 * Appends a row to the leads Google Sheet via the Apps Script webhook.
 * Fails silently — a Sheets error should never block email delivery.
 */
export async function logToLeadsSheet(data: Record<string, string>): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_LEADS_WEBHOOK_URL
  if (!url) return

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
    })
    if (!res.ok) console.error('[sheets] webhook error', res.status, await res.text())
  } catch (err) {
    console.error('[sheets] fetch error', err)
  }
}
