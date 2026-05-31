import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { newsletterNotification, newsletterConfirmation } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email } = body

  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
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
