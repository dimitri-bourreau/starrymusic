import { Setlist } from '@/features/album/types/setlist.type'
import { Album } from '@/features/album/types/album.type'
import { Setlists } from '@/features/album/types/setlists.type'

export const getSetlist = (
  album: Album,
  setlists: Setlists,
): Setlist | undefined => {
  return setlists.find(({ album_id }) => album.ID === album_id)
}
