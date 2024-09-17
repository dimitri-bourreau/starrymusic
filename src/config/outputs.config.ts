import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { AlbumApi } from '@/features/album/infrastructure/album.api'
import { SongOutput } from '@/features/song/infrastructure/song.output'
import { SongApi } from '@/features/song/infrastructure/song.api'
import { ImageOutput } from '@/features/image/infrastructure/image.output'
import { ImageApi } from '@/features/image/infrastructure/image.api'

interface Outputs {
  album: AlbumOutput
  song: SongOutput
  image: ImageOutput
}

export const outputs: Outputs = {
  album: new AlbumApi(),
  song: new SongApi(),
  image: new ImageApi(),
}
