'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getAlbums } from '@/features/album/get-albums.feature'
import { outputs } from '@/config/outputs.config'
import { Albums } from '@/features/album/types/albums.type'

interface filterAlbumsWithSearchQueryArgs {
  searchQuery: string | null
  albums: Albums
  setAlbumsToDisplay: Dispatch<SetStateAction<Albums>>
}

export default function AllAlbumsTable() {
  const [albums, setAlbums] = useState<Albums>([])
  const [albumsToDisplay, setAlbumsToDisplay] = useState<Albums>(albums)

  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')
  const decodedPathName = decodeURIComponent(pathName)

  const filterAlbumsWithSearchQuery = ({
    searchQuery,
    albums,
    setAlbumsToDisplay,
  }: filterAlbumsWithSearchQueryArgs): void => {
    if (!searchQuery) setAlbumsToDisplay(albums)
    else {
      const filteredMusic = albums.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setAlbumsToDisplay(filteredMusic)
    }
  }

  const fetchAlbums = async (albumsSetter: typeof setAlbums) => {
    const albums = await getAlbums(outputs.album)
    albumsSetter(albums)
  }

  const redirectToAlbum = (title: string) => {
    let url = encodeURI(`/albums/${title}`)
    if (searchQuery) url += `?${searchParams.toString()}`
    router.push(url)
  }

  useEffect(() => {
    void fetchAlbums(setAlbums)
  }, [])

  useEffect(() => {
    filterAlbumsWithSearchQuery({ searchQuery, albums, setAlbumsToDisplay })
  }, [searchQuery, albums])

  if (albumsToDisplay.length === 0) {
    return <p className="p-4 text-gray-500">...</p>
  }

  return (
    <table className="w-full text-left">
      <thead className="border-b border-white/10 text-sm leading-6 text-slate-700 dark:text-white">
        <tr>
          <th scope="col" className="hidden p-4 font-semibold">
            Titre
          </th>
        </tr>
      </thead>

      <tbody>
        {albumsToDisplay.map(({ title, image }) => (
          <tr
            key={`${title}:${image}`}
            className={clsx('cursor-pointer dark:hover:bg-pink-600/50', {
              'bg-pink-200 dark:bg-pink-800': decodedPathName.includes(title),
              'hover:bg-pink-600/10': !decodedPathName.includes(title),
            })}
            onClick={() => redirectToAlbum(title)}
          >
            <td className="py-2">
              <div className="flex gap-x-3">
                <p
                  className="px-4 font-mono text-sm leading-6 text-slate-700 dark:text-white"
                  dangerouslySetInnerHTML={{
                    __html: searchQuery
                      ? title.replaceAll(
                          new RegExp(searchQuery, 'ig'),
                          `<span style="text-decoration:underline">$&</span>`,
                        )
                      : title,
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
