/**
 * API Request and Response Types.
 */

export interface ApiResponse<T = any> {
    success: boolean
    data?: T
    error?: {
        code: string
        message: string
        details?: any
    }
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number
        pageSize: number
        totalItems: number
        totalPages: number
    }
}

// Request Types

export interface CreateTaskRequest {
    title: string
    description?: string
    priority?: 'low' | 'medium' | 'high' | 'critical'
    dueDate?: string
    assigneeId?: string
}

export interface SendMessageRequest {
    conversationId: string
    content: string
    attachments?: string[]
}

export interface UpdateProfileRequest {
    fullName?: string
    avatarUrl?: string
    preferences?: Record<string, any>
}
