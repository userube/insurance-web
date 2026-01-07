export default function PoliciesTable({ policies }: { policies?: Policy[] }) {
  return (
    <div className="bg-white rounded-xl shadow">
      <table className="w-full text-sm">
        <thead className="border-b">
          <tr className="text-left text-gray-500">
            <th className="p-4">Policy No</th>
            <th>Holder</th>
            <th>Type</th>
            <th>Premium</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {(policies || []).map(policy => (
            <tr
              key={policy.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-4 font-medium">
                <Link href={`/policies/${policy.id}`}>
                  {policy.policyNo}
                </Link>
              </td>
              <td>{policy.holderName}</td>
              <td>{policy.type}</td>
              <td>₦{policy.premium.toLocaleString()}</td>
              <td>
                <StatusBadge status={policy.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
