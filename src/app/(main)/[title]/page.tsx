import getAllMusicTitles from '@/starrysky-music/features/get-all-music-titles'
import Music from '@/starrysky-music/types/music.type'
import { permanentRedirect } from 'next/navigation'

export function generateStaticParams() {
  const titles = getAllMusicTitles()
  return titles.map((title) => ({
    title,
  }))
}

interface PageProps {
  params: { title: Music['title'] }
}

export default function Page({ params }: PageProps) {
  permanentRedirect(`/${params.title}/paroles`)
}
