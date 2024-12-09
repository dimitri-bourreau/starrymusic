import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Setlists } from '@/features/album/types/setlists.type'

export const getSetlists = (output: AlbumOutput): Promise<Setlists> => {
  return output.getSetlists()
}
