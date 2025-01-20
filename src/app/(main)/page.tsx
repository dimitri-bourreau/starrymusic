import { AllSongsTable } from '@/components/client/AllSongsTable'
import { getAllSongs } from '@/features/song/get-all-songs.feature'
import { outputs } from '@/config/outputs.config'
import { getImage } from '@/features/image/get-image.feature'
import { Suspense } from 'react'

export default async function Home() {
  const allSongs = await getAllSongs(outputs.song)
  const images = await Promise.all(
    allSongs.map(({ image_id }) => getImage(outputs.image, image_id)),
  )

  return (
    <Suspense>
      <AllSongsTable songs={allSongs} images={images} />
    </Suspense>
  )
}
