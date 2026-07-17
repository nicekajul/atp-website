'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import FloatingCTA from '@/components/shared/FloatingCTA'
import EbookPopup from '@/components/shared/EbookPopup'
// import PromoBar from '@/components/shared/PromoBar' // re-enable for next seasonal promo

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')
  const isDocs   = pathname?.startsWith('/docs')

  if (isStudio || isDocs) {
    return <>{children}</>
  }

  return (
    <>
      {/* Father's Day promo ended June 30 — re-enable <PromoBar /> for the next seasonal promo */}
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
      <EbookPopup />
    </>
  )
}
