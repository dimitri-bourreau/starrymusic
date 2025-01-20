import Image from 'next/image'
import posterImage from '@/images/poster.jpg'
import Link from 'next/link'

export default function PictureTitleAndSubtitle() {
  return (
    <div className="flex flex-col gap-2">
      <div className="mx-auto flex items-center gap-4 sm:mx-0">
        <Link
          href="/"
          className="overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:rounded-xl lg:rounded-2xl dark:shadow-slate-800"
          aria-label="Homepage"
        >
          <Image
            className="w-42 rounded"
            src={posterImage}
            alt=""
            width={200}
            height={200}
            priority
          />
        </Link>
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold text-slate-900 dark:text-slate-400">
            <Link href="/">starrymusic.fr</Link>
          </p>
          <p className="text-left text-sm font-medium text-slate-700 dark:text-zinc-300">
            Site réalisé par des fans de Starrysky pour regrouper leurs musiques
            avec leurs paroles. 👋
          </p>
        </div>
      </div>
    </div>
  )
}
