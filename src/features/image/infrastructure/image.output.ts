import { Image } from '@/features/image/types/image.type'

export interface ImageOutput {
  getImage(imageId: number): Promise<Image>
}
