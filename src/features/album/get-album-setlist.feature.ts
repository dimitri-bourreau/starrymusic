import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Setlist } from '@/features/album/types/setlist.type'

export const getAlbumSetlist = (
  output: AlbumOutput,
  albumId: number,
): Promise<Setlist> => {
  return output.getAlbumSetlist(albumId)
}
