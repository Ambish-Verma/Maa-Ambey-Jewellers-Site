import { createClient } from '@supabase/supabase-js'

let supabase

function getClient() {
  if (!supabase) {
    supabase = createClient(
      process.env.STORAGE_URL,
      process.env.STORAGE_KEY
    )
  }
  return supabase
}

export default getClient
