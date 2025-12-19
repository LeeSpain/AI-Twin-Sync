import { useState } from 'react'
import { useAtlasStore } from '@/stores/atlas-store'
import { AtlasContext } from '@/types/atlas'
import { v4 as uuidv4 } from 'uuid'

export function useAtlas() {
    const {
        messages,
        addMessage,
        updateLastMessage,
        isLoading,
        setLoading
    } = useAtlasStore()

    const sendMessage = async (content: string, context?: AtlasContext) => {
        if (!content.trim()) return

        // 1. Add User Message
        addMessage({
            id: uuidv4(),
            role: 'user',
            content,
            timestamp: new Date()
        })

        setLoading(true)

        // 2. Add Placeholder Assistant Message
        const assistantMsgId = uuidv4()
        addMessage({
            id: assistantMsgId,
            role: 'atlas',
            content: '',
            timestamp: new Date()
        })

        try {
            const response = await fetch('/api/atlas/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: content, context })
            })

            if (!response.ok) throw new Error('Network response was not ok')
            if (!response.body) throw new Error('No response body')

            const reader = response.body.getReader()
            const decoder = new TextDecoder()
            let accumulatedContent = ''

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                const chunk = decoder.decode(value, { stream: true })
                accumulatedContent += chunk
                updateLastMessage(accumulatedContent)
            }

        } catch (error) {
            console.error('Atlas Error:', error)
            updateLastMessage('Sorry, I encountered an error. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return {
        messages,
        isLoading,
        sendMessage
    }
}
