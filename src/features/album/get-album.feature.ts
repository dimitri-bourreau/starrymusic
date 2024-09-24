import { Album } from '@/features/album/types/album.type'
import { Albums } from '@/features/album/types/albums.type'

export const getAlbum = (
  albums: Albums,
  albumId: number,
): Album | undefined => {
  return albums.find(({ ID }) => albumId === ID)
}
