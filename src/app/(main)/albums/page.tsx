import { getAlbums } from '@/features/album/get-albums.feature'
import { outputs } from '@/config/outputs.config'
import { getImage } from '@/features/image/get-image.feature'
import { AlbumTableLine } from '@/components/client/AlbumTableLine'

export const revalidate = 60

export default async function Home() {
  const allAlbums = await getAlbums(outputs.album)
  const images = await Promise.all(
    allAlbums.map(({ image }) => getImage(outputs.image, image)),
  )

  return (
    <div>
      <h1 className="text-2xl font-semibold leading-7 text-slate-700 dark:text-white">
        Albums
      </h1>

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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {allAlbums.map(async (album, index) => (
                  <AlbumTableLine
                    key={album.ID}
                    album={album}
                    image={images[index]}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
