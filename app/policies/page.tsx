'use client'

import { useState, useEffect } from 'react'
import PoliciesTable from '@/components/policies/PoliciesTable'
import { getPolicies } from '@/lib/policies'
import PoliciesUpload from '@/components/policies/PoliciesUpload' // <- your upload component

export default function PoliciesPage() {
  const [policies, setPolicies] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [filters, setFilters] = useState({ status: '', type: '', search: '' })
  const [total, setTotal] = useState(0)

  const fetchPolicies = async () => {
    const data = await getPolicies({
      page,
      limit,
      status: filters.status,
      type: filters.type,
      holderName: filters.search,
    })
    setPolicies(data.policies)
    setTotal(data.total)
  }

  useEffect(() => {
    fetchPolicies()
  }, [page, limit, filters])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Policies</h1>

      {/* Upload CSV */}
      <PoliciesUpload providerId="YOUR_PROVIDER_ID" onUploadComplete={fetchPolicies} />

      {/* Filters */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by holder"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="border p-1 rounded"
        />
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="border p-1 rounded"
        >
          <option value="">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="SUSPENDED">Suspended</option>
          <option value="EXPIRED">Expired</option>
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border p-1 rounded"
        >
          <option value="">All Types</option>
          <option value="Health">Health</option>
          <option value="Life">Life</option>
          <option value="Auto">Auto</option>
        </select>
      </div>

      {/* Policies Table */}
      <PoliciesTable policies={policies} />

      {/* Pagination */}
      <div className="flex gap-2 items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} / {Math.ceil(total / limit)}
        </span>
        <button
          disabled={page >= Math.ceil(total / limit)}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
