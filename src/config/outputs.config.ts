import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { AlbumApi } from '@/features/album/infrastructure/album.api'

interface Outputs {
  album: AlbumOutput
}

export const outputs: Outputs = {
  album: new AlbumApi(),
}
