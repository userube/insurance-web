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

export async function getPolicies() {
  const res = await fetch(`${API_URL}/policies`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Fetch policies failed:', {
      status: res.status,
      statusText: res.statusText,
      body: text,
    })

    throw new Error('Failed to fetch policies')
  }

  return res.json()
}


