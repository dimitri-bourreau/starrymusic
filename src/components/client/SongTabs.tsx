'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface SongTabsProps {
  title: string
  proposeCovers?: boolean
}

const SongTabs = ({ title, proposeCovers }: SongTabsProps) => {
  const router = useRouter()
  const pathName = usePathname()

  const tabs = [
    {
      name: 'Paroles',
      href: `/${title}/paroles`,
      current: pathName.includes('paroles'),
    },
    {
      name: 'Détails',
      href: `/${title}/details`,
      current: pathName.includes('details'),
    },
  ]

  if (proposeCovers)
    tabs.push({
      name: 'Covers',
      href: `/${title}/covers`,
      current: pathName.includes('covers'),
    })

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Sélectionnez un onglet
        </label>
        <select
          id="tabs"
          name="tabs"
          defaultValue={tabs.find((tab) => tab.current)?.name || ''}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-700"
          onChange={(event) => {
            const currentTab = tabs.find(
              (tab) => tab.name === event.target.value,
            )
            if (currentTab?.href) router.push(currentTab.href)
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={clsx(
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                  {
                    'border-b-pink-500 text-pink-600': tab.current,
                    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 dark:hover:text-gray-500':
                      !tab.current,
                  },
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SongTabs
