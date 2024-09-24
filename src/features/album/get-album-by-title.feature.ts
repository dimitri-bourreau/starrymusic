import { Albums } from '@/features/album/types/albums.type'

export const getAlbumByTitle = (albums: Albums, albumTitle: string) => {
  const album = albums.find((album) => album.title === albumTitle)
  if (!album)
    throw new Error(`Impossible de récupérer l'album au titre ${albumTitle}`)
  return album
}
