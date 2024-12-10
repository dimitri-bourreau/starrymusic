import { Covers } from '@/features/cover/types/covers.type'

export interface CoverOutput {
  getCovers(): Promise<Covers>
}
