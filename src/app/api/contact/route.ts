import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { contactNotification, contactAutoReply } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'
import { verifyTurnstile } from '@/lib/turnstile'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, interest, message, website, turnstileToken } = body

  // Honeypot — bots fill this, humans don't; silent drop so bots think they succeeded
  if (website) return NextResponse.json({ ok: true })

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (!await verifyTurnstile(turnstileToken)) {
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
  }

  const notification = contactNotification({ name, email, phone, interest, message })
  const autoReply    = contactAutoReply({ name, email })

  try {
    await Promise.all([
      sendMail({ to: TO_ADDRESS, replyTo: email, ...notification }),
      sendMail({ to: email, ...autoReply }),
      logToLeadsSheet({ source: 'Contact Form', name, email, phone: phone ?? '', interest: interest ?? '', message }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
