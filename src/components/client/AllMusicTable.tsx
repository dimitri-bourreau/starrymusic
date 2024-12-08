import { TitlesList } from '@/components/client/TitlesList'
import { Songs } from '@/features/song/types/songs.type'

interface AllMusicTableProps {
  songs: Songs
}

export default async function AllMusicTable({ songs }: AllMusicTableProps) {
  const titles = songs.map(({ title }) => title)

  if (songs.length === 0) {
    return <p className="p-4 text-gray-500">...</p>
  }

  return <TitlesList titles={titles} context="song" />
}
