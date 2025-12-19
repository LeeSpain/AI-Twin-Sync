
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const features = [
    "Unlimited AI interactions",
    "All integrations (Gmail, Calendar, Slack)",
    "Voice commands and call handling",
    "Up to 5 companies",
    "Family VIP access",
    "Mobile app access",
    "Priority support",
    "Custom AI training",
    "API access",
    "Dedicated account manager"
]

export default function PricingPage() {
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
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
                        <p className="text-xl text-gray-400">One plan, everything included. No hidden fees.</p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-lg mx-auto">
                        <div className="text-center mb-8">
                            <span className="text-blue-400 font-medium text-lg">AI Twin Sync Pro</span>
                            <div className="mt-4">
                                <span className="text-6xl font-bold text-white">€499</span>
                                <span className="text-gray-400 text-xl">/month</span>
                            </div>
                            <p className="text-gray-500 mt-2">Billed monthly. Cancel anytime.</p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {features.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/signup" className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg text-center text-lg font-medium hover:opacity-90 transition">
                            Start 14-Day Free Trial
                        </Link>
                        <p className="text-gray-500 text-sm text-center mt-4">No credit card required</p>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-400 mb-4">Need a custom enterprise solution?</p>
                        <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium">Contact our sales team →</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
