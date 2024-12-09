import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Albums } from '@/features/album/types/albums.type'
import { supabase } from '@/config/supabase.config'
import { Album } from '@/features/album/types/album.type'
import { Setlists } from '@/features/album/types/setlists.type'

export class AlbumApi implements AlbumOutput {
  async getAlbum(albumId: number): Promise<Album> {
    const { data: album, error } = await supabase
      .from('albums')
      .select()
      .eq('ID', albumId)
    if (album === null || !album[0] || error) {
      throw new Error('Échec de la récupération des albums')
    }
    return album[0]
  }

  async getAlbums(): Promise<Albums> {
    const { data: albums, error } = await supabase.from('albums').select('*')
    if (albums === null || error) {
      throw new Error('Échec de la récupération des albums')
    }
    return albums
  }

  async getSetlists(): Promise<Setlists> {
    const { data: setlists, error } = await supabase.from('setlists').select()
    if (setlists === null || error) {
      throw new Error(`Échec de la récupération des setlists`)
    }
    return setlists
  }
}
