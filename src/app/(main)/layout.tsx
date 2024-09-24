import { ReactNode, Suspense } from 'react'
import SideNavigation from '@/components/client/SideNavigation'
import { ClientMainLayout } from '@/components/client/ClientMainLayout'
import AllAlbumsTable from '@/components/server/AllAlbumsTable'
import AllMusicTable from '@/components/client/AllMusicTable'
import { getAlbums } from '@/features/album/get-albums.feature'
import { outputs } from '@/config/outputs.config'
import { getAllSongs } from '@/features/song/get-all-songs.feature'

export default async function MainLayout({
  children,
}: {
  children: ReactNode
}) {
  const albums = await getAlbums(outputs.album)
  const songs = await getAllSongs(outputs.song)

  const SuspensedSideNavigation = () => (
    <Suspense>
      <SideNavigation
        allAlbums={<AllAlbumsTable albums={albums} />}
        allSongs={<AllMusicTable songs={songs} />}
      />
    </Suspense>
  )

  return (
    <ClientMainLayout sideNavigation={<SuspensedSideNavigation />}>
      {children}
    </ClientMainLayout>
  )
}
