const colors = {
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-100 text-red-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
}

function StatCard({ title, value, icon: Icon, color = 'blue' }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h3>
        </div>

        <div className={`p-4 rounded-2xl ${colors[color]}`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  )
}

export default StatCard