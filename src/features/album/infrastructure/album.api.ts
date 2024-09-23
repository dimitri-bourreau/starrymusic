import { AlbumOutput } from '@/features/album/infrastructure/album.output'
import { Albums } from '@/features/album/types/albums.type'
import { supabase } from '@/config/supabase.config'
import { Setlist } from '@/features/album/types/setlist.type'
import { Album } from '@/features/album/types/album.type'

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

  async getAlbumSetlist(albumId: number): Promise<Setlist> {
    const { data: setlist, error } = await supabase
      .from('setlists')
      .select()
      .eq('album_id', albumId)
    if (setlist === null || !setlist[0] || error) {
      throw new Error(
        `Échec de la récupération de la setlist pour l'album à l'ID ${albumId})`,
      )
    }
    return setlist[0]
  }
}
