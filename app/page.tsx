import Link from "next/link"
import { ArrowRight, Mail, Calendar, Phone, Mic, Building, Users, CheckCircle } from "lucide-react"

export default function LandingPage() {
    const features = [
        { icon: Mail, title: "Email Management", desc: "Atlas reads, drafts, and sends emails in your voice" },
        { icon: Calendar, title: "Calendar Control", desc: "Smart scheduling that protects your focus time" },
        { icon: Phone, title: "Call Handling", desc: "Screen calls, take messages, or connect VIPs instantly" },
        { icon: Mic, title: "Voice Commands", desc: "Hey Atlas, what does my day look like?" },
        { icon: Building, title: "Multi-Company", desc: "Manage 5+ businesses from one command center" },
        { icon: Users, title: "Family VIP", desc: "Family always gets through, no matter what" },
    ]

    const pricingFeatures = [
        "Unlimited AI interactions",
        "All integrations (Gmail, Calendar, Slack)",
        "Voice commands and call handling",
        "Up to 5 companies",
        "Family VIP access",
        "Mobile app",
        "Priority support"
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
            <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AT</span>
                        </div>
                        <span className="text-xl font-bold text-white">AI Twin Sync</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-gray-300 hover:text-white transition">Login</Link>
                        <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">Get Started</Link>
                    </div>
                </div>
            </header>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-gray-300 text-sm">Powered by Advanced AI</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Your AI <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Chief of Staff</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Atlas manages your emails, calendar, calls, and tasks — so you can focus on what matters.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition flex items-center gap-2">
                            Get Started Free <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gray-900/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Everything You Need</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md mx-auto">
                        <div className="text-center mb-6">
                            <span className="text-blue-400 font-medium">AI Twin Sync Pro</span>
                            <div className="mt-2">
                                <span className="text-5xl font-bold text-white">€499</span>
                                <span className="text-gray-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-8">
                            {pricingFeatures.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/signup" className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-center font-medium hover:opacity-90 transition">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-4 border-t border-gray-800">
                <div className="container mx-auto text-center">
                    <p className="text-gray-500">© 2024 AI Twin Sync. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
