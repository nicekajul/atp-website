export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { leadNotification, leadAutoReply } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, title, service, websiteGoals, message } = body

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const notification = leadNotification({ name, email, title, service, websiteGoals, message })
  const autoReply    = leadAutoReply({ name, email, service })

  try {
    await Promise.all([
      sendMail({ to: TO_ADDRESS, replyTo: email, ...notification }),
      sendMail({ to: email, ...autoReply }),
      logToLeadsSheet({ source: 'Lead Form', name, email, bookTitle: title ?? '', service: service ?? '', message: message ?? '' }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[lead] error', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
