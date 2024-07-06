import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import Link from 'next/link'

export default function ExternalLinks() {
  return (
    <section>
      <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only dark:text-slate-400">
        <TinyWaveFormIcon
          colors={['fill-indigo-300', 'fill-blue-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">Liens</span>
      </h2>

      <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />

      <ul
        role="list"
        className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
      >
        {(
          [
            ['Site officiel de Starrysky', 'https://www.starrysky.fr/'],
            [
              'Instagram de Starrysky',
              'https://www.instagram.com/starrysky_band/',
            ],
            [
              'Playlists pour découvrir Starrysky',
              'https://linktr.ee/discover_starrysky',
            ],
          ] as const
        ).map(([label, link]) => (
          <li key={label} className="flex">
            <Link
              href={link}
              className="group flex items-center"
              aria-label={label}
            >
              <span className="block hover:text-pink-500 dark:text-zinc-300">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
