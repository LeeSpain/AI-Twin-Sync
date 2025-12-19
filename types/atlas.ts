/**
 * Types specific to the Atlas AI agent.
 */

export type AtlasRole = 'user' | 'atlas' | 'assistant' | 'system'

export interface AtlasMessage {
    id: string
    role: AtlasRole
    content: string
    timestamp: Date
    metadata?: Record<string, any>
}

export type AtlasActionType =
    | 'send_email'
    | 'schedule_event'
    | 'create_task'
    | 'update_contact'
    | 'research'

export interface AtlasAction {
    id: string
    type: AtlasActionType
    description: string
    status: 'pending' | 'success' | 'failed'
    payload: Record<string, any>
    created_at: string
}

export interface AtlasMemory {
    id: string
    content: string
    embedding?: number[]
    importance: number
    tags: string[]
    created_at: string
    last_accessed_at?: string
}

export interface AtlasConfidenceScore {
    value: number // 0.0 to 1.0
    reasoning: string
}

export interface AtlasApprovalRequest {
    id: string
    action: AtlasAction
    summary: string
    confidence: AtlasConfidenceScore
    expires_at?: string
}

export interface AtlasContext {
    userId: string
    userName: string
    timezone: string
    currentUrl?: string
    preferences?: Record<string, any>
}

export interface AtlasResponse {
    content: string
    actions?: AtlasAction[]
    memories?: AtlasMemory[]
}
