import { createClient } from '@supabase/supabase-js'
import { Database } from '../../supabase/database.type'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY!

export const supabase = createClient<Database>(url, key)
