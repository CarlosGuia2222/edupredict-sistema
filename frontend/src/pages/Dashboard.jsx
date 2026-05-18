import { Users, AlertTriangle, CheckCircle, Brain } from 'lucide-react'
import StatCard from '../components/StatCard'

function Dashboard() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h2>
        <p className="text-slate-500 mt-2">
          Resumen general del sistema de alerta temprana escolar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Estudiantes analizados"
          value="200"
          icon={Users}
          color="blue"
        />

        <StatCard
          title="Estudiantes en riesgo"
          value="73"
          icon={AlertTriangle}
          color="red"
        />

        <StatCard
          title="Sin riesgo"
          value="127"
          icon={CheckCircle}
          color="green"
        />

        <StatCard
          title="Modelo utilizado"
          value="MLP"
          icon={Brain}
          color="purple"
        />
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-3">
          EduPredict
        </h3>
        <p className="text-slate-600 leading-relaxed">
          EduPredict es un sistema web escolar que utiliza una red neuronal artificial
          para analizar datos académicos y socioeconómicos de estudiantes, con el objetivo
          de detectar posibles casos de riesgo de deserción escolar.
        </p>
      </div>
    </section>
  )
}

export default Dashboard