import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import SiteShell from '@/components/layout/SiteShell'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Authors Tranquility Press',
    default: 'Authors Tranquility Press | Guided Publishing & Book Marketing',
  },
  description:
    'A premium publishing partner. We provide end-to-end guidance, stunning design, and strategic marketing to ensure your book achieves its highest potential.',
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
