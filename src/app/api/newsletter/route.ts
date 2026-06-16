import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { newsletterNotification, newsletterConfirmation } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'
import { verifyTurnstile } from '@/lib/turnstile'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, website, turnstileToken } = body

  if (website) return NextResponse.json({ ok: true })

  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  if (!await verifyTurnstile(turnstileToken)) {
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
  }

  const notification = newsletterNotification({ email })
  const confirmation = newsletterConfirmation({ email })

  try {
    await Promise.all([
      logToLeadsSheet({ source: 'Footer Newsletter', email }),
      sendMail({ to: TO_ADDRESS, replyTo: email, ...notification }),
      sendMail({ to: email, ...confirmation }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter] error', err)
    return NextResponse.json({ error: 'Failed to process subscription.' }, { status: 500 })
  }
}
