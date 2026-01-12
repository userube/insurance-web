import { getPolicyById } from '@/lib/policies'

export default async function PolicyDetails({
  params,
}: {
  params: { id: string }
}) {
  const policy = await getPolicyById(params.id)

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Policy {policy.policyNo}
      </h1>

      <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
        <Detail label="Holder" value={policy.holderName} />
        <Detail label="Type" value={policy.type} />
        <Detail label="Premium" value={`₦${policy.premium}`} />
        <Detail label="Status" value={policy.status} />
      </div>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}
