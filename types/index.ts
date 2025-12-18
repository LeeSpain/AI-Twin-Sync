export interface User {
  id: string
  email: string
  full_name: string
  preferred_name?: string
  avatar_url?: string
  role: 'user' | 'admin'
  created_at: string
  updated_at: string
}

export interface Company {
  id: string
  user_id: string
  name: string
  website_url?: string
  description?: string
  industry?: string
  is_primary: boolean
  created_at: string
  updated_at: string
}

export interface Message {
  id: string
  conversation_id: string
  role: 'user' | 'atlas'
  content: string
  metadata?: Record<string, any>
  created_at: string
}

export interface Conversation {
  id: string
  user_id: string
  title?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Task {
  id: string
  user_id: string
  company_id?: string
  title: string
  description?: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  due_date?: string
  created_at: string
  updated_at: string
}

export interface Contact {
  id: string
  user_id: string
  full_name: string
  email?: string
  phone?: string
  company_name?: string
  relationship_type?: string
  importance_score: number
  created_at: string
  updated_at: string
}
