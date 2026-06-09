const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://authorstranquilitypress.com'
const LOGO_URL = `${SITE_URL}/ATP-Logo-Horizontal-Light.png`

const NAVY  = '#0f1f3d'
const GOLD  = '#c9a84c'
const CREAM = '#f7f4ef'
const TEXT  = '#1a1a2e'
const MUTED = '#6b7280'

// ── Shared shell ─────────────────────────────────────────────────────────────
function shell(preheader: string, body: string): string {
  return /* html */`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Author's Tranquility Press</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${CREAM};font-family:'Georgia',serif;">
  <!-- Preheader -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${preheader}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${CREAM};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10);">

          <!-- Header — full logo -->
          <tr>
            <td style="background-color:${NAVY};padding:32px 40px 28px;text-align:center;">
              <a href="${SITE_URL}" style="display:inline-block;">
                <img src="${LOGO_URL}" alt="Author's Tranquility Press" width="280" height="70"
                     style="display:block;width:280px;height:auto;max-width:100%;" />
              </a>
              <div style="margin-top:24px;height:2px;background:linear-gradient(90deg,transparent,${GOLD},transparent);"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer — full logo -->
          <tr>
            <td style="background-color:${NAVY};padding:32px 40px 28px;text-align:center;">
              <a href="${SITE_URL}" style="display:inline-block;margin-bottom:20px;">
                <img src="${LOGO_URL}" alt="Author's Tranquility Press" width="220" height="55"
                     style="display:block;width:220px;height:auto;max-width:100%;" />
              </a>
              <div style="height:1px;background:rgba(201,168,76,0.3);margin-bottom:20px;"></div>
              <p style="margin:0 0 6px;color:rgba(255,255,255,0.65);font-size:14px;font-family:Arial,sans-serif;">
                support@authorstranquilitypress.com
              </p>
              <p style="margin:0 0 20px;color:rgba(255,255,255,0.65);font-size:14px;font-family:Arial,sans-serif;">
                authorstranquilitypress.com
              </p>
              <div style="height:1px;background:rgba(201,168,76,0.2);margin-bottom:16px;"></div>
              <p style="margin:0;color:rgba(255,255,255,0.35);font-size:12px;font-family:Arial,sans-serif;">
                &copy; ${new Date().getFullYear()} Author's Tranquility Press. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function fieldRow(label: string, value: string): string {
  if (!value?.trim()) return ''
  return /* html */`
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #f0ebe3;vertical-align:top;">
      <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.07em;color:${MUTED};font-family:Arial,sans-serif;margin-bottom:3px;">${label}</span>
      <span style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.5;">${value}</span>
    </td>
  </tr>`
}

function section(title: string, rows: string): string {
  return /* html */`
  <div style="background:#fafaf8;border-radius:8px;border:1px solid #e8e0d5;padding:20px 24px;margin-bottom:24px;">
    <p style="margin:0 0 14px;font-size:12px;text-transform:uppercase;letter-spacing:0.09em;color:${GOLD};font-weight:700;font-family:Arial,sans-serif;">${title}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
  </div>`
}

function badge(text: string): string {
  return /* html */`<span style="display:inline-block;background:${GOLD};color:#fff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;font-family:Arial,sans-serif;letter-spacing:0.04em;">${text}</span>`
}

function cta(label: string, href: string): string {
  return /* html */`
  <div style="text-align:center;margin-top:28px;">
    <a href="${href}" style="display:inline-block;background:${GOLD};color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:6px;text-decoration:none;font-family:Arial,sans-serif;letter-spacing:0.04em;">${label}</a>
  </div>`
}

function heading(text: string): string {
  return /* html */`<h2 style="margin:0 0 6px;font-size:24px;color:${NAVY};font-family:'Georgia',serif;">${text}</h2>`
}

function subtext(text: string): string {
  return /* html */`<p style="margin:0 0 28px;font-size:14px;color:${MUTED};font-family:Arial,sans-serif;line-height:1.6;">${text}</p>`
}

function divider(): string {
  return `<div style="height:1px;background:linear-gradient(90deg,transparent,${GOLD},transparent);margin:28px 0;"></div>`
}

// ── Contact form ──────────────────────────────────────────────────────────────
export function contactNotification(data: {
  name: string; email: string; phone?: string; interest?: string; message: string
}): { subject: string; html: string } {
  const body = /* html */`
${heading('New Contact Inquiry')}
    ${subtext(`Submitted ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })} · Requires a response within 1 business day`)}
    ${section('Sender Details',
      fieldRow('Full Name', data.name) +
      fieldRow('Email', data.email) +
      fieldRow('Phone', data.phone ?? '') +
      fieldRow('Interested In', data.interest ?? '')
    )}
    ${section('Message', fieldRow('', data.message))}
    ${divider()}
    <p style="margin:0;font-size:13px;color:${MUTED};font-family:Arial,sans-serif;text-align:center;">
      Reply directly to this email to respond to ${data.name.split(' ')[0]}.
    </p>
    ${cta('Open Inbox', `mailto:${data.email}`)}
  `
  return {
    subject: `New Contact Inquiry — ${data.name}${data.interest ? ` (${data.interest})` : ''}`,
    html: shell(`New message from ${data.name} — ${data.interest || 'General Inquiry'}`, body),
  }
}

export function contactAutoReply(data: { name: string; email: string }): { subject: string; html: string } {
  const firstName = data.name.split(' ')[0]
  const body = /* html */`
    ${heading(`We've received your message, ${firstName}!`)}
    ${subtext('Thank you for reaching out to Author\'s Tranquility Press.')}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
      One of our publishing consultants will review your inquiry and get back to you within <strong>one business day</strong>.
      In the meantime, feel free to explore our services or take our publishing quiz to discover the perfect package for your book.
    </p>
    ${divider()}
    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:${NAVY};font-family:Arial,sans-serif;">Here's a quick summary of your message:</p>
    ${section('Your Submission', fieldRow('Name', data.name) + fieldRow('Email', data.email))}
    ${cta('Find Your Perfect Package →', `${SITE_URL}/quiz`)}
    <p style="margin:20px 0 0;font-size:12px;color:${MUTED};font-family:Arial,sans-serif;text-align:center;">
      If you have urgent questions, reply directly to this email.
    </p>
  `
  return {
    subject: `We received your message — Author's Tranquility Press`,
    html: shell(`We'll be in touch shortly, ${firstName}!`, body),
  }
}

