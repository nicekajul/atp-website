import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import SiteShell from '@/components/layout/SiteShell'
import './globals.css'

const SITE_URL = 'https://authorstranquilitypress.com'

export const metadata: Metadata = {
  title: {
    template: "%s | Author's Tranquility Press",
    default: "Author's Tranquility Press | Guided Publishing & Book Marketing",
  },
  description:
    "A premium publishing partner. We provide end-to-end guidance, stunning design, and strategic marketing to ensure your book achieves its highest potential.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    siteName: "Author's Tranquility Press",
    title: "Author's Tranquility Press | Guided Publishing & Book Marketing",
    description:
      "A premium publishing partner helping independent authors publish, market, and distribute their books with confidence.",
    url: SITE_URL,
    images: [
      {
        url: '/ATP-Logo-Horizontal-Dark.png',
        width: 1200,
        height: 300,
        alt: "Author's Tranquility Press",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Author's Tranquility Press | Guided Publishing & Book Marketing",
    description:
      "A premium publishing partner helping independent authors publish, market, and distribute their books with confidence.",
    images: ['/ATP-Logo-Horizontal-Dark.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
