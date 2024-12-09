import { ImageOutput } from '@/features/image/infrastructure/image.output'
import { ImageType } from '@/features/image/types/image.type'

export const getImage = async (
  output: ImageOutput,
  imageId?: number | null,
): Promise<ImageType> => {
  if (typeof imageId === 'number') return output.getImage(imageId)
  return output.getImage(1) // ID for default image
}
