export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b px-6 py-4 flex items-center justify-between">
                <div className="font-bold text-xl">AI Twin Sync</div>
                <nav className="flex gap-4">
                    <a href="/features" className="text-sm font-medium hover:underline">Features</a>
                    <a href="/pricing" className="text-sm font-medium hover:underline">Pricing</a>
                    <a href="/login" className="text-sm font-medium hover:underline">Login</a>
                </nav>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} AI Twin Sync. All rights reserved.
            </footer>
        </div>
    )
}
