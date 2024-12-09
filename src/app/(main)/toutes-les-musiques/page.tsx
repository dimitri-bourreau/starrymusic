import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { outputs } from '@/config/outputs.config'
import { SongTableLine } from '@/components/client/SongTableLine'
import { getImage } from '@/features/image/get-image.feature'

export const revalidate = 60

export default async function Home() {
  const allSongs = await getAllSongs(outputs.song)
  const images = await Promise.all(
    allSongs.map(({ image_id }) => getImage(outputs.image, image_id)),
  )

  return (
    <div className="px-4 py-5 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
        Toutes les musiques
      </h1>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-gray-300"
                    >
                      Image
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
                      Année
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {allSongs.map(async (song, index) => (
                    <SongTableLine
                      key={song.ID}
                      song={song}
                      image={images[index]}
                    />
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
