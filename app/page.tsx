export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">
        Claims Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat title="Total Claims" value="312" />
        <Stat title="Pending Claims" value="45" />
        <Stat title="Approved" value="200" />
        <Stat title="Rejected" value="67" />
      </div>
    </div>
  )
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}
