import { Fragment, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Waveform } from '@/components/Waveform'
import posterImage from '@/images/poster.jpg'
import ExternalLinks from '@/components/ExternalLinks'

export default function MainLayout({ children }: { children: ReactNode }) {
  let hosts = ['Tai', 'Sasha', 'Yuki', 'Logan', 'Neku']

  return (
    <>
      <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120 dark:bg-black">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-slate-500 dark:text-zinc-50">
            Starrysky
          </span>
          <span className="mt-6 flex gap-6 font-bold text-slate-900 dark:text-zinc-500">
            {hosts.map((host, hostIndex) => (
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
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12 dark:border-slate-800">
          <Link
            href="/"
            className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl dark:shadow-slate-800"
            aria-label="Homepage"
          >
            <Image
              className="w-full"
              src={posterImage}
              alt=""
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="text-xl font-bold text-slate-900 dark:text-slate-400">
              <Link href="/">starrymusic.fr</Link>
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700 dark:text-zinc-300">
              Site réalisé par des fans de Starrysky pour regrouper leurs
              musiques avec leurs paroles.
            </p>
          </div>

          <ExternalLinks className="hidden lg:block" />
        </div>
      </header>

      <main className="border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
        <ExternalLinks className="lg:hidden" />
      </main>
    </>
  )
}
