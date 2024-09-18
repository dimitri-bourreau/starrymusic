import { ImageType } from '@/features/image/types/image.type'

export interface ImageOutput {
  getImage(imageId: number): Promise<ImageType>
}
