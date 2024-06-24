import Album from '@/starrysky-music/types/album.type'
import getAllAlbums from '@/starrysky-music/features/get-all-albums'

const getAlbum = (albumTitle: Album['title']): Album => {
  const albums = getAllAlbums()
  const album = albums.find((album) => album.title === albumTitle)

  if (!album) throw new Error(`Could not find album with title ${albumTitle}`)
  return album
}

export default getAlbum
