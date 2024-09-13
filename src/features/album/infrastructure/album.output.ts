import { Albums } from '@/features/album/types/albums.type'

export interface AlbumOutput {
  getAlbums(): Promise<Albums>
}
