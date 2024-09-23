import { SongOutput } from '@/features/song/infrastructure/song.output'

export const getSongByTitle = (output: SongOutput, soundTitle: string) => {
  return output.getSongByTitle(soundTitle)
}
