import { getClaims } from '@/lib/claims'
import ClaimsTable from '@/components/claims/ClaimsTable'

export default async function ClaimsPage({
  searchParams,
}: {
  searchParams: {
    policyId?: string
    status?: string
    type?: string
  }
}) {
  const claims = await getClaims(searchParams)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Claims</h1>
      <ClaimsUpload onUploadComplete={() => fetchClaims()} />
      <ClaimsTable claims={claims} />
    </div>
  )
}
