import { Database } from '../../../../supabase/database.type'

export type Song = Database['public']['Tables']['songs']['Row']
