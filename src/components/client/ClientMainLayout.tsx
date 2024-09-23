'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Waveform } from '@/components/server/Waveform'

interface MainLayoutProps {
  children: ReactNode
  sideNavigation: ReactNode // Allows us to have side nav as server component
}

export const ClientMainLayout = ({
  children,
  sideNavigation,
}: MainLayoutProps) => {
  const pathName = usePathname()

  return (
    <main className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/4">{sideNavigation}</div>

      <div className="relative hidden w-3/4 sm:block">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        {children}
      </div>

      {pathName !== '/' && <div className="sm:hidden">{children}</div>}
    </main>
  )
}
