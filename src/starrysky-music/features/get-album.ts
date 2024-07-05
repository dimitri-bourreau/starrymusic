import Album from '@/starrysky-music/types/album.type'
import getAllAlbums from '@/starrysky-music/features/get-all-albums'

const getAlbum = (albumTitle: Album['title']): Album | undefined => {
  const albums = getAllAlbums()
  return albums.find((album) => album.title === albumTitle)
}

export default getAlbum
