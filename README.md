# AI Twin Sync

Your AI Chief of Staff. Atlas manages your emails, calendar, calls, and 
tasks so you can focus on what matters.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **AI**: Google Gemini API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Google AI Studio API key

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/ai-twin-sync.git
cd ai-twin-sync
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Copy the environment file and add your keys:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Update `.env.local` with your actual values:
- Get Supabase keys from: https://supabase.com (Project Settings > API)
- Get Gemini API key from: https://aistudio.google.com

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
ai-twin-sync/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Auth pages (login, signup, onboarding)
│   ├── (dashboard)/       # Dashboard pages
│   ├── (admin)/           # Admin pages
│   ├── (marketing)/       # Public marketing pages
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utilities and clients
│   ├── supabase/         # Supabase client
│   ├── gemini/           # Gemini AI client
│   └── atlas/            # Atlas AI agents
├── hooks/                # Custom React hooks
├── stores/               # Zustand stores
├── types/                # TypeScript types
└── public/               # Static assets
\`\`\`

## Features

- 📧 Email Management
- 📅 Calendar Control
- 📞 Call Handling
- 🎤 Voice Commands
- 🏢 Multi-Company Support
- 👨‍👩‍👧 Family VIP Access
- 🔐 Enterprise Security

## License

MIT
