import { SongOutput } from '@/features/song/infrastructure/song.output'
import { Song } from '@/features/song/types/song.type'

export const getSong = (output: SongOutput, songId: number): Promise<Song> => {
  return output.getSong(songId)
}
