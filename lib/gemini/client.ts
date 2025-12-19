import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.GOOGLE_GEMINI_API_KEY

if (!apiKey) {
  console.error("Missing GOOGLE_GEMINI_API_KEY environment variable")
}

const genAI = new GoogleGenerativeAI(apiKey || "")

// Use the flash model for faster responses, or pro for reasoning
export const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

export async function generateResponse(prompt: string): Promise<string> {
  if (!apiKey) {
    throw new Error("Gemini API Key is not configured")
  }

  try {
    const result = await geminiModel.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error("Gemini API error:", error)
    throw new Error("Failed to generate response from Gemini")
  }
}

export async function generateStreamResponse(prompt: string) {
  if (!apiKey) {
    throw new Error("Gemini API Key is not configured")
  }

  try {
    const result = await geminiModel.generateContentStream(prompt)
    return result.stream
  } catch (error) {
    console.error("Gemini streaming error:", error)
    throw new Error("Failed to generate stream from Gemini")
  }
}
