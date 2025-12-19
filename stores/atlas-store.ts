import { create } from 'zustand'
import { AtlasMessage } from '@/types/atlas'

interface AtlasStore {
  messages: AtlasMessage[]
  isLoading: boolean
  isListening: boolean
  currentConversationId: string | null
  addMessage: (message: AtlasMessage) => void
  updateLastMessage: (content: string) => void
  clearMessages: () => void
  setLoading: (loading: boolean) => void
  setListening: (listening: boolean) => void
  setConversationId: (id: string | null) => void
}

export const useAtlasStore = create<AtlasStore>((set) => ({
  messages: [],
  isLoading: false,
  isListening: false,
  currentConversationId: null,
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  updateLastMessage: (content) =>
    set((state) => {
      const newMessages = [...state.messages]
      if (newMessages.length > 0) {
        newMessages[newMessages.length - 1].content = content
      }
      return { messages: newMessages }
    }),
  clearMessages: () => set({ messages: [] }),
  setLoading: (loading) => set({ isLoading: loading }),
  setListening: (listening) => set({ isListening: listening }),
  setConversationId: (id) => set({ currentConversationId: id }),
}))
