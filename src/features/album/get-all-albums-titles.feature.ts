import { AlbumOutput } from '@/features/album/infrastructure/album.output'

export const getAllAlbumsTitles = async (
  output: AlbumOutput,
): Promise<string[]> => {
  const albums = await output.getAlbums()
  return albums.map(({ title }) => title)
}
