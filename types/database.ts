import { Database } from './database'

export * from './database'

// Placeholder aliases as requested, mapped to actual DB types
export type User = Database['public']['Tables']['user_profiles']['Row']
export type UserProfile = Database['public']['Tables']['user_profiles']['Row']
export type Company = Database['public']['Tables']['companies']['Row']
export type Integration = Database['public']['Tables']['company_integrations']['Row']
export type Contact = Database['public']['Tables']['contacts']['Row']
export type Conversation = Database['public']['Tables']['conversations']['Row']
export type Message = Database['public']['Tables']['messages']['Row']
export type Task = Database['public']['Tables']['tasks']['Row']
export type Notification = Database['public']['Tables']['notifications']['Row']
