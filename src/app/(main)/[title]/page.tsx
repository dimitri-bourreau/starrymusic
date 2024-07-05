import getAllMusicTitles from '@/starrysky-music/features/get-all-music-titles'
import Music from '@/starrysky-music/types/music.type'

export function generateStaticParams() {
  const titles = getAllMusicTitles()
  return titles.map((title) => ({ title }))
}

interface PageProps {
  params: { title: Music['title'] }
}

export default function Page({ params }: PageProps) {
  const title = decodeURIComponent(params.title)

  return (
    <div className="px-4 py-10">
      <h2 className="px-4 text-2xl font-semibold leading-7 text-slate-700 sm:px-6 lg:px-8 dark:text-white">
        {title}
      </h2>
    </div>
  )
}
