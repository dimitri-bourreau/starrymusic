'use client'

import Music from '@/starrysky-music/types/music.type'
import { permanentRedirect, useSearchParams } from 'next/navigation'

interface PageProps {
  params: { title: Music['title'] }
}

export default function Page({ params }: PageProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  let url = `/${params.title}/paroles`
  if (searchQuery) url += `?${searchParams.toString()}`
  permanentRedirect(url)
}
