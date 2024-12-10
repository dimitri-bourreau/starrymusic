import { outputs } from '@/config/outputs.config'
import { getCovers } from '@/features/cover/get-covers.feature'
import { getSongByTitle } from '@/features/song/get-song-by-title.feature'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { CoverLineForSongPage } from '@/components/client/CoverLineForSongPage'

interface PageProps {
  params: { title: string }
}

export default async function Page({ params }: PageProps) {
  const songs = await getAllSongs(outputs.song)
  const song = getSongByTitle({ titleToFind: decodeURI(params.title), songs })
  const covers = await getCovers(outputs.cover)
  const songCovers = covers.filter(({ song: songId }) => songId === song?.ID)

  console.log('song', song)

  if (!songCovers) return <p>Aucune cover trouvée</p>

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="hidden">
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
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {songCovers.map((cover) => (
                  <CoverLineForSongPage key={cover.id} cover={cover} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
