'use client'

import { Song } from '@/features/song/types/song.type'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ImageType } from '@/features/image/types/image.type'

interface SongTableLineProps {
  song: Song
  image: ImageType
}

export const SongTableLine = async ({ song, image }: SongTableLineProps) => {
  const { title, year, duration } = song
  const router = useRouter()

  const songUrl = encodeURI(`/${title}`)

  return (
    <tr
      className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:bg-pink-600/10 dark:hover:bg-pink-600/50"
      onClick={() => router.push(songUrl)}
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
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-gray-300">
        {title}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
        {year}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
        {duration}
      </td>
    </tr>
  )
}
