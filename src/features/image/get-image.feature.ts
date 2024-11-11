import { ImageOutput } from '@/features/image/infrastructure/image.output'

export const getImage = async (
  output: ImageOutput,
  imageId?: number | null,
) => {
  if (typeof imageId === 'number') return output.getImage(imageId)
  return output.getImage(1) // ID for default image
}
