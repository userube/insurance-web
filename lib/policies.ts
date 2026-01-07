import { apiFetch } from './api'

export type Policy = {
  id: string
  policyNo: string
  holderName: string
  type: string
  premium: number
  status: 'ACTIVE' | 'SUSPENDED' | 'EXPIRED'
  startDate: string
  endDate: string
}

const API_URL = process.env.API_URL

if (!API_URL) {
  throw new Error('API_URL is not defined')
}

export async function getPolicies(params: {
  page?: number
  limit?: number
  status?: string
  type?: string
  search?: string
}) {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value) query.set(key, String(value))
  })

  const res = await fetch(`/api/policies?${query.toString()}`)
  if (!res.ok) {
    console.error('Fetch policies failed:', {
      status: res.status,
      statusText: res.statusText,
      body: text,
    })
    throw new Error('Failed to fetch policies')
  }
  return res.json()
}


