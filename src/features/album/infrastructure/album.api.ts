import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Albums } from '@/features/album/types/albums.type'
import { supabase } from '@/config/supabase.config'

export class AlbumApi implements AlbumOutput {
  async getAlbums(): Promise<Albums> {
    const { data: albums, error } = await supabase.from('albums').select('*')
    if (albums === null || error)
      throw new Error('Échec de la récupération des albums')
    return albums
  }
}
