import getAllMusic from '@/starrysky-music/features/get-all-music'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function AllMusicTable() {
  const router = useRouter()
  const pathName = usePathname()
  const decodedPathName = decodeURIComponent(pathName)
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  const songs = getAllMusic().sort((a, b) => {
    return a.title < b.title ? -1 : 1
  })

  const [musicToDisplay, setMusicToDisplay] = useState(songs)

  useEffect(() => {
    if (!searchQuery) {
      setMusicToDisplay(songs)
    } else {
      const filteredMusic = songs.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setMusicToDisplay(filteredMusic)
    }
  }, [searchQuery])

  const redirectToTitle = (title: string) => {
    let url = encodeURI(`/${title}`)
    if (pathName.endsWith('paroles')) url += '/paroles'
    else if (pathName.endsWith('details')) url += '/details'
    else if (pathName.endsWith('ecouter')) url += '/ecouter'
    if (searchQuery) url += `?${searchParams.toString()}`
    router.push(url)
  }

  if (musicToDisplay.length === 0) {
    return (
      <p className="p-4 text-gray-500">
        Aucune musique ne correspond à votre recherche
      </p>
    )
  }

  return (
    <table className="w-full text-left">
      <thead className="border-b border-white/10 text-sm leading-6 text-slate-700 dark:text-white">
        <tr>
          <th scope="col" className="hidden p-4 font-semibold">
            Titre
          </th>
        </tr>
      </thead>

      <tbody>
        {musicToDisplay.map(({ title, album }) => (
          <tr
            key={`${title}:${album}`}
            className={clsx('cursor-pointer dark:hover:bg-pink-600/50', {
              'bg-pink-200': decodedPathName.includes(`/${title}/`),
              'hover:bg-pink-600/10': !decodedPathName.includes(`/${title}/`),
            })}
            onClick={() => redirectToTitle(title)}
          >
            <td className="py-2">
              <div className="flex gap-x-3">
                <p
                  className="px-4 font-mono text-sm leading-6 text-slate-700 dark:text-white"
                  dangerouslySetInnerHTML={{
                    __html: searchQuery
                      ? title.replaceAll(
                          new RegExp(searchQuery, 'ig'),
                          `<span style="background-color:yellow">$&</span>`,
                        )
                      : title,
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
