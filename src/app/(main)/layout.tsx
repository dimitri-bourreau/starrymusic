import { ReactNode } from 'react'
import SideNavigation from '@/components/client/SideNavigation'
import StarryskyMembersVerticalList from '@/components/server/StarryskyMembersVerticalList'

export default async function MainLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className="flex flex-col sm:flex-row">
      <SideNavigation />

      <div className="relative sm:w-3/4">
        <div className="flex w-full">
          <StarryskyMembersVerticalList />
          <div className="w-full px-4 py-5 pt-10 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
