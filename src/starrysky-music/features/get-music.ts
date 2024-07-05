import Music from '@/starrysky-music/types/music.type'
import getAllMusic from '@/starrysky-music/features/get-all-music'

const getMusic = (title: Music['title']): Music | undefined => {
  const allMusic = getAllMusic()
  return allMusic.find((music) => music.title === title)
}

export default getMusic
