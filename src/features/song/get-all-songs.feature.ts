import { SongOutput } from '@/features/song/infrastructure/song.output'
import { Songs } from '@/features/song/types/songs.type'

/**
 * Return all songs, sorted by alphabetical order
 */
export const getAllSongs = async (output: SongOutput): Promise<Songs> => {
  const songs = await output.getAllSongs()
  return songs.sort((a, b) => {
    return a.title < b.title ? -1 : 1
  })
}
