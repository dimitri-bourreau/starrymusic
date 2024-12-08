import { Albums } from '@/features/album/types/albums.type'
import { TitlesList } from '@/components/client/TitlesList'

interface AllAlbumsTableProps {
  albums: Albums
}

export default async function AllAlbumsTable({ albums }: AllAlbumsTableProps) {
  const titles = albums.map(({ title }) => title)

  if (albums.length === 0) {
    return <p className="p-4 text-gray-500">...</p>
  }

  return <TitlesList titles={titles} context="album" />
}
