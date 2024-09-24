import { Songs } from '@/features/song/types/songs.type'
import { Song } from '@/features/song/types/song.type'

interface GetSongByTitleArgs {
  titleToFind: string
  songs: Songs
}

export const getSongByTitle = ({
  titleToFind,
  songs,
}: GetSongByTitleArgs): Song | undefined => {
  return songs.find(({ title }) => title === titleToFind)
}
