'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Song } from '@/features/song/types/song.type'

interface MusicDetailsProps {
  song: Song
  associatedAlbumTitle?: string
}

const SongDetails = ({ song, associatedAlbumTitle }: MusicDetailsProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirectToAlbum = (title: string) => {
    const searchQuery = searchParams.get('search')
    let url = encodeURI(`/albums/${title}`)
    if (searchQuery) url += `?${searchParams.toString()}`
    router.push(url)
  }

  return (
    <dl className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
          Titre
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
          {song.title}
        </dd>
      </div>
      {associatedAlbumTitle && (
        <div
          className="cursor-pointer px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
          onClick={() => redirectToAlbum(associatedAlbumTitle)}
        >
          <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
            Album
          </dt>
          <dd className="mt-1 text-sm leading-6 text-pink-700 sm:col-span-2 sm:mt-0 dark:text-pink-500">
            {associatedAlbumTitle}
          </dd>
        </div>
      )}

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
          Année
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
          {song.year}
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
          Durée
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
          {song.duration}
        </dd>
      </div>
      {(song.credits_music ||
        song.credits_lyrics ||
        song.credits_lead_vocals ||
        song.credits_extra) && (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
            Crédits
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
            <ul>
              {song.credits_music && <li>Musique : {song.credits_music}</li>}
              {song.credits_lyrics && <li>Paroles : {song.credits_lyrics}</li>}
              {song.credits_lead_vocals && (
                <li>Voix principale : {song.credits_lead_vocals}</li>
              )}
              {song.credits_extra && (
                <p className="whitespace-pre-line">{song.credits_extra}</p>
              )}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  )
}

export default SongDetails
