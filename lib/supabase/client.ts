import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.com'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'example-key'

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials missing, using fallbacks failed unexpectedly.')
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}
