import { Albums } from '@/features/album/types/albums.type'
import { Setlist } from '@/features/album/types/setlist.type'

export interface AlbumOutput {
  getAlbums(): Promise<Albums>
  getAlbumSetlist(albumId: number): Promise<Setlist>
}
