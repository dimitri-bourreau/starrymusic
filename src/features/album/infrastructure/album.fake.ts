import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Albums } from '@/features/album/types/albums.type'
import { Setlist } from '@/features/album/types/setlist.type'
import { Album } from '@/features/album/types/album.type'
import { mockAlbum } from '@/features/album/mocks/album.mock'
import { mockAlbums } from '@/features/album/mocks/albums.mock'
import { mockAlbumSetlist } from '@/features/album/mocks/album-setlist.mock'

export class AlbumFake implements AlbumOutput {
  async getAlbum(_: number): Promise<Album> {
    return Promise.resolve(mockAlbum)
  }

  async getAlbums(): Promise<Albums> {
    return Promise.resolve(mockAlbums)
  }

  async getAlbumSetlist(_: number): Promise<Setlist> {
    return Promise.resolve(mockAlbumSetlist)
  }
}
