import { NextRequest, NextResponse } from 'next/server'
import { generateStreamResponse } from '@/lib/gemini/client'
import { ATLAS_SYSTEM_PROMPT } from '@/lib/gemini/prompts'

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Build the prompt with context
    const systemPrompt = ATLAS_SYSTEM_PROMPT
      .replace('{{userName}}', context?.userName || 'there')
      .replace('{{userPreferences}}', context?.preferences ? JSON.stringify(context.preferences) : 'Not set')
      .replace('{{currentDateTime}}', new Date().toISOString())

    const fullPrompt = `${systemPrompt}\n\nUser: ${message}\n\nAtlas:`

    // Get the stream from Gemini
    const stream = await generateStreamResponse(fullPrompt)

    // Return a streaming response
    return new NextResponse(new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.text()
          controller.enqueue(new TextEncoder().encode(text))
        }
        controller.close()
      }
    }), {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked'
      }
    })

  } catch (error) {
    console.error('Atlas chat error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
