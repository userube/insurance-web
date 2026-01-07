const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
console.log(API_BASE_URL);

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    cache: 'no-store', // SaaS dashboards should be realtime
  })

  if (!res.ok) {
    throw new Error('API request failed')
  }

  return res.json()
}
