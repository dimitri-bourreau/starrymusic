import { ImageOutput } from '@/features/image/infrastructure/image.output'
import { ImageType } from '@/features/image/types/image.type'
import { mockImage } from '@/features/image/mocks/image.mock'

export class ImageApi implements ImageOutput {
  async getImage(_: number): Promise<ImageType> {
    return Promise.resolve(mockImage)
  }
}
