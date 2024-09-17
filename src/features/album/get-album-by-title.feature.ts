import { AlbumOutput } from '@/features/album/infrastructure/album.output'

export const getAlbumByTitle = async (
  output: AlbumOutput,
  albumTitle: string,
) => {
  const albums = await output.getAlbums()
  const album = albums.find((album) => album.title === albumTitle)
  if (!album)
    throw new Error(`Impossible de récupérer l'album au titre ${albumTitle}`)
  return album
}
