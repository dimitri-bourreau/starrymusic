import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { outputs } from '@/config/outputs.config'
import { Song } from '@/features/song/types/song.type'
import Image from 'next/image'
import { getImage } from '@/features/image/get-image.feature'
import Link from 'next/link'

export const revalidate = 60

const SongTableLine = async ({ song }: { song: Song }) => {
  const { title, year, duration, image_id } = song
  const image = await getImage(outputs.image, image_id)
  const songUrl = encodeURI(`/${title}`)

  return (
    <tr className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <td>
        <Link href={songUrl}>
          <Image
            alt={image.name}
            src={image.url}
            className="h-12 w-12 flex-none rounded-md bg-gray-50"
            width={200}
            height={200}
          />
        </Link>
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        <Link href={songUrl}>{title}</Link>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <Link href={songUrl}>{year}</Link>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <Link href={songUrl}>{duration}</Link>
      </td>
    </tr>
  )
}

export default async function Home() {
  const allSongs = await getAllSongs(outputs.song)

  return (
    <div className="px-4 py-5 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
        Toutes les musiques
      </h1>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Image
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
                      Année
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allSongs.map((song) => (
                    <SongTableLine key={song.ID} song={song} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
