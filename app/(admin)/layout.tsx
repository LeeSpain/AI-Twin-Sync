export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b px-6 py-3 bg-background">
                <h1 className="font-semibold text-lg">AI Twin Sync - Admin Panel</h1>
            </header>
            <main className="flex-1 bg-muted/20 p-6">
                {children}
            </main>
        </div>
    )
}
