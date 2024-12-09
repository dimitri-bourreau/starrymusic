'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ImageType } from '@/features/image/types/image.type'
import { Album } from '@/features/album/types/album.type'

interface AlbumTableLineProps {
  album: Album
  image: ImageType
}

export const AlbumTableLine = async ({ album, image }: AlbumTableLineProps) => {
  const { title, year } = album
  const router = useRouter()

  const albumUrl = encodeURI(`/albums/${title}`)

  return (
    <tr
      className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:bg-pink-600/10 dark:hover:bg-pink-600/50"
      onClick={() => router.push(albumUrl)}
    >
      <td>
        <Image
          alt={image.name}
          src={image.url}
          className="h-12 w-12 flex-none rounded-md bg-gray-50"
          width={200}
          height={200}
        />
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-gray-400">
        {title}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
        {year}
      </td>
    </tr>
  )
}
