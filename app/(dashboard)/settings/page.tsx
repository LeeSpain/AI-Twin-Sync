"use client"

import { useState } from "react"
import { User, Bell, Shield, Palette, Globe } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "language", label: "Language", icon: Globe },
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="flex gap-8">
        {/* Tabs */}
        <div className="w-64">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 
rounded-lg transition ${
                  activeTab === tab.id
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-900 border border-gray-800 
rounded-xl p-6">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Profile 
Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium 
text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Martijn van Bree"
                    className="w-full bg-gray-800 border border-gray-700 
rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium 
text-gray-300 mb-2">Preferred Name</label>
                  <input
                    type="text"
                    defaultValue="Martijn"
                    className="w-full bg-gray-800 border border-gray-700 
rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium 
text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="martijn@careconneqt.com"
                    className="w-full bg-gray-800 border border-gray-700 
rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium 
text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+31 6 1234 5678"
                    className="w-full bg-gray-800 border border-gray-700 
rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button className="bg-gradient-to-r from-blue-500 
to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 
transition">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold 
text-white">Notification Settings</h2>
              <p className="text-gray-400">Configure how Atlas notifies 
you.</p>
              {/* Add notification settings here */}
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Security 
Settings</h2>
              <p className="text-gray-400">Manage your security 
preferences.</p>
              {/* Add security settings here */}
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Appearance 
Settings</h2>
              <p className="text-gray-400">Customize how AI Twin Sync 
looks.</p>
              {/* Add appearance settings here */}
            </div>
          )}

          {activeTab === "language" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Language 
Settings</h2>
              <p className="text-gray-400">Choose your preferred 
languages.</p>
              {/* Add language settings here */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
