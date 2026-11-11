'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import FloatingCTA from '@/components/shared/FloatingCTA'
import EbookPopup from '@/components/shared/EbookPopup'
import BookPromo from '@/components/shared/BookPromo'
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
      {/* Veterans Day greeting; hides itself after Nov 30, 2026 */}
      <PromoBar />
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
      <EbookPopup />
      {/* Veterans Day book promo; hides itself after Nov 30, 2026 */}
      <BookPromo />
    </>
  )
}
