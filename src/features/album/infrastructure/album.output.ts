import { Albums } from '@/features/album/types/albums.type'
import { Album } from '@/features/album/types/album.type'
import { Setlists } from '@/features/album/types/setlists.type'

export interface AlbumOutput {
  getAlbum(albumId: number): Promise<Album>
  getAlbums(): Promise<Albums>
  getSetlists(): Promise<Setlists>
}
