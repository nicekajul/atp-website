import { NextRequest, NextResponse } from 'next/server'
import { sendMail, TO_ADDRESS } from '@/lib/email/mailer'
import { quizLeadNotification, quizLeadAutoReply } from '@/lib/email/template'
import { logToLeadsSheet } from '@/lib/email/sheets'
import { verifyTurnstile } from '@/lib/turnstile'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, recommendedPackage, website, turnstileToken } = body

  if (website) return NextResponse.json({ ok: true })

  if (!name?.trim() || !email?.trim() || !recommendedPackage) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (!await verifyTurnstile(turnstileToken)) {
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
  }

  const notification = quizLeadNotification({ name, email, phone, recommendedPackage })
  const autoReply    = quizLeadAutoReply({ name, email, recommendedPackage })

  try {
    await Promise.all([
      sendMail({ to: TO_ADDRESS, replyTo: email, ...notification }),
      sendMail({ to: email, ...autoReply }),
      logToLeadsSheet({ source: 'Publishing Quiz', name, email, phone: phone ?? '', recommendedPackage }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[quiz-lead] error', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
