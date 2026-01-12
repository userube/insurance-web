'use client'

import Link from 'next/link'
import { LayoutDashboard, FileText, Users, Settings } from 'lucide-react'

const menu = [
  { name: 'Overview', href: '/', icon: LayoutDashboard },
  { name: 'Policies', href: '/dashboard/policies', icon: FileText },
  { name: 'Claims', href: '/dashboard/claims', icon: FileText },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 font-bold text-lg">InsureDesk</div>

      <nav className="flex-1 px-4 space-y-2">
        {menu.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t text-sm text-gray-500">
        Logged in as <strong>Admin</strong>
      </div>
    </aside>
  )
}
