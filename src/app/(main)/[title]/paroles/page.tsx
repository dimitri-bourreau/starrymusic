import { getSongByTitle } from '@/features/song/get-song-by-title.feature'
import { outputs } from '@/config/outputs.config'
import { getAllSongs } from '@/features/song/get-all-songs.feature'

interface PageProps {
  params: { title: string }
}

export default async function Page({ params }: PageProps) {
  const songs = await getAllSongs(outputs.song)

  const song = getSongByTitle({
    titleToFind: decodeURIComponent(params.title),
    songs,
  })

  if (!song)
    return (
      <p className="ml-4 mt-10">
        Impossible de trouver les paroles, contactez Dimitri, c&apos;est louche
        ! 🤔
      </p>
    )

  if (song.lyrics === null)
    return (
      <p className="ml-4 mt-10 text-gray-500">
        Cette musique ne contient pas de paroles.
      </p>
    )

  return (
    <div className="flex flex-col gap-4 p-4 px-10">
      <p className="whitespace-pre-line dark:text-white">{song.lyrics}</p>
    </div>
  )
}
