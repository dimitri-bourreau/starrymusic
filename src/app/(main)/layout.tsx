'use client'

import { ReactNode } from 'react'

import { Waveform } from '@/components/Waveform'
import SideNavigation from '@/components/SideNavigation'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <div className="w-1/4">
        <SideNavigation />
      </div>

      <div className="w-3/4 lg:relative">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        {children}
      </div>
    </main>
  )
}
