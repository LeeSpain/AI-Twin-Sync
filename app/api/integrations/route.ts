import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    return NextResponse.json({ message: 'Integrations endpoint placeholder' })
}

export async function GET(request: Request) {
    return NextResponse.json({ message: 'List integrations placeholder' })
}
