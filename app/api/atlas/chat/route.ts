import { NextRequest, NextResponse } from 'next/server'
import { generateResponse } from '@/lib/gemini/client'
import { ATLAS_SYSTEM_PROMPT } from '@/lib/gemini/prompts'

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 
400 })
    }

    // Build the prompt with context
    const systemPrompt = ATLAS_SYSTEM_PROMPT
      .replace('{{userName}}', context?.userName || 'there')
      .replace('{{userPreferences}}', context?.preferences || 'Not set')
      .replace('{{currentDateTime}}', new Date().toISOString())

    const fullPrompt = `${systemPrompt}\n\nUser: ${message}\n\nAtlas:`

    const response = await generateResponse(fullPrompt)

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Atlas chat error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
