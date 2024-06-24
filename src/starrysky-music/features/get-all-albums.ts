import timeshiftFr from '../album/timeshift-fr/timeshift-fr.album.json'
import Album from '@/starrysky-music/types/album.type'

const getAllAlbums = (): Album[] => {
  return [timeshiftFr]
}

export default getAllAlbums
