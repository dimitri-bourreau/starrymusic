import { SongOutput } from '@/features/song/infrastructure/song.output'
import { Songs } from '@/features/song/types/songs.type'
import { supabase } from '@/config/supabase.config'
import { Song } from '@/features/song/types/song.type'

export class SongApi implements SongOutput {
  async getAllSongs(): Promise<Songs> {
    const { data: songs, error } = await supabase.from('songs').select('*')
    if (songs === null || error)
      throw new Error('Échec de la récupération des musiques')
    return songs
  }

  async getSong(songId: number): Promise<Song> {
    const { data: song, error } = await supabase
      .from('songs')
      .select()
      .eq('ID', songId)
    if (song === null || !song[0] || error)
      throw new Error(`Échec de la récupération de la musique à l'id ${songId}`)
    return song[0]
  }

  async getSongByTitle(soundTitle: string): Promise<Song> {
    const { data: song, error } = await supabase
      .from('songs')
      .select()
      .eq('title', soundTitle)
    if (song === null || !song[0] || error)
      throw new Error(
        `Échec de la récupération de la musique au titre ${soundTitle}`,
      )
    return song[0]
  }
}
