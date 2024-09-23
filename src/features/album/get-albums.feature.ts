import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Albums } from '@/features/album/types/albums.type'

/**
 * Returns all albums, sorted by title alphabetical order
 */
export const getAlbums = async (output: AlbumOutput): Promise<Albums> => {
  const albums = await output.getAlbums()
  return albums.sort((a, b) => {
    return a.title < b.title ? -1 : 1
  })
}
