import { Mail, Calendar, CheckSquare, Zap, ArrowUp, ArrowDown } from 
"lucide-react"

const stats = [
  { label: "Emails Handled", value: "47", change: "+12%", up: true, icon: 
Mail },
  { label: "Meetings Scheduled", value: "8", change: "+3", up: true, icon: 
Calendar },
  { label: "Tasks Pending", value: "12", change: "-5", up: false, icon: 
CheckSquare },
  { label: "AI Actions Today", value: "156", change: "+28%", up: true, 
icon: Zap },
]

const recentActivity = [
  { action: "Sent email to Sarah Chen", time: "2 minutes ago", type: 
"email" },
  { action: "Scheduled meeting with investor", time: "15 minutes ago", 
type: "calendar" },
  { action: "Created task: Review Q4 report", time: "1 hour ago", type: 
"task" },
  { action: "Handled call from Unknown (+31 6...)", time: "2 hours ago", 
type: "call" },
]

const pendingApprovals = [
  { title: "Email to Board: December Update", confidence: 87, type: 
"email" },
  { title: "Meeting: Sarah Chen - Q4 Budget", confidence: 92, type: 
"calendar" },
]

export default function DashboardPage() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good 
afternoon" : "Good evening"

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">{greeting}, 
Martijn</h1>
        <p className="text-gray-400 mt-1">Here's what Atlas has been 
working on for you.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 
mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-900 border 
border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex 
items-center justify-center">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.up ? 
"text-green-400" : "text-red-400"}`}>
                {stat.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown 
className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div className="text-3xl font-bold text-white 
mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl 
p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Pending 
Approvals</h2>
          <div className="space-y-4">
            {pendingApprovals.map((item, i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white 
font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-sm">Confidence: 
{item.confidence}%</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-500/20 text-green-400 px-4 
py-2 rounded-lg text-sm hover:bg-green-500/30 transition">
                    Approve
                  </button>
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 
rounded-lg text-sm hover:bg-gray-600 transition">
                    Edit
                  </button>
                  <button className="bg-red-500/20 text-red-400 px-4 py-2 
rounded-lg text-sm hover:bg-red-500/30 transition">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl 
p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent 
Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-3 
border-b border-gray-800 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="flex-1">
                  <p className="text-white text-sm">{item.action}</p>
                  <p className="text-gray-500 text-xs">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
