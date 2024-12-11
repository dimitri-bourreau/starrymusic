import Image from 'next/image'
import AlbumSetlist from '@/components/client/AlbumSetlist'
import { Suspense } from 'react'
import MediaLinks from '@/components/server/MediaLinks'
import { getAlbumByTitle } from '@/features/album/get-album-by-title.feature'
import { outputs } from '@/config/outputs.config'
import { getImage } from '@/features/image/get-image.feature'
import { getAllAlbumsTitles } from '@/features/album/get-all-albums-titles.feature'
import { getAlbums } from '@/features/album/get-albums.feature'
import { getSetlists } from '@/features/album/get-setlists.feature'
import { getSetlist } from '@/features/album/get-setlist.feature'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { Songs } from '@/features/song/types/songs.type'
import Link from 'next/link'

export async function generateStaticParams() {
  const titles = await getAllAlbumsTitles(outputs.album)
  return titles.map((title) => ({
    title,
  }))
}

interface PageProps {
  params: { title: string }
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

export default async function Page({ params }: PageProps) {
  const albums = await getAlbums(outputs.album)
  const setlists = await getSetlists(outputs.album)
  const songs = await getAllSongs(outputs.song)

  const album = getAlbumByTitle(albums, decodeURIComponent(params.title))
  const setlist = getSetlist(album, setlists)
  const setlistSongs: Songs = setlist?.songs_ids
    ? setlist.songs_ids
        .map((songId) => songs.find(({ ID }) => songId === ID))
        .filter(isDefined)
    : []
  const image = album.image ? await getImage(outputs.image, album.image) : null

  return (
    <div className="px-4 py-5">
      {!album ? (
        <p className="mt-24 p-10">
          Cet album n&apos;a pas été trouvé, oups, il faut en parler à Dimitri.
          🤔
        </p>
      ) : (
        <>
          <div className="flex flex-col items-center justify-between gap-4 px-4 py-5 sm:p-6 md:flex-row md:items-start">
            <div className="flex flex-col justify-start md:flex-row">
              {image && (
                <Image
                  src={image.url}
                  className="rounded"
                  alt={image.name}
                  width={250}
                  height={250}
                />
              )}
              <div className="mt-4 flex flex-col justify-center px-4 sm:px-6 md:mt-0 lg:px-8">
                <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
                  {album.title}
                </h1>
                <p className="text-gray-500">{album.year}</p>
                <MediaLinks
                  className="mt-4"
                  links={[
                    {
                      href: album.you_tube,
                      label: 'YouTube',
                    },
                    {
                      href: album.spotify,
                      label: 'Spotify',
                    },
                    {
                      href: album.deezer,
                      label: 'Deezer',
                    },
                    {
                      href: album.apple_music,
                      label: 'Apple Music',
                    },
                    {
                      href: album.band_camp,
                      label: 'BandCamp',
                    },
                  ]}
                />
              </div>
            </div>
            {album.wiki_url && (
              <div className="flex items-center">
                <div className="bg-white  shadow sm:rounded-lg dark:bg-slate-900">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-300">
                      En savoir plus
                    </h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-400">
                      <p>On a un wiki ultra complet ! ✌️</p>
                    </div>
                    <div className="mt-5">
                      <Link
                        href={album.wiki_url}
                        title={`${album.title} sur starrysky.fandom.com`}
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                        >
                          Page wiki de {album.title}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Suspense>
            <AlbumSetlist setlistSongs={setlistSongs} />
          </Suspense>
        </>
      )}
    </div>
  )
}
