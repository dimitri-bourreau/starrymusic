import AllMusicTable from '@/components/AllMusicTable'
import Image from 'next/image'
import posterImage from '@/images/poster.jpg'
import Link from 'next/link'

const SideNavigation = () => {
  return (
    <div className="flex flex-col gap-10 bg-slate-50 px-4 py-10 lg:min-h-screen lg:border-x lg:border-slate-200 dark:border-slate-800 dark:bg-black">
      <div className="flex items-center gap-4">
        <Link
          href="/"
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
          <Link href="/">starrymusic.fr</Link>
        </p>
      </div>

      <div className="relative flex items-center">
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Rechercher..."
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold leading-7 text-slate-700 dark:text-white">
          Musiques
        </h2>
        <AllMusicTable />
      </div>
    </div>
  )
}

export default SideNavigation
