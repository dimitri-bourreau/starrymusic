import getAllMusic from '@/starrysky-music/features/get-all-music'
import Image from 'next/image'
import getAlbum from '@/starrysky-music/features/get-album'
import { useRouter } from 'next/navigation'

export default function AllMusicTable() {
  const router = useRouter()
  const songs = getAllMusic()

  return (
    <table className="mt-8 w-full whitespace-nowrap text-left">
      <thead className="border-b border-white/10 text-sm leading-6 text-slate-700 dark:text-white">
        <tr>
          <th scope="col" className="p-4 font-semibold">
            Titre
          </th>
          <th
            scope="col"
            className=" hidden py-2 pl-4 pr-8 font-semibold sm:table-cell sm:pl-6 lg:pl-8"
          >
            Album
          </th>
          <th
            scope="col"
            className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-8 sm:text-left lg:pr-20"
          >
            Année
          </th>
          <th
            scope="col"
            className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell md:table-cell lg:pr-20"
          >
            Durée
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-6 lg:pr-8"
          ></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-white/5">
        {songs.map(({ title, album, year, duration }) => (
          <tr
            key={`${title}:${album}`}
            className="cursor-pointer hover:bg-pink-600/10 dark:hover:bg-pink-600/50"
            onClick={() => router.push(encodeURI(`/${title}:${album}`))}
          >
            <td className="p-4 sm:pr-8">
              <div className="flex gap-x-3">
                <div className="font-mono text-sm leading-6 text-slate-700 dark:text-white">
                  {title}
                </div>
              </div>
            </td>
            <td className="hidden py-4 pl-4 pr-8 sm:table-cell sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-x-4">
                <Image
                  src={getAlbum(album).image}
                  alt={album}
                  className="rounded-sm bg-gray-800"
                  width={40}
                  height={40}
                />
                <div className="truncate text-sm font-medium leading-6 text-gray-400">
                  {album}
                </div>
              </div>
            </td>
            <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 sm:table-cell sm:pr-8 lg:pr-20">
              <div className="flex items-center justify-end gap-x-2 text-gray-400 sm:justify-start">
                {year.toString()}
              </div>
            </td>
            <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
              {duration}
            </td>
            <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
              <button
                type="button"
                className="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
