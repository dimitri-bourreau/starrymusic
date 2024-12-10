import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import posterImage from '@/images/poster.jpg'
import ExternalLinks from '@/components/server/ExternalLinks'

export default function Home() {
  const bandMembers = ['Tai', 'Sasha', 'Yuki', 'Logan', 'Neku']

  return (
    <div className="flex">
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <span className="font-mono text-slate-500 dark:text-zinc-50">
          Starrysky
        </span>
        <span className="mt-6 flex gap-6 font-bold text-slate-900 dark:text-zinc-500">
          {bandMembers.map((host, hostIndex) => (
            <Fragment key={host}>
              {hostIndex !== 0 && (
                <span aria-hidden="true" className="text-slate-400">
                  /
                </span>
              )}
              {host}
            </Fragment>
          ))}
        </span>
      </div>

      <div className="flex h-screen flex-col gap-4">
        <div className="flex flex-col items-center gap-4 px-4 pb-4 pt-10 sm:px-6 md:px-4 lg:flex-row lg:px-8 lg:py-12 xl:px-12">
          <Link
            href="/"
            className="overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:rounded-xl lg:rounded-2xl dark:shadow-slate-800"
            aria-label="Homepage"
          >
            <Image
              className="w-full"
              src={posterImage}
              alt=""
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
          </Link>
          <div className="p-10 text-center lg:text-left">
            <p className="text-xl font-bold text-slate-900 dark:text-slate-400">
              <Link href="/">starrymusic.fr</Link>
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700 dark:text-zinc-300">
              Site réalisé par des fans de Starrysky pour regrouper leurs
              musiques avec leurs paroles. 👋
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Link href="/toutes-les-musiques">
            <button
              type="button"
              className="rounded bg-indigo-50 px-2 py-1 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-900 dark:hover:text-pink-500"
            >
              Toutes les musiques
            </button>
          </Link>
          <Link href="/tous-les-albums">
            <button
              type="button"
              className="rounded bg-indigo-50/50 px-2 py-1 text-sm shadow-sm hover:bg-indigo-50 dark:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-900 dark:hover:text-pink-500"
            >
              Tous les albums
            </button>
          </Link>
          <Link href="/toutes-les-covers">
            <button
              type="button"
              className="rounded bg-indigo-50/50 px-2 py-1 text-sm shadow-sm hover:bg-indigo-50 dark:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-900 dark:hover:text-pink-500"
            >
              Toutes les covers
            </button>
          </Link>
        </div>

        <div className="mt-auto px-10 pb-10">
          <ExternalLinks />
        </div>
      </div>
    </div>
  )
}
