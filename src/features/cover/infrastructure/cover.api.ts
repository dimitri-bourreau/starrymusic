import { CoverOutput } from '@/features/cover/infrastructure/cover.output'
import { supabase } from '@/config/supabase.config'
import { Covers } from '../types/covers.type'

export class CoverApi implements CoverOutput {
  async getCovers(): Promise<Covers> {
    const { data: covers, error } = await supabase.from('covers').select('*')
    if (covers === null || error) {
      throw new Error('Échec de la récupération des covers')
    }
    return covers
  }
}
