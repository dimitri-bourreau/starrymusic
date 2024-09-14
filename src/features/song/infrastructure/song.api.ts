import { SongOutput } from '@/features/song/infrastructure/song.output'
import { Songs } from '@/features/song/types/songs.type'
import { supabase } from '@/config/supabase.config'

export class SongApi implements SongOutput {
  async getAllSongs(): Promise<Songs> {
    const { data: songs, error } = await supabase.from('songs').select('*')
    if (songs === null || error)
      throw new Error('Échec de la récupération des musiques')
    return songs
  }
}
