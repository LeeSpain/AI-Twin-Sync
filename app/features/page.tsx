
import Link from "next/link"
import { Mail, Calendar, Phone, Mic, Building, Users, Shield, Zap, Brain, Clock } from "lucide-react"

const features = [
    { icon: Mail, title: "Email Management", description: "Atlas reads, drafts, and sends emails in your voice. It learns your writing style and handles routine correspondence automatically." },
    { icon: Calendar, title: "Calendar Control", description: "Smart scheduling that protects your focus time. Atlas finds optimal meeting slots and handles scheduling conflicts." },
    { icon: Phone, title: "Call Handling", description: "Screen calls, take messages, or connect VIPs instantly. Never miss an important call again." },
    { icon: Mic, title: "Voice Commands", description: "Natural voice interaction with Hey Atlas wake word. Control everything hands-free." },
    { icon: Building, title: "Multi-Company", description: "Manage multiple businesses from one command center. Separate contexts, unified control." },
    { icon: Users, title: "Family VIP", description: "Family members always get through, no matter what. Configure VIP access for your loved ones." },
    { icon: Shield, title: "Enterprise Security", description: "End-to-end encryption, GDPR compliant, with complete audit logs of all AI actions." },
    { icon: Zap, title: "Instant Actions", description: "Atlas executes tasks in seconds, not hours. Approve with one tap or let it run autonomously." },
    { icon: Brain, title: "Learns & Adapts", description: "Gets smarter every day by learning your preferences, relationships, and work patterns." },
    { icon: Clock, title: "24/7 Always On", description: "Atlas never sleeps. Handle timezone differences and after-hours requests effortlessly." },
]

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
            <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AT</span>
                        </div>
                        <span className="text-xl font-bold text-white">AI Twin Sync</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-gray-300 hover:text-white transition">Login</Link>
                        <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">Get Started</Link>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything Atlas Can Do</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Powerful features designed to give you back your time and mental energy.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/signup" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition">
                            Start Your Free Trial
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