// ── Inline lead form ──────────────────────────────────────────────────────────
export function leadNotification(data: {
  name: string; email: string; title?: string; service?: string; websiteGoals?: string; message?: string
}): { subject: string; html: string } {
  const body = /* html */`
${heading('New Lead Inquiry')}
    ${subtext(`Submitted ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}`)}
    ${section('Lead Details',
      fieldRow('Full Name', data.name) +
      fieldRow('Email', data.email) +
      fieldRow('Book / Project Title', data.title ?? '') +
      fieldRow('Service of Interest', data.service ?? '') +
      fieldRow('Website Goals', data.websiteGoals ?? '')
    )}
    ${data.message ? section('Message', fieldRow('', data.message)) : ''}
    ${cta('Reply to Lead', `mailto:${data.email}`)}
  `
  return {
    subject: `New Lead — ${data.name}${data.service ? ` · ${data.service}` : ''}`,
    html: shell(`New lead from ${data.name}`, body),
  }
}

export function leadAutoReply(data: { name: string; email: string; service?: string }): { subject: string; html: string } {
  const firstName = data.name.split(' ')[0]
  const body = /* html */`
    ${heading(`Thanks for reaching out, ${firstName}!`)}
    ${subtext('Your inquiry has been received by our team at Author\'s Tranquility Press.')}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
      We're excited to learn more about your project${data.service ? ` and your interest in <strong>${data.service}</strong>` : ''}.
      A member of our team will reach out to you within <strong>24 hours</strong> to discuss the next steps.
    </p>
    ${divider()}
    <p style="margin:0 0 16px;font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;">
      While you wait, take our free publishing quiz to get a personalised package recommendation tailored to your goals and budget.
    </p>
    ${cta('Take the Publishing Quiz →', `${SITE_URL}/quiz`)}
    <p style="margin:20px 0 0;font-size:12px;color:${MUTED};font-family:Arial,sans-serif;text-align:center;">
      Questions? Reply to this email and we'll get right back to you.
    </p>
  `
  return {
    subject: `We received your inquiry — Author's Tranquility Press`,
    html: shell(`We'll be in touch within 24 hours, ${firstName}!`, body),
  }
}

// ── Quiz lead capture ─────────────────────────────────────────────────────────
export function quizLeadNotification(data: {
  name: string; email: string; phone?: string; recommendedPackage: string
}): { subject: string; html: string } {
  const body = /* html */`
${heading('New Quiz Lead')}
    ${subtext(`${data.name} completed the Publishing Quiz and was matched with a package.`)}
    <div style="text-align:center;margin-bottom:28px;">
      <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:${MUTED};font-family:Arial,sans-serif;">Recommended Package</p>
      ${badge(data.recommendedPackage)}
    </div>
    ${section('Lead Details',
      fieldRow('Full Name', data.name) +
      fieldRow('Email', data.email) +
      fieldRow('Phone', data.phone ?? '')
    )}
    ${cta('Reply to Lead', `mailto:${data.email}`)}
  `
  return {
    subject: `Quiz Lead — ${data.name} matched to ${data.recommendedPackage}`,
    html: shell(`${data.name} completed the quiz and matched with ${data.recommendedPackage}`, body),
  }
}

