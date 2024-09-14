'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Songs } from '@/features/song/types/songs.type'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { outputs } from '@/config/outputs.config'

interface filterSongsFromQueryArgs {
  query: string | null
  songsToDisplaySetter: Dispatch<SetStateAction<Songs>>
  allSongs: Songs
}

export default function AllMusicTable() {
  const [songs, setSongs] = useState<Songs>([])
  const [songsToDisplay, setSongsToDisplay] = useState(songs)

  const router = useRouter()
  const pathName = usePathname()
  const decodedPathName = decodeURIComponent(pathName)
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  const fetchSongs = async (songsSetter: typeof setSongs) => {
    const songs = await getAllSongs(outputs.song)
    songsSetter(songs)
  }

  const filterSongsFromQuery = ({
    allSongs,
    query,
    songsToDisplaySetter,
  }: filterSongsFromQueryArgs) => {
    if (query) {
      const filteredMusic = allSongs.filter(({ title }) =>
        title.toLowerCase().includes(query.toLowerCase()),
      )
      songsToDisplaySetter(filteredMusic)
    } else songsToDisplaySetter(allSongs)
  }

  useEffect(() => {
    void fetchSongs(setSongs)
  }, [])

  useEffect(() => {
    filterSongsFromQuery({
      allSongs: songs,
      songsToDisplaySetter: setSongsToDisplay,
      query: searchQuery,
    })
  }, [searchQuery, songs])

  const redirectToTitle = (title: string) => {
    let url = encodeURI(`/${title}`)
    if (pathName.endsWith('paroles')) url += '/paroles'
    else if (pathName.endsWith('details')) url += '/details'
    else if (pathName.endsWith('ecouter')) url += '/ecouter'
    if (searchQuery) url += `?${searchParams.toString()}`
    router.push(url)
  }

  if (songsToDisplay.length === 0) {
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
        {songsToDisplay.map(({ title, language_variant }, index) => {
          const languageExtension = language_variant
            ? ` (${language_variant})`
            : null

          return (
            <tr
              key={`${title}:${index}`}
              className={clsx('cursor-pointer dark:hover:bg-pink-600/50', {
                'bg-pink-200 dark:bg-pink-800': decodedPathName.includes(
                  `/${title}/`,
                ),
                'hover:bg-pink-600/10': !decodedPathName.includes(`/${title}/`),
              })}
              onClick={() => redirectToTitle(title)}
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
                          ) + languageExtension
                        : title + languageExtension,
                    }}
                  />
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
