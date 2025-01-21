import clsx from 'clsx'
import ExternalLinks from '@/components/server/ExternalLinks'
import PictureTitleAndSubtitle from '../server/PictureTitleAndSubtitle'
import InternalLinks from '../server/InternalLinks'
import Link from 'next/link'

export default function SideNavigation() {
  return (
    <div
      className={clsx(
        'w-full sm:w-1/4',
        'flex flex-col justify-between gap-4',
        'bg-slate-50 dark:bg-black',
        'h-screen px-4 pb-5 pt-10',
        'sm:sticky sm:top-0 sm:min-h-screen',
        'lg:border-x lg:border-slate-200 dark:border-slate-800',
      )}
    >
      <PictureTitleAndSubtitle />

      <InternalLinks />

      <div className="flex items-end justify-between">
        <ExternalLinks />

        <Link href="/connexion">
          <button
            type="button"
            className="h-10 w-10 rounded-full p-1.5 text-white transition-all hover:h-12 hover:w-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg
              fill="none"
              stroke-width="1.5"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}
