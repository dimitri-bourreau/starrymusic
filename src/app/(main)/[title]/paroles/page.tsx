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

  return (
    <div className="flex flex-col gap-4 p-4 px-10">
      {music.lyrics.map((chapter, chapterIndex) => {
        return (
          <div key={chapterIndex}>
            {chapter.map((line, lineIndex) => (
              <p
                className="dark:text-white"
                key={`${chapterIndex}${lineIndex}`}
              >
                {line}
              </p>
            ))}
          </div>
        )
      })}
    </div>
  )
}
