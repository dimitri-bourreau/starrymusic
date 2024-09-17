'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { outputs } from '@/config/outputs.config'
import { Album } from '@/features/album/types/album.type'
import { getAlbumSetlist } from '@/features/album/get-album-setlist.feature'
import { Songs } from '@/features/song/types/songs.type'
import { Setlist } from '@/features/album/types/setlist.type'
import { getSong } from '@/features/song/get-song.feature'

interface AlbumSetlistProps {
  album: Album
}

export default function AlbumSetlist({ album }: AlbumSetlistProps) {
  const [setlist, setSetlist] = useState<Songs>()
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirectToMusic = (title: string) => {
    const searchQuery = searchParams.get('search')
    let url = encodeURI(`/${title}`)
    if (searchQuery) url += `?${searchParams.toString()}`
    router.push(url)
  }

  const fetchSetlist = async (
    albumId: number,
    setlistSetter: typeof setSetlist,
  ) => {
    const setlist: Setlist = await getAlbumSetlist(outputs.album, albumId)
    const songs: Songs = setlist.songs_ids
      ? await Promise.all(
          setlist.songs_ids.map((songId) => getSong(outputs.song, songId)),
        )
      : []
    setlistSetter(songs)
  }

  useEffect(() => {
    void fetchSetlist(album.ID, setSetlist)
  }, [album.ID])

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3 dark:text-gray-300"
          >
            N°
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
            Durée
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-black">
        {setlist?.map(({ title, duration }, index) => (
          <tr
            key={`${title}${index}`}
            className="cursor-pointer even:bg-gray-100 hover:bg-pink-600/10 dark:even:bg-gray-800 dark:hover:bg-pink-600/60"
            onClick={() => redirectToMusic(title)}
          >
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500  sm:pl-3 dark:text-gray-200">
              {index + 1}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 dark:text-gray-200">
              {title}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-100">
              {duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
