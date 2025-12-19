"use client"

import { useState } from "react"
import { Plus, CheckCircle2, Circle, Clock, AlertCircle, MoreHorizontal, Calendar } from "lucide-react"

interface Task {
    id: string
    title: string
    description?: string
    status: "todo" | "in_progress" | "done"
    priority: "low" | "medium" | "high" | "critical"
    dueDate?: string
    createdAt: Date
}

const initialTasks: Task[] = [
    { id: "1", title: "Review Q4 financial reports", status: "in_progress", priority: "high", dueDate: "2024-12-20", createdAt: new Date() },
    { id: "2", title: "Prepare board presentation", status: "todo", priority: "critical", dueDate: "2024-12-22", createdAt: new Date() },
    { id: "3", title: "Schedule team sync meetings", status: "done", priority: "medium", createdAt: new Date() },
    { id: "4", title: "Update investor deck", status: "todo", priority: "high", dueDate: "2024-12-25", createdAt: new Date() },
    { id: "5", title: "Review partnership proposal", status: "in_progress", priority: "medium", dueDate: "2024-12-21", createdAt: new Date() },
]

const priorityColors = {
    low: "text-gray-400",
    medium: "text-blue-400",
    high: "text-orange-400",
    critical: "text-red-400",
}

const statusIcons = {
    todo: Circle,
    in_progress: Clock,
    done: CheckCircle2,
}

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)
    const [filter, setFilter] = useState<"all" | "todo" | "in_progress" | "done">("all")
    const [showNewTask, setShowNewTask] = useState(false)
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const filteredTasks = filter === "all" ? tasks : tasks.filter(t => t.status === filter)

    const toggleTaskStatus = (id: string) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                const statusFlow = { todo: "in_progress", in_progress: "done", done: "todo" } as const
                return { ...task, status: statusFlow[task.status] }
            }
            return task
        }))
    }

    const addTask = () => {
        if (!newTaskTitle.trim()) return
        const newTask: Task = {
            id: Date.now().toString(),
            title: newTaskTitle,
            status: "todo",
            priority: "medium",
            createdAt: new Date(),
        }
        setTasks([newTask, ...tasks])
        setNewTaskTitle("")
        setShowNewTask(false)
    }

    return (
        <div className="p-8 bg-gray-950 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Tasks</h1>
                        <p className="text-gray-400 mt-1">Manage your tasks and stay organized</p>
                    </div>
                    <button
                        onClick={() => setShowNewTask(true)}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                    >
                        <Plus className="w-5 h-5" />
                        Add Task
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-6">
                    {(["all", "todo", "in_progress", "done"] as const).map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === status
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-800 text-gray-400 hover:text-white"
                                }`}
                        >
                            {status === "all" ? "All" : status === "in_progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>

                {/* New Task Input */}
                {showNewTask && (
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-4">
                        <input
                            type="text"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTask()}
                            placeholder="What needs to be done?"
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                            autoFocus
                        />
                        <div className="flex justify-end gap-2 mt-3">
                            <button onClick={() => setShowNewTask(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
                            <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Task</button>
                        </div>
                    </div>
                )}

                {/* Task List */}
                <div className="space-y-3">
                    {filteredTasks.map((task) => {
                        const StatusIcon = statusIcons[task.status]
                        return (
                            <div
                                key={task.id}
                                className={`bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition ${task.status === "done" ? "opacity-60" : ""
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <button
                                        onClick={() => toggleTaskStatus(task.id)}
                                        className={`mt-1 ${task.status === "done" ? "text-green-500" : "text-gray-500 hover:text-blue-400"}`}
                                    >
                                        <StatusIcon className="w-5 h-5" />
                                    </button>
                                    <div className="flex-1">
                                        <h3 className={`text-white font-medium ${task.status === "done" ? "line-through" : ""}`}>
                                            {task.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-2">
                                            <span className={`text-xs font-medium ${priorityColors[task.priority]}`}>
                                                {task.priority.toUpperCase()}
                                            </span>
                                            {task.dueDate && (
                                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    {task.dueDate}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button className="text-gray-500 hover:text-white">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {filteredTasks.length === 0 && (
                    <div className="text-center py-12">
                        <CheckCircle2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400">No tasks found</p>
                    </div>
                )}
            </div>
        </div>
    )
}
