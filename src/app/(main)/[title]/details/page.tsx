import SongDetails from '@/components/client/SongDetails'
import { getSongByTitle } from '@/features/song/get-song-by-title.feature'
import { outputs } from '@/config/outputs.config'
import { getAlbum } from '@/features/album/get-album.feature'

interface PageProps {
  params: { title: string }
}

export default async function Page({ params }: PageProps) {
  const song = await getSongByTitle(
    outputs.song,
    decodeURIComponent(params.title),
  )
  const associatedAlbum = song.album_id
    ? await getAlbum(outputs.album, song.album_id)
    : null

  if (!song)
    return (
      <p className="ml-4 mt-10">
        Aucun détail enregistré pour l&apos;instant. 🙏
      </p>
    )

  return (
    <SongDetails song={song} associatedAlbumTitle={associatedAlbum?.title} />
  )
}
