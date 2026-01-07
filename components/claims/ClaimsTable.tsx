import Link from 'next/link'
import { Claim } from '@/lib/claims'
import StatusBadge from '@/components/StatusBadge'

export default function ClaimsTable({ claims }: { claims: Claim[] }) {
  return (
    <div className="bg-white rounded-xl shadow">
      <table className="w-full text-sm">
        <thead className="border-b">
          <tr className="text-left text-gray-500">
            <th className="p-4">Policy ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>

        <tbody>
          {claims.map(claim => (
            <tr key={claim.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-4 font-medium">
                <Link href={`/policies/${claim.policyId}`}>
                  {claim.policyId}
                </Link>
              </td>
              <td>{claim.type}</td>
              <td>₦{claim.amount.toLocaleString()}</td>
              <td><StatusBadge status={claim.status} /></td>
              <td>{new Date(claim.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
