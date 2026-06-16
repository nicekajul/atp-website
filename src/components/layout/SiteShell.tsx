'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import FloatingCTA from '@/components/shared/FloatingCTA'
import EbookPopup from '@/components/shared/EbookPopup'
import PromoBar from '@/components/shared/PromoBar'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')
  const isDocs   = pathname?.startsWith('/docs')

  if (isStudio || isDocs) {
    return <>{children}</>
  }

  return (
    <>
      <PromoBar />
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
