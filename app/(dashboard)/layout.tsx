"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { 
  LayoutDashboard, 
  MessageSquare, 
  Mail, 
  Calendar, 
  CheckSquare, 
  Users, 
  Building, 
  Settings,
  LogOut,
  Mic
} from "lucide-react"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/chat", icon: MessageSquare, label: "Chat with Atlas" 
},
  { href: "/dashboard/inbox", icon: Mail, label: "Inbox" },
  { href: "/dashboard/calendar", icon: Calendar, label: "Calendar" },
  { href: "/dashboard/tasks", icon: CheckSquare, label: "Tasks" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
]

export default function DashboardLayout({ children }: { children: 
React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex 
flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br 
from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AT</span>
            </div>
            <span className="text-lg font-bold text-white">AI Twin 
Sync</span>
          </Link>
        </div>

        {/* Talk to Atlas Button */}
        <div className="p-4">
          <Link 
            href="/dashboard/chat"
            className="flex items-center justify-center gap-2 w-full 
bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg 
font-medium hover:opacity-90 transition"
          >
            <Mic className="w-5 h-5" />
            Talk to Atlas
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 
rounded-lg transition ${
                      isActive 
                        ? "bg-blue-500/10 text-blue-400" 
                        : "text-gray-400 hover:bg-gray-800 
hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg 
text-gray-400 hover:bg-gray-800 hover:text-white transition w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
