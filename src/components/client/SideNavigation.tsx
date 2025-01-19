import Image from 'next/image'
import posterImage from '@/images/poster.jpg'
import Link from 'next/link'
import clsx from 'clsx'
import ExternalLinks from '@/components/server/ExternalLinks'

const SideNavigation = () => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between gap-4',
        'bg-slate-50 dark:bg-black',
        'h-screen px-4 pb-5 pt-10',
        'sm:sticky sm:top-0 sm:min-h-screen',
        'lg:border-x lg:border-slate-200 dark:border-slate-800',
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="mx-auto flex items-center gap-4 sm:mx-0">
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
        <p className="text-sm font-medium text-slate-700 dark:text-zinc-300">
          Site réalisé par des fans de Starrysky pour regrouper leurs musiques
          avec leurs paroles. 👋
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Link href="/">
          <button
            type="button"
            className="rounded bg-indigo-50 px-2 py-1 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-900 dark:hover:text-pink-500"
          >
            Toutes les musiques
          </button>
        </Link>
        <div className="flex gap-2">
          <Link href="/albums">
            <button
              type="button"
              className="rounded bg-indigo-50/50 px-2 py-1 text-sm shadow-sm hover:bg-indigo-50 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-900 dark:hover:text-pink-500"
            >
              Albums
            </button>
          </Link>
          <Link href="/covers">
            <button
              type="button"
              className="rounded bg-indigo-50/50 px-2 py-1 text-sm shadow-sm hover:bg-indigo-50 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-900 dark:hover:text-pink-500"
            >
              Covers
            </button>
          </Link>
        </div>
      </div>

      <ExternalLinks />
    </div>
  )
}

export default SideNavigation
