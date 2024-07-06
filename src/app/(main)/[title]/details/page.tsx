import MusicDetails from '@/components/MusicDetails'
import getMusic from '@/starrysky-music/features/get-music'

interface PageProps {
  params: { title: string }
}

export default function Page({ params }: PageProps) {
  const music = getMusic(decodeURIComponent(params.title))

  if (!music) return <p>Aucun détail enregistré pour l&apos;instant. 🙏</p>

  return <MusicDetails musicData={music} />
}
