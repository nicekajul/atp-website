'use client'

import { useState } from 'react'
import styles from './docs.module.css'

type TemplateId = 'email' | 'word' | 'signature'

const SITE      = 'https://authorstranquilitypress.com'
const LOGO_LIGHT = `${SITE}/ATP-Logo-Horizontal-Light.png`
const LOGO_DARK  = `${SITE}/ATP-Logo-Horizontal-Dark.png`
const NAVY  = '#0F1B2D'
const GOLD  = '#C9A84C'
const CREAM = '#F8F5EF'
const TEXT  = '#2D3748'
const MUTED = '#718096'
const YEAR  = new Date().getFullYear()

// ── Email Template ────────────────────────────────────────────────────────────
function emailHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Author's Tranquility Press</title>
</head>
<body style="margin:0;padding:0;background-color:${CREAM};font-family:Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">[Preheader text — shows in inbox preview]</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${CREAM};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10);">

          <!-- Header -->
          <tr>
            <td style="background-color:${NAVY};padding:32px 40px 28px;text-align:center;">
              <a href="${SITE}" style="display:inline-block;">
                <img src="${LOGO_LIGHT}" alt="Author's Tranquility Press" width="280"
                     style="display:block;width:280px;height:auto;max-width:100%;"/>
              </a>
              <div style="margin-top:24px;height:2px;background:linear-gradient(90deg,transparent,${GOLD},transparent);"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">
              <h2 style="margin:0 0 8px;font-size:24px;color:${NAVY};font-family:Georgia,serif;">
                [Email Heading]
              </h2>
              <p style="margin:0 0 28px;font-size:14px;color:${MUTED};font-family:Arial,sans-serif;">
                Dear [Recipient Name],
              </p>

              <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
                [Main message — write the first paragraph of your email here. Keep it warm, clear, and professional.]
              </p>

              <p style="font-size:15px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.7;margin:0 0 20px;">
                [Second paragraph — add supporting details or context here. Delete if not needed.]
              </p>

              <!-- Optional CTA button — remove if not needed -->
              <div style="text-align:center;margin:28px 0;">
                <a href="#" style="display:inline-block;background:${GOLD};color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:6px;text-decoration:none;font-family:Arial,sans-serif;letter-spacing:0.04em;">
                  [Call to Action →]
                </a>
              </div>

              <div style="height:1px;background:linear-gradient(90deg,transparent,${GOLD},transparent);margin:28px 0;"></div>

              <p style="margin:0;font-size:14px;color:${TEXT};font-family:Arial,sans-serif;line-height:1.8;">
                Warm regards,<br/>
                <strong style="color:${NAVY};">[Your Full Name]</strong><br/>
                <span style="color:${MUTED};">[Your Title]</span><br/>
                Author's Tranquility Press
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${NAVY};padding:32px 40px 28px;text-align:center;">
              <a href="${SITE}" style="display:inline-block;margin-bottom:20px;">
                <img src="${LOGO_LIGHT}" alt="Author's Tranquility Press" width="220"
                     style="display:block;width:220px;height:auto;max-width:100%;"/>
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
                &copy; ${YEAR} Author's Tranquility Press. All rights reserved.
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

