export interface Claim {
  id: string
  policyId: string
  type: string
  amount: number
  status: string
  createdAt: string
}

export async function getClaims(params?: { policyId?: string; status?: string; type?: string }): Promise<Claim[]> {
  const query = new URLSearchParams(params as Record<string, string>).toString()
  const res = await fetch(`/api/claims?${query}`)
  if (!res.ok) throw new Error('Failed to fetch claims')
  return res.json()
}
