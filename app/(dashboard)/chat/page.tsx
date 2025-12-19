"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Mic, MicOff, Bot, User, Loader2 } from "lucide-react"

interface Message {
  id: string
  role: "user" | "atlas"
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "atlas",
      content: "Hello! I'm Atlas, your AI Chief of Staff. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [streamingContent, setStreamingContent] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, streamingContent])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const userInput = input.trim()
    setInput("")
    setIsLoading(true)
    setStreamingContent("")

    try {
      const response = await fetch("/api/atlas/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userInput,
          context: { userName: "there", preferences: {} },
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let fullContent = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value, { stream: true })
          fullContent += chunk
          setStreamingContent(fullContent)
        }
      }

      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "atlas",
        content: fullContent || "I couldn't generate a response. Please try again.",
        timestamp: new Date(),
      }])
      setStreamingContent("")

    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "atlas",
        content: "Sorry, I encountered an error. Please check the API configuration.",
        timestamp: new Date(),
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold text-white flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-400" />
          Chat with Atlas
        </h1>
        <p className="text-gray-400 text-sm">Your AI Chief of Staff is ready to help</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "atlas" ? "bg-gradient-to-br from-blue-500 to-purple-600" : "bg-gray-700"}`}>
              {message.role === "atlas" ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
            </div>
            <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${message.role === "atlas" ? "bg-gray-800 text-white" : "bg-blue-500 text-white"}`}>
              <p className="whitespace-pre-wrap">{message.content}</p>
              <p className="text-xs opacity-50 mt-1">{message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
          </div>
        ))}

        {streamingContent && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="max-w-[70%] bg-gray-800 rounded-2xl px-4 py-3">
              <p className="text-white whitespace-pre-wrap">{streamingContent}</p>
              <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-1"></span>
            </div>
          </div>
        )}

        {isLoading && !streamingContent && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gray-800 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                <span className="text-gray-400 text-sm">Atlas is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-gray-800">
        <div className="flex gap-4">
          <button onClick={() => setIsListening(!isListening)} className={`p-3 rounded-xl transition ${isListening ? "bg-red-500 text-white" : "bg-gray-800 text-gray-400 hover:text-white"}`}>
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask Atlas anything..." disabled={isLoading} className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50" />
          <button onClick={handleSend} disabled={!input.trim() || isLoading} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:opacity-90 transition disabled:opacity-50">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
