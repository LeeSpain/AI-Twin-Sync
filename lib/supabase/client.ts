import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.com'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'example-key'

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Missing Supabase environment variables - using fallbacks for build')
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}
