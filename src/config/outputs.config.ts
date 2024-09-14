import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { AlbumApi } from '@/features/album/infrastructure/album.api'
import { SongOutput } from '@/features/song/infrastructure/song.output'
import { SongApi } from '@/features/song/infrastructure/song.api'

interface Outputs {
  album: AlbumOutput
  song: SongOutput
}

export const outputs: Outputs = {
  album: new AlbumApi(),
  song: new SongApi(),
}
