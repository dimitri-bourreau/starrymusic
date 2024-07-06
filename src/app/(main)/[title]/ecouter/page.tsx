import getMusic from '@/starrysky-music/features/get-music'
import Link from 'next/link'

interface PageProps {
  params: { title: string }
}

export default function Page({ params }: PageProps) {
  const music = getMusic(decodeURIComponent(params.title))

  if (!music)
    return (
      <p className="ml-4 mt-10">
        Impossible de trouver les liens, contactez Dimitri, c&apos;est pas cool
        ! 🤔
      </p>
    )

  const { youTube, appleMusic, bandCamp, deezer, spotify } = music.links

  const MediaLink = ({ href }: { href: string | null }) => {
    if (!href)
      return <p className="italic text-gray-500">Pas encore répertorié ❤️</p>
    return (
      <Link href={href} className="text-pink-600">
        {href}
      </Link>
    )
  }

  return (
    <dl className="divide-y divide-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">YouTube</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <MediaLink href={youTube} />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Spotify</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <MediaLink href={spotify} />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Deezer</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <MediaLink href={deezer} />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Apple Music
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <MediaLink href={appleMusic} />
        </dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Bandcamp
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <MediaLink href={bandCamp} />
        </dd>
      </div>
    </dl>
  )
}
