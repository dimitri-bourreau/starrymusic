'use client'

import { ReactNode } from 'react'
import getMusic from '@/starrysky-music/features/get-music'
import Image from 'next/image'
import Tabs from '@/components/Tabs'
import { usePathname } from 'next/navigation'
import getAlbum from '@/starrysky-music/features/get-album'
import MediaLinks from '@/components/MediaLinks'

interface MusicLayoutProps {
  children: ReactNode
  params: {
    title: string
  }
}

export default function MusicLayout({ children, params }: MusicLayoutProps) {
  const pathName = usePathname()
  const title = decodeURIComponent(params.title)

  const musicDetails = getMusic(title)
  const associatedAlbum = musicDetails
    ? getAlbum(musicDetails.album)
    : undefined
  const tabs = [
    {
      name: 'Paroles',
      href: `/${title}/paroles`,
      current: pathName.includes('paroles'),
    },
    {
      name: 'Détails',
      href: `/${title}/details`,
      current: pathName.includes('details'),
    },
  ]

  return (
    <div className="px-4 py-10">
      {!musicDetails ? (
        <p className="mt-24 p-10">
          Cette musique n&apos;a pas été trouvée, oups, il faut en parler à
          Dimitri. 🤔
        </p>
      ) : (
        <>
          <div className="flex gap-4 px-4 py-5 sm:p-6">
            <div>
              <Image
                src={
                  associatedAlbum?.image || '/albums/default-album-cover.jpg'
                }
                className="rounded"
                alt="Album cover"
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col justify-center px-4  sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
                {title}
              </h1>
              <MediaLinks
                className="mt-4"
                links={[
                  {
                    href: musicDetails.links.youTube,
                    label: 'YouTube',
                  },
                  {
                    href: musicDetails.links.spotify,
                    label: 'Spotify',
                  },
                  {
                    href: musicDetails.links.deezer,
                    label: 'Deezer',
                  },
                  {
                    href: musicDetails.links.appleMusic,
                    label: 'Apple Music',
                  },
                  {
                    href: musicDetails.links.bandCamp,
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
