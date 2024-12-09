import { ImageOutput } from '@/features/image/infrastructure/image.output'
import { ImageType } from '@/features/image/types/image.type'
import { supabase } from '@/config/supabase.config'

export class ImageApi implements ImageOutput {
  async getImage(imageId: number): Promise<ImageType> {
    const { data: image, error } = await supabase
      .from('images')
      .select()
      .eq('ID', imageId)
    if (image === null || !image[0] || error) {
      console.log(image)
      console.log('---------')
      throw new Error(`Échec de la récupération de l'image à l'id ${imageId}`)
    }
    return image[0]
  }
}
