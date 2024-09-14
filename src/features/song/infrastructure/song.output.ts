import { Songs } from '@/features/song/types/songs.type'

export interface SongOutput {
  getAllSongs(): Promise<Songs>
}
