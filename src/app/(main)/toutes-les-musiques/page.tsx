import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { outputs } from '@/config/outputs.config'
import { getImage } from '@/features/image/get-image.feature'
import { AllSongsTable } from '@/components/client/AllSongsTable'
import { Suspense } from 'react'

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

      <Suspense>
        <AllSongsTable songs={allSongs} images={images} />
      </Suspense>
    </div>
  )
}
