import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Albums } from '@/features/album/types/albums.type'
import { Album } from '@/features/album/types/album.type'
import { mockAlbum } from '@/features/album/mocks/album.mock'
import { mockAlbums } from '@/features/album/mocks/albums.mock'
import { Setlists } from '@/features/album/types/setlists.type'
import { mockSetlists } from '@/features/album/mocks/setlists.mock'

export class AlbumFake implements AlbumOutput {
  async getAlbum(_: number): Promise<Album> {
    return Promise.resolve(mockAlbum)
  }

  async getAlbums(): Promise<Albums> {
    return Promise.resolve(mockAlbums)
  }

  async getSetlists(): Promise<Setlists> {
    return Promise.resolve(mockSetlists)
  }
}
