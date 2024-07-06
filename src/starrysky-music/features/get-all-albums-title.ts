import getAllAlbums from '@/starrysky-music/features/get-all-albums'

const getAllAlbumsTitle = () => {
  const albums = getAllAlbums()
  return albums.map(({ title }) => title)
}

export default getAllAlbumsTitle
