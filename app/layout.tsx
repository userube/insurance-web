import './globals.css'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'

export const metadata = {
  title: 'InsureDesk',
  description: 'Claims & Policies Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col flex-1">
            <TopNav />

            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
