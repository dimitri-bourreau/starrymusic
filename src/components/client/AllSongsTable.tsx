'use client'

import { ImageType } from '@/features/image/types/image.type'
import { Songs } from '@/features/song/types/songs.type'
import {
  usePathname,
  useSearchParams,
  useRouter,
  redirect,
} from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'

interface filterSongsWithSearchQueryArgs {
  searchQuery: string | null
  songs: Songs
  songsSetter: Dispatch<SetStateAction<Songs>>
}

interface AllSongsTableProps {
  songs: Songs
  images: ImageType[]
}

export const AllSongsTable = ({ songs, images }: AllSongsTableProps) => {
  const [songsToDisplay, setSongsToDisplay] = useState(songs)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm)
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('songSearch')

  const filterSongsWithSearchQuery = ({
    searchQuery,
    songs,
    songsSetter,
  }: filterSongsWithSearchQueryArgs): void => {
    if (!searchQuery) songsSetter(songs)
    else {
      const filteredMusic = songs.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      songsSetter(filteredMusic)
    }
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 300)

    return () => clearTimeout(handler)
  }, [searchTerm])

  useEffect(() => {
    if (debouncedTerm.length === 0) {
      router.push(pathName)
    } else {
      const params = new URLSearchParams(searchParams.toString())
      params.set('songSearch', debouncedTerm)
      router.push(`${pathName}?${params}`, { scroll: false })
    }
  }, [debouncedTerm, pathName, router, searchParams])

  useEffect(() => {
    if (searchQuery?.toLowerCase() === 'caca') {
      redirect('/caca')
    }
  }, [searchQuery])

  useEffect(() => {
    filterSongsWithSearchQuery({
      searchQuery,
      songs,
      songsSetter: setSongsToDisplay,
    })
  }, [searchQuery, songs])

  const redirectToSong = (title: string) => {
    let url = `/${title}`
    if (pathName?.endsWith('paroles')) url += '/paroles'
    else if (pathName?.endsWith('details')) url += '/details'
    else if (pathName?.endsWith('ecouter')) url += '/ecouter'
    url += `?${searchParams.toString()}`
    router.push(encodeURI(url))
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Rechercher..."
        onChange={(event) => setSearchTerm(event.target.value)}
        defaultValue={searchQuery || ''}
        autoFocus
        className="my-5 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-black dark:text-white"
      />
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-gray-300"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Titre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Année
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Durée
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {songsToDisplay.map((song, index) => (
                  <tr
                    className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:bg-pink-600/10 dark:hover:bg-pink-600/50"
                    key={song.ID}
                    onClick={() => redirectToSong(song.title)}
                  >
                    <td>
                      <Image
                        alt={images[index].name}
                        src={images[index].url}
                        className="h-12 w-12 flex-none rounded-md bg-gray-50"
                        width={200}
                        height={200}
                      />
                    </td>
                    <td
                      className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html:
                          searchQuery && 0 < searchQuery.length
                            ? song.title.replaceAll(
                                new RegExp(searchQuery, 'ig'),
                                `<span style="text-decoration:underline">$&</span>`,
                              )
                            : song.title,
                      }}
                    />
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {song.year}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {song.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
