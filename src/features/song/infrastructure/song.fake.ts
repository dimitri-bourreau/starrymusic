import { SongOutput } from '@/features/song/infrastructure/song.output'
import { Songs } from '@/features/song/types/songs.type'

export class SongFake implements SongOutput {
  async getAllSongs(): Promise<Songs> {
    return Promise.resolve([])
  }
}
