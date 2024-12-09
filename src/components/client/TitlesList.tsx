'use client'

import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface filterAlbumsWithSearchQueryArgs {
  searchQuery: string | null
  titles: string[]
  titlesSetter: Dispatch<SetStateAction<string[]>>
}

interface TitlesListProps {
  titles: string[]
  context: 'album' | 'song'
}

export const TitlesList = ({ titles, context }: TitlesListProps) => {
  const [titlesToDisplay, setTitlesToDisplay] = useState<string[]>(titles)

  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')
  const decodedPathName = decodeURIComponent(pathName)

  const filterTitlesWithSearchQuery = ({
    searchQuery,
    titles,
    titlesSetter,
  }: filterAlbumsWithSearchQueryArgs): void => {
    if (!searchQuery) titlesSetter(titles)
    else {
      const filteredMusic = titles.filter((title) =>
        title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      titlesSetter(filteredMusic)
    }
  }

  useEffect(() => {
    filterTitlesWithSearchQuery({
      searchQuery,
      titles,
      titlesSetter: setTitlesToDisplay,
    })
  }, [searchQuery, titles])

  const redirectToAlbum = (title: string) => {
    const url = `/albums/${title}/${searchParams.toString()}`
    router.push(encodeURI(url))
  }

  const redirectToSong = (title: string) => {
    let url = `/${title}`
    if (pathName?.endsWith('paroles')) url += '/paroles'
    else if (pathName?.endsWith('details')) url += '/details'
    else if (pathName?.endsWith('ecouter')) url += '/ecouter'
    url += `?${searchParams.toString()}`
    router.push(encodeURI(url))
  }

  const redirectToTitle = (title: string) => {
    switch (context) {
      case 'album':
        redirectToAlbum(title)
        break
      case 'song':
        redirectToSong(title)
        break
    }
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
        {titlesToDisplay.map((title, index) => (
          <tr
            key={`${title}:${index}`}
            className={clsx('cursor-pointer dark:hover:bg-pink-600/50', {
              'bg-pink-200 dark:bg-pink-800':
                decodedPathName.includes(`/${title}/`) ||
                decodedPathName.endsWith(`/${title}`),
              'hover:bg-pink-600/10': !decodedPathName.includes(`/${title}/`),
            })}
            onClick={() => redirectToTitle(title)}
          >
            <td className="py-2">
              <div className="flex gap-x-3">
                <p
                  className="px-4 font-mono text-sm leading-6 text-slate-700 dark:text-white"
                  dangerouslySetInnerHTML={{
                    __html:
                      searchQuery && 0 < searchQuery.length
                        ? title.replaceAll(
                            new RegExp(searchQuery, 'ig'),
                            `<span style="text-decoration:underline">$&</span>`,
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
