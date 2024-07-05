'use client'

import AllMusicTable from '@/components/AllMusicTable'

export default function Home() {
  return (
    <div className="px-4 py-10">
      <h2 className="px-4 text-2xl font-semibold leading-7 text-slate-700 sm:px-6 lg:px-8 dark:text-white">
        Toutes les musiques
      </h2>
      <AllMusicTable />
    </div>
  )
}
