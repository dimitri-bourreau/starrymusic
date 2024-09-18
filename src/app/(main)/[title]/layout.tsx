'use client'

import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import Tabs from '@/components/server/Tabs'
import { usePathname } from 'next/navigation'
import MediaLinks from '@/components/server/MediaLinks'
import { Song } from '@/features/song/types/song.type'
import { getSongByTitle } from '@/features/song/get-song-by-title.feature'
import { outputs } from '@/config/outputs.config'
import { getAlbum } from '@/features/album/get-album.feature'
import { ImageType } from '@/features/image/types/image.type'
import { getImage } from '@/features/image/get-image.feature'

interface MusicLayoutProps {
  children: ReactNode
  params: {
    title: string
  }
}

export default function MusicLayout({ children, params }: MusicLayoutProps) {
  const [song, setSong] = useState<Song>()
  const [associatedAlbumImage, setAssociatedAlbumImage] = useState<ImageType>({
    url: '/albums/default-album-cover.jpg',
    name: 'Album cover',
    ID: 0,
  })
  const pathName = usePathname()

  const fetchSong = async (songTitle: string, songSetter: typeof setSong) => {
    const song = await getSongByTitle(outputs.song, songTitle)
    songSetter(song)
  }

  const fetchAssociatedAlbumImage = async (
    albumId: number,
    imageSetter: typeof setAssociatedAlbumImage,
  ) => {
    const associatedAlbum = await getAlbum(outputs.album, albumId)
    if (!associatedAlbum?.image) return
    const image = await getImage(outputs.image, associatedAlbum.image)
    imageSetter(image)
  }

  useEffect(() => {
    void fetchSong(decodeURIComponent(params.title), setSong)
  }, [params.title])

  useEffect(() => {
    if (!song?.album_id) return
    void fetchAssociatedAlbumImage(song.album_id, setAssociatedAlbumImage)
  }, [song?.album_id])

  const tabs = [
    {
      name: 'Paroles',
      href: `/${params.title}/paroles`,
      current: pathName.includes('paroles'),
    },
    {
      name: 'Détails',
      href: `/${params.title}/details`,
      current: pathName.includes('details'),
    },
  ]

  return (
    <div className="px-4 py-10">
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

          <Tabs tabs={tabs} />

          {children}
        </>
      )}
    </div>
  )
}
