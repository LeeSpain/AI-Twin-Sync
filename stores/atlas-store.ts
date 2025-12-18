import { create } from 'zustand'

export interface AtlasMessage {
  id: string
  role: 'user' | 'atlas'
  content: string
  timestamp: Date
  metadata?: Record<string, any>
}

interface AtlasStore {
  messages: AtlasMessage[]
  isLoading: boolean
  isListening: boolean
  currentConversationId: string | null
  addMessage: (message: AtlasMessage) => void
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
  clearMessages: () => set({ messages: [] }),
  setLoading: (loading) => set({ isLoading: loading }),
  setListening: (listening) => set({ isListening: listening }),
  setConversationId: (id) => set({ currentConversationId: id }),
}))
