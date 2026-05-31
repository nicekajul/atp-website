import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { logToLeadsSheet } from '@/lib/email/sheets'

function verifyDownloadToken(token: string): string | null {
  const parts = token.split('.')
  if (parts.length !== 2) return null
  const [payload, sig] = parts
  const secret = process.env.DOWNLOAD_SECRET ?? 'atp-fallback-secret'
  const expected = createHmac('sha256', secret).update(payload).digest('base64url')
  try {
    const match = timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
    if (!match) return null
  } catch {
    return null
  }
  return Buffer.from(payload, 'base64url').toString('utf-8')
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')?.trim()

  if (!token) {
    return NextResponse.json({ error: 'Missing download token.' }, { status: 400 })
  }

  const email = verifyDownloadToken(token)
  if (!email) {
    return NextResponse.json({ error: 'Invalid or expired download token.' }, { status: 403 })
  }

  await logToLeadsSheet({ source: 'Free Guide Download', email })
  return NextResponse.json({ ok: true })
}
