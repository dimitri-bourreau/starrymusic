import Album from '@/starrysky-music/types/album.type'
import getAllAlbumsTitle from '@/starrysky-music/features/get-all-albums-title'
import getAlbum from '@/starrysky-music/features/get-album'
import Image from 'next/image'
import AlbumSetlist from '@/components/client/AlbumSetlist'
import { Suspense } from 'react'
import MediaLinks from '@/components/server/MediaLinks'

export function generateStaticParams() {
  const titles = getAllAlbumsTitle()
  return titles.map((title) => ({
    title,
  }))
}

interface PageProps {
  params: { title: Album['title'] }
}

export default function Page({ params }: PageProps) {
  const album = getAlbum(decodeURIComponent(params.title))

  return (
    <div className="px-4 py-10">
      {!album ? (
        <p className="mt-24 p-10">
          Cet album n&apos;a pas été trouvé, oups, il faut en parler à Dimitri.
          🤔
        </p>
      ) : (
        <>
          <div className="flex gap-4 px-4 py-5 sm:p-6">
            <div>
              <Image
                src={album.image}
                className="rounded"
                alt="Album cover"
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
                {album.title}
              </h1>
              <p className="text-gray-500">{album.year}</p>
              <MediaLinks
                className="mt-4"
                links={[
                  {
                    href: album.links.youTube,
                    label: 'YouTube',
                  },
                  {
                    href: album.links.spotify,
                    label: 'Spotify',
                  },
                  {
                    href: album.links.deezer,
                    label: 'Deezer',
                  },
                  {
                    href: album.links.appleMusic,
                    label: 'Apple Music',
                  },
                  {
                    href: album.links.bandCamp,
                    label: 'BandCamp',
                  },
                ]}
              />
            </div>
          </div>
          <Suspense>
            <AlbumSetlist album={album} />
          </Suspense>
        </>
      )}
    </div>
  )
}