export function quizLeadAutoReply(data: {
  name: string; email: string; recommendedPackage: string
}): { subject: string; html: string } {
  const firstName = data.name.split(' ')[0]
  const body = /* html */`
    ${heading(`Your publishing match is ready, ${firstName}!`)}
    ${subtext('You\'ve completed the Author\'s Tranquility Press Publishing Quiz.')}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 8px;">
      Based on your answers, our recommendation for you is:
    </p>
    <div style="text-align:center;margin:20px 0 28px;">
      ${badge(data.recommendedPackage)}
    </div>
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
      One of our publishing consultants will reach out within <strong>one business day</strong> to walk you through everything included in this package and answer any questions you have.
    </p>
    ${divider()}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
      In the meantime, explore the full details of your recommended package on our services page.
    </p>
    ${cta('View Package Details →', `${SITE_URL}/services/publishing-packages`)}
    <p style="margin:20px 0 0;font-size:12px;color:${MUTED};font-family:Arial,sans-serif;text-align:center;">
      Questions? Reply to this email — we're here to help.
    </p>
  `
  return {
    subject: `Your publishing match: ${data.recommendedPackage} — Author's Tranquility Press`,
    html: shell(`You matched with the ${data.recommendedPackage} package!`, body),
  }
}

// ── Ebook / Free Guide popup ──────────────────────────────────────────────────
export function ebookLeadNotification(data: {
  name: string; email: string
}): { subject: string; html: string } {
  const body = /* html */`
${heading('New Free Guide Download')}
    ${subtext(`Submitted ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}`)}
    ${section('Lead Details',
      fieldRow('Full Name', data.name) +
      fieldRow('Email', data.email)
    )}
    ${cta('Reply to Lead', `mailto:${data.email}`)}
  `
  return {
    subject: `Free Guide Download — ${data.name}`,
    html: shell(`${data.name} downloaded the free Author's Publishing Guide`, body),
  }
}

export function ebookLeadAutoReply(data: {
  name: string; email: string
}): { subject: string; html: string } {
  const firstName = data.name.split(' ')[0]
  const guideUrl  = `${SITE_URL}/ATP_Authors_Publishing_Guide.pdf`
  const body = /* html */`
    ${heading(`Your free guide is ready, ${firstName}!`)}
    ${subtext("Thank you for downloading the Author's Publishing Guide.")}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 24px;">
      Click the button below to download your copy instantly. You can also bookmark the link and access it any time.
    </p>
    ${cta('Download Your Free Guide →', guideUrl)}
    ${divider()}
    <p style="font-size:14px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 8px;font-weight:600;">
      What's inside the guide:
    </p>
    <ul style="margin:0 0 24px;padding-left:20px;color:${TEXT};font-family:Arial,sans-serif;font-size:14px;line-height:1.8;">
      <li>Step-by-step manuscript-to-market roadmap</li>
      <li>How to choose the right publishing package</li>
      <li>Marketing strategies that actually work for authors</li>
      <li>Insider tips from our publishing consultants</li>
    </ul>
    ${cta('Take the Publishing Quiz →', `${SITE_URL}/quiz`)}
    <p style="margin:20px 0 0;font-size:12px;color:${MUTED};font-family:Arial,sans-serif;text-align:center;">
      Questions? Reply to this email — we're happy to help.
    </p>
  `
  return {
    subject: `Your free Author's Publishing Guide — Author's Tranquility Press`,
    html: shell(`Download your free guide now, ${firstName}!`, body),
  }
}

// ── Newsletter ────────────────────────────────────────────────────────────────
export function newsletterNotification(data: {
  email: string
}): { subject: string; html: string } {
  const body = /* html */`
${heading('New Newsletter Subscriber')}
    ${subtext(`Submitted ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}`)}
    ${section('Subscriber Details', fieldRow('Email', data.email))}
    ${cta('Reply to Subscriber', `mailto:${data.email}`)}
  `
  return {
    subject: `New Newsletter Subscriber — ${data.email}`,
    html: shell(`New subscriber: ${data.email}`, body),
  }
}

export function newsletterConfirmation(data: {
  email: string
}): { subject: string; html: string } {
  const body = /* html */`
    ${heading("You're on the list!")}
    ${subtext("Thank you for subscribing to the Author's Tranquility Press newsletter.")}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
      You'll be the first to know about publishing tips, exclusive free resources, author success stories, and special offers from our team.
    </p>
    ${divider()}
    <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
      While you wait for your first issue, take our free publishing quiz to discover the perfect package for your book.
    </p>
    ${cta('Find Your Publishing Path →', `${SITE_URL}/quiz`)}
    <p style="margin:20px 0 0;font-size:12px;color:${MUTED};font-family:Arial,sans-serif;text-align:center;">
      To unsubscribe, reply to this email with "unsubscribe" in the subject line.
    </p>
  `
  return {
    subject: `You're subscribed — Author's Tranquility Press`,
    html: shell("Welcome to the ATP newsletter!", body),
  }
}
