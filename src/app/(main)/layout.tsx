'use client'

import { ReactNode, Suspense } from 'react'

import { Waveform } from '@/components/Waveform'
import SideNavigation from '@/components/SideNavigation'
import { usePathname } from 'next/navigation'

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname()

  return (
    <main className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/4">
        <Suspense>
          <SideNavigation />
        </Suspense>
      </div>

      <div className="relative hidden w-3/4 sm:block">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        {children}
      </div>

      {pathName !== '/' && <div className="sm:hidden">{children}</div>}
    </main>
  )
}
