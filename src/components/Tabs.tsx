'use client'

import clsx from 'clsx'

interface TabsProps {
  onChange: (href: string) => void
  tabs: {
    name: string
    href: string
    current: boolean
  }[]
}

const Tabs = ({ tabs, onChange }: TabsProps) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          defaultValue={tabs.find((tab) => tab.current)?.name || ''}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name} onClick={() => onChange(tab.href)}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={clsx(
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                  {
                    'border-b-pink-500 text-pink-600': tab.current,
                    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                      !tab.current,
                  },
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tabs
