const RESEND_API = 'https://api.resend.com/emails'

export const FROM       = 'Authors Tranquility Press <webdev@authorstranquilitypress.com>'
export const TO_ADDRESS = 'webdev@authorstranquilitypress.com'

interface MailOptions {
  to: string
  replyTo?: string
  subject: string
  html: string
}

export async function sendMail(opts: MailOptions): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('[mailer] RESEND_API_KEY is not set')

  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from:     FROM,
      to:       [opts.to],
      reply_to: opts.replyTo,
      subject:  opts.subject,
      html:     opts.html,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`[mailer] Resend error ${res.status}: ${text}`)
  }
}
