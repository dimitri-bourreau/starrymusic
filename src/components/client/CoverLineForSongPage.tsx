'use client'

import Image from 'next/image'
import { Cover } from '@/features/cover/types/cover.type'
import { useRouter } from 'next/navigation'

interface CoverLineForSongPageProps {
  cover: Cover
}

export const CoverLineForSongPage = ({ cover }: CoverLineForSongPageProps) => {
  const { cover_url, title, image_url } = cover
  const router = useRouter()

  return (
    <tr
      className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:bg-pink-600/10 dark:hover:bg-pink-600/50"
      onClick={() => cover_url && router.push(cover_url)}
    >
      <td>
        {title && image_url && (
          <Image
            alt={title}
            src={image_url}
            className="h-12 w-12 flex-none rounded-sm bg-gray-50"
            width={300}
            height={300}
          />
        )}
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-gray-400">
        {title}
      </td>
    </tr>
  )
}
