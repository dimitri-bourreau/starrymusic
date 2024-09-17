import { Database } from '../../../../supabase/database.type'

export type Image = Database['public']['Tables']['images']['Row']
