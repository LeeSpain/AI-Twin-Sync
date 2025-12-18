import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || 
"")

export const geminiModel = genAI.getGenerativeModel({ model: 
"gemini-1.5-pro" })

export async function generateResponse(prompt: string): Promise<string> {
  try {
    const result = await geminiModel.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error("Gemini API error:", error)
    throw error
  }
}

export async function generateStreamResponse(prompt: string) {
  try {
    const result = await geminiModel.generateContentStream(prompt)
    return result.stream
  } catch (error) {
    console.error("Gemini streaming error:", error)
    throw error
  }
}
