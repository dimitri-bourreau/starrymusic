'use client'

import clsx from 'clsx'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function InternalLinks() {
  const pathName = usePathname()

  return (
    <section className={clsx('mt-10 lg:mt-12')}>
      <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only dark:text-slate-400">
        <TinyWaveFormIcon
          colors={['fill-indigo-300', 'fill-blue-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">Navigation</span>
      </h2>
      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
      <ul
        role="list"
        className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
      >
        {(
          [
            ['Toutes les musiques', '/'],
            ['Albums', '/albums'],
          ] as const
        ).map(([label, link]) => (
          <li key={label} className="flex">
            <Link
              href={link}
              className="group flex items-center"
              aria-label={label}
            >
              <span
                className={clsx('hidden sm:block dark:text-zinc-300', {
                  'font-bold text-pink-600 dark:text-pink-500':
                    pathName === link,
                })}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
