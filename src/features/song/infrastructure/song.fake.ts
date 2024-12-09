import { SongOutput } from '@/features/song/infrastructure/song.output'
import { Songs } from '@/features/song/types/songs.type'
import { Song } from '@/features/song/types/song.type'
import { mockSongs } from '@/features/song/mocks/songs.mock'
import { mockSong } from '@/features/song/mocks/song.mock'

export class SongFake implements SongOutput {
  async getAllSongs(): Promise<Songs> {
    return Promise.resolve(mockSongs)
  }

  async getSong(_: number): Promise<Song> {
    return Promise.resolve(mockSong)
  }

  async getSongByTitle(_: string): Promise<Song> {
    return Promise.resolve(mockSong)
  }
}
