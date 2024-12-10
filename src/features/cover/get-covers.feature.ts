import { CoverOutput } from '@/features/cover/infrastructure/cover.output'
import { Covers } from '@/features/cover/types/covers.type'

export const getCovers = (output: CoverOutput): Promise<Covers> => {
  return output.getCovers()
}
