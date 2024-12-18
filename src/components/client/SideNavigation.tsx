'use client'

import Image from 'next/image'
import posterImage from '@/images/poster.jpg'
import Link from 'next/link'
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import clsx from 'clsx'
import { ReactNode, useEffect, useState } from 'react'

interface SideNavigationProps {
  allAlbums: ReactNode
  allSongs: ReactNode
}

const SideNavigation = ({ allAlbums, allSongs }: SideNavigationProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm)
  const homeUrl = `/${searchQuery ? `?${searchParams.toString()}` : ''}`

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 300)

    return () => clearTimeout(handler)
  }, [searchTerm])

  useEffect(() => {
    if (debouncedTerm.length === 0) {
      router.push(pathName)
    } else {
      const params = new URLSearchParams(searchParams.toString())
      params.set('search', debouncedTerm)
      router.push(`${pathName}?${params}`, { scroll: false })
    }
  }, [debouncedTerm, pathName, router, searchParams])

  useEffect(() => {
    if (searchQuery?.toLowerCase() === 'caca') {
      redirect('/caca')
    }
  }, [searchQuery])

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10',
        'bg-slate-50 dark:bg-black',
        'h-screen px-4 pb-5 pt-10',
        'sm:sticky sm:top-0 sm:min-h-screen',
        'lg:border-x lg:border-slate-200 dark:border-slate-800',
      )}
    >
      <div className="mx-auto flex items-center gap-4 sm:mx-0">
        <Link
          href={homeUrl}
          className="overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:rounded-xl lg:rounded-2xl dark:shadow-slate-800"
          aria-label="Homepage"
        >
          <Image
            className="w-24 rounded"
            src={posterImage}
            alt=""
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
            priority
          />
        </Link>
        <p className="text-xl font-bold text-slate-900 dark:text-slate-400">
          <Link href={homeUrl}>starrymusic.fr</Link>
        </p>
      </div>

      <div className="h-1/4">
        <h2 className="text-xl font-semibold leading-7 text-slate-700 dark:text-white">
          Albums
        </h2>
        <div className="h-full overflow-auto rounded-lg bg-slate-200/50 dark:bg-slate-900">
          {allAlbums}
        </div>
      </div>

      <div className="h-[40%] scroll-auto">
        <h2 className="text-xl font-semibold leading-7 text-slate-700 dark:text-white">
          Musiques
        </h2>
        <div className="h-full overflow-auto rounded-lg bg-slate-200/50 dark:bg-slate-900">
          {allSongs}
        </div>
      </div>

      <div className="relative mt-auto flex flex-col items-center gap-2">
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Rechercher..."
          onChange={(event) => setSearchTerm(event.target.value)}
          defaultValue={searchQuery || ''}
          autoFocus
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-black dark:text-white"
        />
      </div>
    </div>
  )
}

export default SideNavigation
