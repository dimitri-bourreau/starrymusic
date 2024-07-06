'use client'

import Music from '@/starrysky-music/types/music.type'
import { permanentRedirect, useSearchParams } from 'next/navigation'
import getMusic from '@/starrysky-music/features/get-music'

interface PageProps {
  params: { title: Music['title'] }
}

export default function Page({ params }: PageProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  const music = getMusic(decodeURIComponent(params.title))
  let url = `/${params.title}/paroles`
  if (searchQuery) url += `?${searchParams.toString()}`
  permanentRedirect(url)
}
