'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import FloatingCTA from '@/components/shared/FloatingCTA'
import EbookPopup from '@/components/shared/EbookPopup'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
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
