import { Bell, Search, UserCircle } from 'lucide-react'

export default function TopNav() {
  return (
    <header className="h-16 bg-white border-b flex items-center px-6 justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 bg-blue-600 text-white rounded-md flex items-center justify-center font-bold">
          IP
        </div>
        <div>
          <p className="font-semibold leading-tight">InsureDesk</p>
          <p className="text-xs text-slate-500">Claims & Policies</p>
        </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-slate-100 rounded-md px-3 py-1 w-80">
        <Search size={16} className="text-slate-500" />
        <input
          placeholder="Search policies, claims, customers..."
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        <UserCircle size={26} />
      </div>
    </header>
  )
}
