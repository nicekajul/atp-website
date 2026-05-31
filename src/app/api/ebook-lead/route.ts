import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { ebookLeadNotification, ebookLeadAutoReply } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'

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
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[ebook-lead] error', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
