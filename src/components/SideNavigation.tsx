import AllMusicTable from '@/components/AllMusicTable'
import Image from 'next/image'
import posterImage from '@/images/poster.jpg'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import AllAlbumsTable from '@/components/AllAlbumsTable'
import { ChangeEvent } from 'react'

const SideNavigation = () => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')
  const homeUrl = `/${searchQuery ? `?${searchParams.toString()}` : ''}`

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    if (!searchValue) {
      router.push(pathName)
    } else {
      const params = new URLSearchParams(searchParams.toString())
      params.set('search', searchValue)
      router.push(`${pathName}?${params}`)
    }
  }

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 bg-slate-50 px-4 py-10 sm:min-h-screen sm:gap-10 lg:border-x lg:border-slate-200 dark:border-slate-800 dark:bg-black',
        {
          'min-h-screen': pathName === '/',
        },
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
      <p className="mt-3 text-center font-medium leading-8 text-slate-700 sm:hidden dark:text-zinc-300">
        Site réalisé par des fans de Starrysky pour regrouper leurs musiques
        avec leurs paroles. 👋
      </p>

      <div className="max-h-1/3 sm:max-h-auto overflow-auto sm:overflow-hidden">
        <h2 className="text-xl font-semibold leading-7 text-slate-700 dark:text-white">
          Albums
        </h2>
        <AllAlbumsTable />
      </div>

      <div className="max-h-1/3 sm:max-h-auto overflow-auto sm:overflow-hidden">
        <h2 className="text-xl font-semibold leading-7 text-slate-700 dark:text-white">
          Musiques
        </h2>
        <AllMusicTable />
      </div>

      <div className="relative mt-auto flex items-center">
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Rechercher..."
          onChange={handleSearchInputChange}
          value={searchQuery || ''}
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

export default SideNavigation
