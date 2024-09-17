import { ImageOutput } from '@/features/image/infrastructure/image.output'

export const getImage = async (output: ImageOutput, imageId: number) => {
  return output.getImage(imageId)
}
