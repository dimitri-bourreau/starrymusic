import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { outputs } from '@/config/outputs.config'
import { TitlesList } from '@/components/client/TitlesList'

export default async function AllMusicTable() {
  const songs = await getAllSongs(outputs.song)

  if (songs.length === 0) {
    return <p className="p-4 text-gray-500">...</p>
  }

  return <TitlesList titles={songs.map(({ title }) => title)} context="song" />
}
