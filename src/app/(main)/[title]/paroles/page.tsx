import getMusic from '@/starrysky-music/features/get-music'

interface PageProps {
  params: { title: string }
}

export default function Page({ params }: PageProps) {
  const music = getMusic(decodeURIComponent(params.title))

  if (!music)
    return (
      <p className="ml-4 mt-10">
        Impossible de trouver les paroles, contactez Dimitri, c&apos;est louche
        ! 🤔
      </p>
    )

  if (music.lyrics === null)
    return (
      <p className="ml-4 mt-10 text-gray-500">
        Cette musique ne contient pas de paroles.
      </p>
    )

  return <p>OK</p>
}
