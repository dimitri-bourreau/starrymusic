import { Database } from '../../../../supabase/database.type'

export type Album = Database['public']['Tables']['albums']['Row']
