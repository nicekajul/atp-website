export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'
import { logToLeadsSheet } from '@/lib/email/sheets'

// Edge-compatible in-memory tracker (resets on cold start — Sheets log is the durable audit trail)
const downloaded = new Set<string>()

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')?.trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  if (downloaded.has(email.toLowerCase())) {
    await logToLeadsSheet({ source: 'Free Guide Download - Limit Reached', email })
    return NextResponse.json({ error: 'limit_reached' }, { status: 429 })
  }

  downloaded.add(email.toLowerCase())
  await logToLeadsSheet({ source: 'Free Guide Download', email })
  return NextResponse.json({ ok: true })
}
