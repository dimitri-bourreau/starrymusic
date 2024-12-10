import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { AlbumApi } from '@/features/album/infrastructure/album.api'
import { SongOutput } from '@/features/song/infrastructure/song.output'
import { SongApi } from '@/features/song/infrastructure/song.api'
import { ImageOutput } from '@/features/image/infrastructure/image.output'
import { ImageApi } from '@/features/image/infrastructure/image.api'
import { CoverOutput } from '@/features/cover/infrastructure/cover.output'
import { CoverApi } from '@/features/cover/infrastructure/cover.api'

interface Outputs {
  album: AlbumOutput
  cover: CoverOutput
  image: ImageOutput
  song: SongOutput
}

export const outputs: Outputs = {
  album: new AlbumApi(),
  cover: new CoverApi(),
  image: new ImageApi(),
  song: new SongApi(),
}
