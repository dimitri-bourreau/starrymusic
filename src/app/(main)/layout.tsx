import { ReactNode, Suspense } from 'react'
import SideNavigation from '@/components/client/SideNavigation'
import { ClientMainLayout } from '@/components/client/ClientMainLayout'
import AllAlbumsTable from '@/components/server/AllAlbumsTable'
import AllMusicTable from '@/components/client/AllMusicTable'

export default function MainLayout({ children }: { children: ReactNode }) {
  const SuspensedSideNavigation = () => (
    <Suspense>
      <SideNavigation
        allAlbums={<AllAlbumsTable />}
        allSongs={<AllMusicTable />}
      />
    </Suspense>
  )

  return (
    <ClientMainLayout sideNavigation={<SuspensedSideNavigation />}>
      {children}
    </ClientMainLayout>
  )
}
