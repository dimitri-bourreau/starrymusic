import { SongOutput } from '@/features/song/infrastructure/song.output'

/**
 * Return all songs, sorted by alphabetical order
 */
export const getAllSongs = async (output: SongOutput) => {
  const songs = await output.getAllSongs()
  return songs.sort((a, b) => {
    return a.title < b.title ? -1 : 1
  })
}
