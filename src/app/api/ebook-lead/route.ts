import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { ebookLeadNotification, ebookLeadAutoReply } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'

function generateDownloadToken(email: string): string {
  const secret = process.env.DOWNLOAD_SECRET ?? 'atp-fallback-secret'
  const payload = Buffer.from(email.toLowerCase()).toString('base64url')
  const sig = createHmac('sha256', secret).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email } = body

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const notification = ebookLeadNotification({ name, email })
  const autoReply    = ebookLeadAutoReply({ name, email })

  try {
    await Promise.all([
      sendMail({ to: TO_ADDRESS, replyTo: email, ...notification }),
      sendMail({ to: email, ...autoReply }),
      logToLeadsSheet({ source: 'Free Guide Popup', name, email }),
    ])
    return NextResponse.json({ ok: true, downloadToken: generateDownloadToken(email) })
  } catch (err) {
    console.error('[ebook-lead] error', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
