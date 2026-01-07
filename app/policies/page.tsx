import { getPolicies } from '@/lib/policies'
import PoliciesTable from '@/components/policies/PoliciesTable'

export default async function PoliciesPage({
  searchParams,
}: {
  searchParams: {
    page?: number
    limit?: number
    status?: string
    type?: string
    search?: string
  }
}) {
  const res = await getPolicies(searchParams)

  // Extract only the array for the table
  const policies = res.policies ?? []

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Policies</h1>
      <PoliciesTable policies={policies} />
    </div>
  )
}