// ── Word / Letterhead Template ─────────────────────────────────────────────────
function wordHTML(): string {
  return `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="UTF-8"/>
  <title>Author's Tranquility Press — Letterhead</title>
  <style>
    @page { size:8.5in 11in; margin:0.9in 1.1in 0.9in 1.1in; }
    body { font-family:'Palatino Linotype',Georgia,serif; font-size:11pt; color:${TEXT}; line-height:1.65; }
    table { width:100%; border-collapse:collapse; }
    .hdr-logo { width:200px; }
    .hdr-meta { text-align:right; font-family:Arial,sans-serif; font-size:9pt; color:${MUTED}; vertical-align:bottom; }
    .divider-gold { border:none; border-top:2px solid ${GOLD}; margin:0 0 24pt; }
    .divider-thin  { border:none; border-top:1px solid ${GOLD}; margin:28pt 0 0; }
    p { margin:0 0 10pt; }
    .date { font-family:Arial,sans-serif; font-size:10pt; color:${MUTED}; margin-bottom:18pt; }
    .closing { margin-top:24pt; }
    .ftr { font-family:Arial,sans-serif; font-size:9pt; color:${MUTED}; padding-top:8pt; }
    .ftr-right { text-align:right; }
    strong { color:${NAVY}; }
    h1,h2 { font-family:'Palatino Linotype',Georgia,serif; color:${NAVY}; }
  </style>
</head>
<body>

  <!-- Header -->
  <table>
    <tr>
      <td class="hdr-logo">
        <img src="${LOGO_DARK}" alt="Author's Tranquility Press" width="200"/>
      </td>
      <td class="hdr-meta">
        [Date]<br/>
        [Reference / Document Title]
      </td>
    </tr>
  </table>
  <hr class="divider-gold"/>

  <!-- Date line -->
  <p class="date">[Full Date — e.g., June 10, 2026]</p>

  <!-- Recipient address -->
  <p>
    [Recipient Full Name]<br/>
    [Title, Organization]<br/>
    [Address Line 1]<br/>
    [City, State/Province, ZIP]
  </p>
  <p>&nbsp;</p>

  <!-- Salutation -->
  <p>Dear [Recipient Name],</p>
  <p>&nbsp;</p>

  <!-- Body -->
  <p>
    [Opening paragraph — state the purpose of this letter clearly and concisely.]
  </p>
  <p>
    [Body paragraph — provide supporting details, key information, or the main message.]
  </p>
  <p>
    [Closing paragraph — summarize and include any next steps or call to action.]
  </p>

  <!-- Sign-off -->
  <p class="closing">
    Sincerely,<br/><br/><br/>
    <strong>[Your Full Name]</strong><br/>
    [Your Title]<br/>
    Author's Tranquility Press<br/>
    support@authorstranquilitypress.com<br/>
    authorstranquilitypress.com
  </p>

  <!-- Footer rule -->
  <hr class="divider-thin"/>
  <table>
    <tr>
      <td class="ftr">Author's Tranquility Press &nbsp;&middot;&nbsp; support@authorstranquilitypress.com</td>
      <td class="ftr ftr-right">authorstranquilitypress.com</td>
    </tr>
  </table>

</body>
</html>`
}

// ── Email Signature ───────────────────────────────────────────────────────────
const LOGO_VERTICAL = `${SITE}/ATP-Logo-Vertical-Dark.png`

function signatureHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>ATP Email Signature</title>
  <style>
    body { margin:24px; background:#f0f0f0; font-family:Arial,sans-serif; }
    .note { font-size:11px; color:#888; margin-bottom:14px; font-style:italic; }
    .wrapper { background:#fff; display:inline-block; padding:24px; border-radius:8px; box-shadow:0 2px 12px rgba(0,0,0,0.08); }
  </style>
</head>
<body>
  <p class="note">Copy everything inside the box and paste it into your email client's signature editor (Gmail / Outlook).</p>
  <div class="wrapper">

    <!-- ===== SIGNATURE START ===== -->
    <table cellpadding="0" cellspacing="0" border="0"
           style="font-family:Arial,sans-serif;font-size:13px;line-height:1.55;color:${TEXT};max-width:580px;">

      <!-- Row 1: Logo + Info -->
      <tr>
        <!-- Left: vertical logo -->
        <td style="padding:0;vertical-align:middle;text-align:center;width:130px;">
          <div style="display:inline-block;padding-right:22px;border-right:3px solid ${GOLD};text-align:center;">
            <img src="${LOGO_VERTICAL}" alt="Author's Tranquility Press"
                 width="110" style="display:block;width:110px;height:auto;"/>
          </div>
        </td>

        <!-- Right: info -->
        <td style="padding-left:22px;padding-bottom:16px;vertical-align:top;">
          <!-- Name & title -->
          <p style="margin:0 0 1px;font-weight:700;font-size:15px;color:${NAVY};">
            [Your Full Name]
          </p>
          <p style="margin:0 0 10px;color:${MUTED};font-size:12px;">
            [Your Title]
          </p>

          <!-- Contact details -->
          <p style="margin:0 0 3px;font-size:12px;color:${TEXT};">
            &#128222;&nbsp;<a href="tel:+18664118655" style="color:${TEXT};text-decoration:none;">+1 (866) 411 8655</a>
          </p>
          <p style="margin:0 0 3px;font-size:12px;color:${TEXT};">
            &#9993;&nbsp;<a href="mailto:[YOUR_EMAIL]" style="color:${GOLD};text-decoration:none;">[your.name@authorstranquilitypress.com]</a>
          </p>
          <p style="margin:0 0 3px;font-size:12px;color:${TEXT};">
            &#127759;&nbsp;<a href="${SITE}" style="color:${GOLD};text-decoration:none;">www.authorstranquilitypress.com</a>
          </p>
          <p style="margin:0 0 14px;font-size:12px;color:${TEXT};">
            &#128205;&nbsp;531 Roselane Street NW Suite 400-175, Marietta, GA 30060
          </p>

          <!-- Google Review CTA -->
          <a href="[YOUR_GOOGLE_REVIEW_LINK]"
             style="display:inline-block;background:${NAVY};color:${GOLD};font-size:11px;font-weight:700;padding:7px 16px;border-radius:4px;text-decoration:none;letter-spacing:0.03em;">
            &#11088; Happy with our work? Leave us a review on Google!
          </a>
        </td>
      </tr>

      <!-- Row 2: Full-width disclaimer -->
      <tr>
        <td colspan="2" style="padding-top:14px;border-top:1px solid #e5e7eb;margin-top:14px;">
          <p style="margin:10px 0 0;font-size:10px;color:#999;line-height:1.5;">
            <em>Disclaimer: This email and any attachments are confidential and may contain privileged information.
            If you are not the intended recipient, please delete this email and notify the sender immediately.
            Unauthorized use, copying, or distribution of this email or its contents is strictly prohibited.
            The views and opinions expressed are those of the sender and do not necessarily represent the views of Author&apos;s Tranquility Press.</em>
          </p>
        </td>
      </tr>

    </table>
    <!-- ===== SIGNATURE END ===== -->

  </div>
</body>
</html>`
}

// ── Component ─────────────────────────────────────────────────────────────────
const TEMPLATES: Record<TemplateId, { label: string; filename: string; mime: string; height: number; getHTML: () => string }> = {
  email: {
    label: 'Email Template',
    filename: 'atp-email-template.html',
    mime: 'text/html',
    height: 680,
    getHTML: emailHTML,
  },
  word: {
    label: 'Word Document',
    filename: 'atp-letterhead.doc',
    mime: 'application/msword',
    height: 580,
    getHTML: wordHTML,
  },
  signature: {
    label: 'Email Signature',
    filename: 'atp-email-signature.html',
    mime: 'text/html',
    height: 380,
    getHTML: signatureHTML,
  },
}

export default function DocsTemplates({ sectionNumber }: { sectionNumber: number }) {
  const [active, setActive]   = useState<TemplateId>('email')
  const [copied, setCopied]   = useState(false)

  const tpl = TEMPLATES[active]
  const html = tpl.getHTML()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleDownload = () => {
    const blob = new Blob([html], { type: tpl.mime })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = tpl.filename
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="templates" className={styles.section}>
      <h2 className={styles.sectionTitle}>{sectionNumber}. Brand Templates</h2>
      <p>
        Ready-to-use templates built with Author&rsquo;s Tranquility Press branding.
        Replace all <code className={styles.code}>[bracketed]</code> placeholders before use.
        For the email signature, replace <code className={styles.code}>[YOUR_GOOGLE_REVIEW_LINK]</code> with your Google Business review URL.
      </p>

      {/* Tabs */}
      <div className={styles.templateTabs}>
        {(Object.keys(TEMPLATES) as TemplateId[]).map(id => (
          <button
            key={id}
            className={`${styles.templateTab} ${active === id ? styles.templateTabActive : ''}`}
            onClick={() => setActive(id)}
          >
            {TEMPLATES[id].label}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className={styles.templateActions}>
        <button className={styles.tplCopyBtn} onClick={handleCopy}>
          {copied ? '✓ Copied!' : '⎘ Copy HTML'}
        </button>
        <button className={styles.tplDownloadBtn} onClick={handleDownload}>
          ↓ Download {active === 'word' ? '.doc' : '.html'}
        </button>
      </div>

      {/* Preview */}
      <div className={styles.templatePreviewWrap}>
        <iframe
          key={active}
          srcDoc={html}
          title={`${tpl.label} preview`}
          className={styles.templateIframe}
          style={{ height: tpl.height }}
          sandbox="allow-same-origin"
        />
      </div>

      {active === 'signature' && (
        <div className={styles.callout} style={{ marginTop: 'var(--space-4)' }}>
          <strong>How to install in Gmail:</strong> Settings → See all settings → General → Signature → Create new → paste the table in the editor. In Outlook: File → Options → Mail → Signatures → New → paste in the editor.
        </div>
      )}
    </section>
  )
}
