import Music from '@/starrysky-music/types/music.type'
import getallMusic from '@/starrysky-music/features/get-all-music'

const getAllMusicTitles = (): Music['title'][] => {
  const allMusic = getallMusic()
  return allMusic.map((music) => music.title)
}

export default getAllMusicTitles
