import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Album } from '@/features/album/types/album.type'

export const getAlbum = (
  output: AlbumOutput,
  albumId: number,
): Promise<Album> => {
  return output.getAlbum(albumId)
}
