import { CoverOutput } from '@/features/cover/infrastructure/cover.output'
import { mockCover } from '@/features/cover/mocks/cover.mock'
import { Covers } from '../types/covers.type'

export class CoverFake implements CoverOutput {
  getCovers(): Promise<Covers> {
    return Promise.resolve([mockCover])
  }
}
