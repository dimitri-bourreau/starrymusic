import { Songs } from '@/features/song/types/songs.type'
import { Song } from '@/features/song/types/song.type'

export interface SongOutput {
  getAllSongs(): Promise<Songs>
  getSong(songId: number): Promise<Song>
  getSongByTitle(songTitle: string): Promise<Song>
}
