import { ReactNode } from 'react'
import Image from 'next/image'
import SongTabs from '@/components/client/SongTabs'
import MediaLinks from '@/components/server/MediaLinks'
import { getSongByTitle } from '@/features/song/get-song-by-title.feature'
import { outputs } from '@/config/outputs.config'
import { getAlbum } from '@/features/album/get-album.feature'
import { getImage } from '@/features/image/get-image.feature'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { getAlbums } from '@/features/album/get-albums.feature'

interface MusicLayoutProps {
  children: ReactNode
  params: {
    title: string
  }
}

export default async function MusicLayout({
  children,
  params,
}: MusicLayoutProps) {
  const albums = await getAlbums(outputs.album)
  const songs = await getAllSongs(outputs.song)

  const song = getSongByTitle({
    titleToFind: decodeURIComponent(params.title),
    songs,
  })
  const associatedAlbum =
    typeof song?.album_id === 'number' ? getAlbum(albums, song.album_id) : null
  const associatedAlbumImage = await getImage(
    outputs.image,
    associatedAlbum?.image,
  )

  return (
    <div className="px-4 py-5">
      {!song ? (
        <p className="mt-24 p-10">
          Cette musique n&apos;a pas été trouvée, oups, il faut en parler à
          Dimitri. 🤔
        </p>
      ) : (
        <>
          <div className="flex gap-4 px-4 py-5 sm:p-6">
            <div>
              <Image
                src={associatedAlbumImage.url}
                className="rounded"
                alt={associatedAlbumImage.name}
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col justify-center px-4  sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
                {song?.title || params.title}
              </h1>
              <MediaLinks
                className="mt-4"
                links={[
                  {
                    href: song.you_tube,
                    label: 'YouTube',
                  },
                  {
                    href: song.spotify,
                    label: 'Spotify',
                  },
                  {
                    href: song.deezer,
                    label: 'Deezer',
                  },
                  {
                    href: song.apple_music,
                    label: 'Apple Music',
                  },
                  {
                    href: song.band_camp,
                    label: 'BandCamp',
                  },
                ]}
              />
            </div>
          </div>

          <SongTabs title={params.title} />

          {children}
        </>
      )}
    </div>
  )
}
