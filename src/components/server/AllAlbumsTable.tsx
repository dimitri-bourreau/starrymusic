import { getAlbums } from '@/features/album/get-albums.feature'
import { outputs } from '@/config/outputs.config'
import { Albums } from '@/features/album/types/albums.type'
import { TitlesList } from '@/components/client/TitlesList'

export default async function AllAlbumsTable() {
  const albums: Albums = await getAlbums(outputs.album)

  if (albums.length === 0) {
    return <p className="p-4 text-gray-500">...</p>
  }

  return <TitlesList titles={albums.map(({ title }) => title)} />
}
