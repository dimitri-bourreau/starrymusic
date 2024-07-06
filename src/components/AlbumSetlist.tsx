'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Album from '@/starrysky-music/types/album.type'
import getAlbumSetlist from '@/starrysky-music/features/get-album-setlist'

interface AlbumSetlistProps {
  album: Album
}

export default function AlbumSetlist({ album }: AlbumSetlistProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const setlist = getAlbumSetlist(album.title)

  const redirectToMusic = (title: string) => {
    const searchQuery = searchParams.get('search')
    let url = encodeURI(`/${title}`)
    if (searchQuery) url += `?${searchParams.toString()}`
    router.push(url)
  }

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
          >
            N°
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Titre
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Durée
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {setlist.map(({ title, duration }, index) => (
          <tr
            key={`${title}${index}`}
            className="cursor-pointer even:bg-gray-50 hover:bg-pink-600/10"
            onClick={() => redirectToMusic(title)}
          >
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
              {index + 1}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
              {title}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
