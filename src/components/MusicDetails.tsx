'use client'

import Music from '@/starrysky-music/types/music.type'

interface MusicDetailsProps {
  musicData: Music
}

const MusicDetails = ({ musicData }: MusicDetailsProps) => {
  return (
    <dl className="divide-y divide-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Titre</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {musicData.title}
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Album</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {musicData.album}
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Année</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {musicData.year}
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Durée</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {musicData.duration}
        </dd>
      </div>
      {musicData.credits && (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Crédits
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <ul>
              {musicData.credits.music && (
                <li>Musique : {musicData.credits.music}</li>
              )}
              {musicData.credits.lyrics && (
                <li>Paroles : {musicData.credits.lyrics}</li>
              )}
              {musicData.credits['lead-vocals'] && (
                <li>Voix principale : {musicData.credits['lead-vocals']}</li>
              )}
              {musicData.credits.extra && (
                <li>
                  {musicData.credits.extra.map((credit) => (
                    <p key={credit}>{credit}</p>
                  ))}
                </li>
              )}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  )
}

export default MusicDetails
