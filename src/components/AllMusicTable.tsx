import getAllMusic from '@/starrysky-music/features/get-all-music'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

export default function AllMusicTable() {
  const router = useRouter()
  const pathName = usePathname()
  const decodedPathName = decodeURIComponent(pathName)

  const songs = getAllMusic().sort((a, b) => {
    return a.title < b.title ? -1 : 1
  })

  const redirectToTitle = (title: string) => {
    let url = encodeURI(`/${title}`)
    if (pathName.endsWith('paroles')) url += '/paroles'
    if (pathName.endsWith('details')) url += '/details'
    if (pathName.endsWith('ecouter')) url += '/ecouter'
    router.push(url)
  }

  return (
    <table className="w-full whitespace-nowrap text-left">
      <thead className="border-b border-white/10 text-sm leading-6 text-slate-700 dark:text-white">
        <tr>
          <th scope="col" className="hidden p-4 font-semibold">
            Titre
          </th>
        </tr>
      </thead>

      <tbody>
        {songs.map(({ title, album }) => (
          <tr
            key={`${title}:${album}`}
            className={clsx('cursor-pointer dark:hover:bg-pink-600/50', {
              'bg-pink-200': decodedPathName.includes(title),
              'hover:bg-pink-600/10': !decodedPathName.includes(title),
            })}
            onClick={() => redirectToTitle(title)}
          >
            <td className="py-2">
              <div className="flex gap-x-3">
                <div className="px-4 font-mono text-sm leading-6 text-slate-700 dark:text-white">
                  {title}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
