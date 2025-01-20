import Link from 'next/link'

export default function InternalLinks() {
  return (
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
  )
}
