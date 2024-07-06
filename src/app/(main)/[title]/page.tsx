import getAllMusicTitles from '@/starrysky-music/features/get-all-music-titles'
import Music from '@/starrysky-music/types/music.type'
import { permanentRedirect } from 'next/navigation'
import getMusic from '@/starrysky-music/features/get-music'

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
  const music = getMusic(decodeURIComponent(params.title))
  const url = music?.lyrics
    ? `/${params.title}/paroles`
    : `/${params.title}/details`
  permanentRedirect(url)
}
