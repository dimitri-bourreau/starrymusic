import SongDetails from '@/components/client/SongDetails'
import { getSongByTitle } from '@/features/song/get-song-by-title.feature'
import { outputs } from '@/config/outputs.config'
import { getAlbum } from '@/features/album/get-album.feature'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { getAlbums } from '@/features/album/get-albums.feature'

interface PageProps {
  params: { title: string }
}

export default async function Page({ params }: PageProps) {
  const songs = await getAllSongs(outputs.song)
  const albums = await getAlbums(outputs.album)

  const song = getSongByTitle({
    titleToFind: decodeURIComponent(params.title),
    songs,
  })
  const associatedAlbum = song?.album_id
    ? getAlbum(albums, song.album_id)
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
