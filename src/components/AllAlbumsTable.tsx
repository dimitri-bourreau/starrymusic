import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import getAllAlbums from '@/starrysky-music/features/get-all-albums'

export default function AllAlbumsTable() {
  const router = useRouter()
  const pathName = usePathname()
  const decodedPathName = decodeURIComponent(pathName)

  const albums = getAllAlbums().sort((a, b) => {
    return a.title < b.title ? -1 : 1
  })

  const redirectToAlbum = (title: string) => {
    const url = encodeURI(`/albums/${title}`)
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
        {albums.map(({ title, image }) => (
          <tr
            key={`${title}:${image}`}
            className={clsx('cursor-pointer dark:hover:bg-pink-600/50', {
              'bg-pink-200': decodedPathName.includes(title),
              'hover:bg-pink-600/10': !decodedPathName.includes(title),
            })}
            onClick={() => redirectToAlbum(title)}
          >
            <td className="py-2">
              <div className="flex gap-x-3">
                <p className="px-4 font-mono text-sm leading-6 text-slate-700 dark:text-white">
                  {title}
                </p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
