export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            user_profiles: {
                Row: {
                    id: string
                    email: string
                    full_name: string | null
                    avatar_url: string | null
                    role: 'user' | 'admin' | 'super_admin'
                    preferences: Json
                    is_onboarded: boolean
                    created_at: string
                    updated_at: string
                    deleted_at: string | null
                }
                Insert: {
                    id: string
                    email: string
                    full_name?: string | null
                    avatar_url?: string | null
                    role?: 'user' | 'admin' | 'super_admin'
                    preferences?: Json
                    is_onboarded?: boolean
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
                Update: {
                    id?: string
                    email?: string
                    full_name?: string | null
                    avatar_url?: string | null
                    role?: 'user' | 'admin' | 'super_admin'
                    preferences?: Json
                    is_onboarded?: boolean
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
            }
            companies: {
                Row: {
                    id: string
                    owner_id: string
                    name: string
                    domain: string | null
                    logo_url: string | null
                    industry: string | null
                    created_at: string
                    updated_at: string
                    deleted_at: string | null
                }
                Insert: {
                    id?: string
                    owner_id: string
                    name: string
                    domain?: string | null
                    logo_url?: string | null
                    industry?: string | null
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
                Update: {
                    id?: string
                    owner_id?: string
                    name?: string
                    domain?: string | null
                    logo_url?: string | null
                    industry?: string | null
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
            }
            company_integrations: {
                Row: {
                    id: string
                    company_id: string
                    provider: string
                    access_token: string | null
                    refresh_token: string | null
                    expires_at: string | null
                    metadata: Json
                    is_active: boolean
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    company_id: string
                    provider: string
                    access_token?: string | null
                    refresh_token?: string | null
                    expires_at?: string | null
                    metadata?: Json
                    is_active?: boolean
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    company_id?: string
                    provider?: string
                    access_token?: string | null
                    refresh_token?: string | null
                    expires_at?: string | null
                    metadata?: Json
                    is_active?: boolean
                    created_at?: string
                    updated_at?: string
                }
            }
            contacts: {
                Row: {
                    id: string
                    user_id: string
                    company_id: string | null
                    first_name: string | null
                    last_name: string | null
                    email: string | null
                    phone: string | null
                    linkedin_url: string | null
                    position: string | null
                    notes: string | null
                    tags: string[] | null
                    contact_type: 'professional' | 'personal' | 'family' | 'vip'
                    created_at: string
                    updated_at: string
                    deleted_at: string | null
                }
                Insert: {
                    id?: string
                    user_id: string
                    company_id?: string | null
                    first_name?: string | null
                    last_name?: string | null
                    email?: string | null
                    phone?: string | null
                    linkedin_url?: string | null
                    position?: string | null
                    notes?: string | null
                    tags?: string[] | null
                    contact_type?: 'professional' | 'personal' | 'family' | 'vip'
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    company_id?: string | null
                    first_name?: string | null
                    last_name?: string | null
                    email?: string | null
                    phone?: string | null
                    linkedin_url?: string | null
                    position?: string | null
                    notes?: string | null
                    tags?: string[] | null
                    contact_type?: 'professional' | 'personal' | 'family' | 'vip'
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
            }
            conversations: {
                Row: {
                    id: string
                    user_id: string
                    title: string | null
                    type: 'chat' | 'voice' | 'email_thread'
                    created_at: string
                    updated_at: string
                    deleted_at: string | null
                }
                Insert: {
                    id?: string
                    user_id: string
                    title?: string | null
                    type?: 'chat' | 'voice' | 'email_thread'
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    title?: string | null
                    type?: 'chat' | 'voice' | 'email_thread'
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
            }
            messages: {
                Row: {
                    id: string
                    conversation_id: string
                    role: string
                    content: string
                    metadata: Json
                    created_at: string
                }
                Insert: {
                    id?: string
                    conversation_id: string
                    role: string
                    content: string
                    metadata?: Json
                    created_at?: string
                }
                Update: {
                    id?: string
                    conversation_id?: string
                    role?: string
                    content?: string
                    metadata?: Json
                    created_at?: string
                }
            }
            ai_memories: {
                Row: {
                    id: string
                    user_id: string
                    content: string
                    embedding: string | null
                    importance_score: number | null
                    tags: string[] | null
                    created_at: string
                    last_accessed_at: string | null
                }
                Insert: {
                    id?: string
                    user_id: string
                    content: string
                    embedding?: string | null
                    importance_score?: number | null
                    tags?: string[] | null
                    created_at?: string
                    last_accessed_at?: string | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    content?: string
                    embedding?: string | null
                    importance_score?: number | null
                    tags?: string[] | null
                    created_at?: string
                    last_accessed_at?: string | null
                }
            }
            tasks: {
                Row: {
                    id: string
                    user_id: string
                    title: string
                    description: string | null
                    status: 'todo' | 'in_progress' | 'blocked' | 'done' | 'archived'
                    priority: 'low' | 'medium' | 'high' | 'critical'
                    due_date: string | null
                    company_id: string | null
                    created_at: string
                    updated_at: string
                    deleted_at: string | null
                }
                Insert: {
                    id?: string
                    user_id: string
                    title: string
                    description?: string | null
                    status?: 'todo' | 'in_progress' | 'blocked' | 'done' | 'archived'
                    priority?: 'low' | 'medium' | 'high' | 'critical'
                    due_date?: string | null
                    company_id?: string | null
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    title?: string
                    description?: string | null
                    status?: 'todo' | 'in_progress' | 'blocked' | 'done' | 'archived'
                    priority?: 'low' | 'medium' | 'high' | 'critical'
                    due_date?: string | null
                    company_id?: string | null
                    created_at?: string
                    updated_at?: string
                    deleted_at?: string | null
                }
            }
            notifications: {
                Row: {
                    id: string
                    user_id: string
                    title: string
                    message: string
                    is_read: boolean
                    type: string
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    title: string
                    message: string
                    is_read?: boolean
                    type?: string
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    title?: string
                    message?: string
                    is_read?: boolean
                    type?: string
                    created_at?: string
                    updated_at?: string
                }
            }
        }
    }
}

// Aliases mapped to actual DB types
export type User = Database['public']['Tables']['user_profiles']['Row']
export type UserProfile = Database['public']['Tables']['user_profiles']['Row']
export type Company = Database['public']['Tables']['companies']['Row']
export type Integration = Database['public']['Tables']['company_integrations']['Row']
export type Contact = Database['public']['Tables']['contacts']['Row']
export type Conversation = Database['public']['Tables']['conversations']['Row']
export type Message = Database['public']['Tables']['messages']['Row']
export type Task = Database['public']['Tables']['tasks']['Row']
export type Notification = Database['public']['Tables']['notifications']['Row']
