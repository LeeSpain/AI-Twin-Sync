"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from "lucide-react"

interface Event {
    id: string
    title: string
    time: string
    duration: string
    type: "meeting" | "call" | "focus" | "personal"
    attendees?: number
    location?: string
}

const todaysEvents: Event[] = [
    { id: "1", title: "Morning Standup", time: "9:00 AM", duration: "15m", type: "meeting", attendees: 8 },
    { id: "2", title: "Focus Time - Strategy Doc", time: "9:30 AM", duration: "2h", type: "focus" },
    { id: "3", title: "1:1 with Sarah", time: "12:00 PM", duration: "30m", type: "meeting", attendees: 2, location: "Zoom" },
    { id: "4", title: "Investor Call", time: "2:00 PM", duration: "1h", type: "call", attendees: 4 },
    { id: "5", title: "Product Review", time: "4:00 PM", duration: "1h", type: "meeting", attendees: 6, location: "Room A" },
    { id: "6", title: "Gym Session", time: "6:30 PM", duration: "1h", type: "personal" },
]

const typeColors = {
    meeting: "border-blue-500 bg-blue-500/10",
    call: "border-purple-500 bg-purple-500/10",
    focus: "border-green-500 bg-green-500/10",
    personal: "border-orange-500 bg-orange-500/10",
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const currentDate = new Date()

export default function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState(currentDate)

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1).getDay()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        return { firstDay, daysInMonth }
    }

    const { firstDay, daysInMonth } = getDaysInMonth(selectedDate)

    const prevMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))
    }

    const nextMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))
    }

    return (
        <div className="p-8 bg-gray-950 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Calendar</h1>
                        <p className="text-gray-400 mt-1">Manage your schedule and meetings</p>
                    </div>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                        <Plus className="w-5 h-5" />
                        New Event
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Mini Calendar */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-white">
                                {selectedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                            </h2>
                            <div className="flex gap-2">
                                <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-700"><ChevronLeft className="w-5 h-5 text-gray-400" /></button>
                                <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-700"><ChevronRight className="w-5 h-5 text-gray-400" /></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {days.map(day => (
                                <div key={day} className="text-center text-xs text-gray-500 py-2">{day}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: firstDay }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square" />
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1
                                const isToday = day === currentDate.getDate() &&
                                    selectedDate.getMonth() === currentDate.getMonth() &&
                                    selectedDate.getFullYear() === currentDate.getFullYear()
                                return (
                                    <button
                                        key={day}
                                        className={`aspect-square rounded-lg text-sm flex items-center justify-center transition ${isToday
                                                ? "bg-blue-500 text-white"
                                                : "text-gray-300 hover:bg-gray-700"
                                            }`}
                                    >
                                        {day}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-xl p-6">
                        <h2 className="text-xl font-semibold text-white mb-6">Today's Schedule</h2>
                        <div className="space-y-4">
                            {todaysEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className={`border-l-4 rounded-r-lg p-4 ${typeColors[event.type]}`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-white font-medium">{event.title}</h3>
                                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {event.time} • {event.duration}
                                                </span>
                                                {event.attendees && (
                                                    <span className="flex items-center gap-1">
                                                        <Users className="w-4 h-4" />
                                                        {event.attendees} attendees
                                                    </span>
                                                )}
                                                {event.location && (
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {event.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`text-xs font-medium px-2 py-1 rounded ${event.type === "meeting" ? "bg-blue-500/20 text-blue-400" :
                                                event.type === "call" ? "bg-purple-500/20 text-purple-400" :
                                                    event.type === "focus" ? "bg-green-500/20 text-green-400" :
                                                        "bg-orange-500/20 text-orange-400"
                                            }`}>
                                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
