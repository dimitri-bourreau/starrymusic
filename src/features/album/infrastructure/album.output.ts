import { Albums } from '@/features/album/types/albums.type'
import { Setlist } from '@/features/album/types/setlist.type'
import { Album } from '@/features/album/types/album.type'

export interface AlbumOutput {
  getAlbum(albumId: number): Promise<Album>
  getAlbums(): Promise<Albums>
  getAlbumSetlist(albumId: number): Promise<Setlist>
}
