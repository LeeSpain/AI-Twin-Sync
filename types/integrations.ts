/**
 * Types for third-party integrations.
 */

export interface GmailIntegration {
    isEnabled: boolean
    emailAddress: string
    lastSyncedAt?: string
    scopes: string[]
}

export interface GoogleCalendarIntegration {
    isEnabled: boolean
    calendarId: string
    syncDirection: 'one-way' | 'two-way'
    lastSyncedAt?: string
}

export interface SlackIntegration {
    isEnabled: boolean
    teamId: string
    teamName: string
    channelId?: string // Optional default channel
    botToken?: string // Usually handled securely, likely not exposed here but kept structure for config
}

export type IntegrationType = 'gmail' | 'google_calendar' | 'slack'

export interface IntegrationStatus {
    type: IntegrationType
    isConnected: boolean
    lastError?: string
    config: GmailIntegration | GoogleCalendarIntegration | SlackIntegration
}
