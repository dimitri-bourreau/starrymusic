import { outputs } from '@/config/outputs.config'
import { getCovers } from '@/features/cover/get-covers.feature'
import Image from 'next/image'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import Link from 'next/link'

export const revalidate = 60

export default async function Home() {
  const allCovers = await getCovers(outputs.cover)
  const allSongs = await getAllSongs(outputs.song)

  return (
    <div className="px-4 py-5 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
        Toutes les covers
      </h1>

      <div className="mt-5">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {allCovers.map(({ title, cover_url, id, image_url, song }) => {
            const songTitle = allSongs.find(({ ID }) => ID === song)?.title

            return (
              <li
                key={id}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:divide-gray-700 dark:bg-slate-900"
              >
                <div className="flex flex-1 flex-col p-8">
                  <Image
                    alt={title || ''}
                    src={image_url || ''}
                    className="mx-auto rounded-sm"
                    width={300}
                    height={300}
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-200">
                    {songTitle}
                  </h3>
                  <dl className="mt-1 flex grow flex-col justify-between">
                    <dt className="sr-only">Description de la cover</dt>
                    <dd className="text-sm text-gray-500 dark:text-gray-200/80">
                      {title}
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
                    <div className="flex w-0 flex-1 cursor-pointer items-center justify-center p-2">
                      <Link href={cover_url || '#'} target="_blank">
                        <p className="text-sm hover:text-pink-500 dark:text-gray-100 dark:hover:text-pink-400">
                          Voir la cover
                        </p>
                      </Link>
                    </div>
                    <div className="-ml-px flex w-0 flex-1 cursor-pointer items-center justify-center p-2">
                      <Link href={encodeURI(`/${songTitle}`)} prefetch={false}>
                        <p className="text-sm hover:text-pink-500 dark:text-gray-100 dark:hover:text-pink-400">
                          {songTitle}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
