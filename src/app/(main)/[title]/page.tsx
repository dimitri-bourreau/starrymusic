'use client'

import { permanentRedirect, useSearchParams } from 'next/navigation'

interface PageProps {
  params: { title: string }
}

export default function Page({ params }: PageProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  let url = `/${params.title}/paroles`
  if (searchQuery) url += `?${searchParams.toString()}`
  permanentRedirect(url)
}
