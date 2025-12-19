"use client"

import { Mail, Calendar, CheckSquare, MessageSquare, TrendingUp, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Unread Emails", value: "23", icon: Mail, color: "from-blue-500 to-blue-600", href: "/dashboard/inbox" },
  { label: "Today's Meetings", value: "4", icon: Calendar, color: "from-purple-500 to-purple-600", href: "/dashboard/calendar" },
  { label: "Pending Tasks", value: "12", icon: CheckSquare, color: "from-orange-500 to-orange-600", href: "/dashboard/tasks" },
  { label: "AI Actions Today", value: "47", icon: Zap, color: "from-green-500 to-green-600", href: "/dashboard/chat" },
]

const recentActivity = [
  { type: "email", title: "Drafted reply to investor inquiry", time: "2 min ago", icon: Mail },
  { type: "calendar", title: "Scheduled meeting with design team", time: "15 min ago", icon: Calendar },
  { type: "task", title: "Completed Q4 report review", time: "1 hour ago", icon: CheckSquare },
  { type: "email", title: "Sent follow-up to partnership lead", time: "2 hours ago", icon: Mail },
  { type: "chat", title: "Researched competitor pricing", time: "3 hours ago", icon: MessageSquare },
]

const upcomingEvents = [
  { title: "Board Meeting", time: "10:00 AM", duration: "2h" },
  { title: "1:1 with Sarah", time: "1:00 PM", duration: "30m" },
  { title: "Product Review", time: "3:30 PM", duration: "1h" },
  { title: "Team Standup", time: "5:00 PM", duration: "15m" },
]

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Good morning! ☀️</h1>
          <p className="text-gray-400 mt-1">Here's what Atlas has been working on for you today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Link key={stat.label} href={stat.href}>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Atlas Activity</h2>
              <Link href="/dashboard/chat" className="text-blue-400 text-sm hover:text-blue-300">View all</Link>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/50 transition">
                  <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{activity.title}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Today's Schedule</h2>
              <Link href="/dashboard/calendar" className="text-blue-400 text-sm hover:text-blue-300">View calendar</Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="flex items-center gap-4 p-3 border-l-2 border-blue-500 bg-gray-700/30 rounded-r-lg">
                  <div>
                    <p className="text-white font-medium">{event.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-400 text-sm">{event.time}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500 text-sm">{event.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Need help with something?</h3>
              <p className="text-gray-400 mt-1">Ask Atlas to handle emails, schedule meetings, or manage tasks.</p>
            </div>
            <Link href="/dashboard/chat" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Talk to Atlas
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
