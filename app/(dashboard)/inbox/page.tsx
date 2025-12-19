"use client"

import { useState } from "react"
import { Mail, Star, Trash2, Archive, Reply, Forward, Clock, Paperclip, Search } from "lucide-react"

interface Email {
    id: string
    from: string
    fromEmail: string
    subject: string
    preview: string
    time: string
    isRead: boolean
    isStarred: boolean
    hasAttachment: boolean
}

const mockEmails: Email[] = [
    { id: "1", from: "Sarah Chen", fromEmail: "sarah@techcorp.com", subject: "Q4 Partnership Proposal", preview: "Hi, I wanted to follow up on our discussion about the partnership opportunity. The terms look favorable and...", time: "10:23 AM", isRead: false, isStarred: true, hasAttachment: true },
    { id: "2", from: "Board Secretary", fromEmail: "board@company.com", subject: "Upcoming Board Meeting Agenda", preview: "Please find attached the agenda for next week's board meeting. Key topics include Q4 review and 2025 planning...", time: "9:45 AM", isRead: false, isStarred: false, hasAttachment: true },
    { id: "3", from: "Marcus Johnson", fromEmail: "marcus@investor.vc", subject: "Re: Investment Update", preview: "Thank you for the detailed update. The growth metrics are impressive. Could we schedule a call to discuss...", time: "Yesterday", isRead: true, isStarred: true, hasAttachment: false },
    { id: "4", from: "HR Team", fromEmail: "hr@company.com", subject: "New Hire Onboarding - Week 3", preview: "This week we have 3 new team members joining. Please welcome them and help them get settled...", time: "Yesterday", isRead: true, isStarred: false, hasAttachment: false },
    { id: "5", from: "David Park", fromEmail: "david@designstudio.com", subject: "Brand Refresh Concepts", preview: "Hey! Just finished the initial concepts for the brand refresh. Really excited to share these with you...", time: "Dec 17", isRead: true, isStarred: false, hasAttachment: true },
]

export default function InboxPage() {
    const [emails, setEmails] = useState<Email[]>(mockEmails)
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
    const [searchQuery, setSearchQuery] = useState("")

    const toggleStar = (id: string) => {
        setEmails(emails.map(e => e.id === id ? { ...e, isStarred: !e.isStarred } : e))
    }

    const markAsRead = (id: string) => {
        setEmails(emails.map(e => e.id === id ? { ...e, isRead: true } : e))
    }

    const filteredEmails = emails.filter(e =>
        e.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.from.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="h-screen flex bg-gray-950">
            {/* Email List */}
            <div className={`${selectedEmail ? "w-1/3" : "w-full"} border-r border-gray-800 flex flex-col`}>
                <div className="p-4 border-b border-gray-800">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search emails..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {filteredEmails.map((email) => (
                        <div
                            key={email.id}
                            onClick={() => { setSelectedEmail(email); markAsRead(email.id); }}
                            className={`p-4 border-b border-gray-800 cursor-pointer transition ${selectedEmail?.id === email.id ? "bg-gray-800" : "hover:bg-gray-800/50"
                                } ${!email.isRead ? "bg-gray-800/30" : ""}`}
                        >
                            <div className="flex items-start gap-3">
                                <button onClick={(e) => { e.stopPropagation(); toggleStar(email.id); }} className="mt-1">
                                    <Star className={`w-4 h-4 ${email.isStarred ? "fill-yellow-500 text-yellow-500" : "text-gray-600"}`} />
                                </button>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className={`font-medium ${!email.isRead ? "text-white" : "text-gray-300"}`}>{email.from}</span>
                                        <span className="text-xs text-gray-500">{email.time}</span>
                                    </div>
                                    <p className={`text-sm mt-1 ${!email.isRead ? "text-white" : "text-gray-400"}`}>{email.subject}</p>
                                    <p className="text-sm text-gray-500 mt-1 truncate">{email.preview}</p>
                                    {email.hasAttachment && (
                                        <div className="flex items-center gap-1 mt-2 text-gray-500">
                                            <Paperclip className="w-3 h-3" />
                                            <span className="text-xs">Attachment</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Email Detail */}
            {selectedEmail && (
                <div className="flex-1 flex flex-col">
                    <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"><Reply className="w-5 h-5" /></button>
                            <button className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"><Forward className="w-5 h-5" /></button>
                            <button className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"><Archive className="w-5 h-5" /></button>
                            <button className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-red-400"><Trash2 className="w-5 h-5" /></button>
                        </div>
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto">
                        <h1 className="text-2xl font-bold text-white mb-4">{selectedEmail.subject}</h1>
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-800">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                                {selectedEmail.from.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white font-medium">{selectedEmail.from}</p>
                                <p className="text-gray-500 text-sm">{selectedEmail.fromEmail}</p>
                            </div>
                            <span className="ml-auto text-gray-500 text-sm">{selectedEmail.time}</span>
                        </div>
                        <div className="text-gray-300 leading-relaxed">
                            <p>{selectedEmail.preview}</p>
                            <p className="mt-4">This is a preview of the email content. In a real application, the full email body would be displayed here with proper formatting.</p>
                            <p className="mt-4">Best regards,<br />{selectedEmail.from}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
