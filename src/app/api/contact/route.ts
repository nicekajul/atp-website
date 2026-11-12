import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { contactNotification, contactAutoReply } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'
import { verifyTurnstile } from '@/lib/turnstile'
import { services } from '@/data/services'
import { describeOffer } from '@/data/promos'

const PACKAGE_NAMES = new Set(services.flatMap((s) => s.packages.map((p) => p.name)))

/** Package and offer carried from pricing/promo links; only known values are kept */
function describeSelection(pkg: unknown, promo: unknown): { pkg: string; offer: string } {
  const pkgName = typeof pkg === 'string' && PACKAGE_NAMES.has(pkg) ? pkg : ''
  return { pkg: pkgName, offer: describeOffer(promo) }
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, interest, message, website, turnstileToken, package: pkg, promo } = body

  // Honeypot - bots fill this, humans don't; silent drop so bots think they succeeded
  if (website) return NextResponse.json({ ok: true })

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (!await verifyTurnstile(turnstileToken)) {
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
  }

  const selection    = describeSelection(pkg, promo)
  const notification = contactNotification({ name, email, phone, interest, message, package: selection.pkg, offer: selection.offer })
  const autoReply    = contactAutoReply({ name, email })

  try {
    await Promise.all([
      sendMail({ to: TO_ADDRESS, replyTo: email, ...notification }),
      sendMail({ to: email, ...autoReply }),
      logToLeadsSheet({ source: 'Contact Form', name, email, phone: phone ?? '', interest: [interest, selection.pkg && `Package: ${selection.pkg}`, selection.offer && `Offer: ${selection.offer}`].filter(Boolean).join(' | '), message }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
