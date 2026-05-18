import {
  Users,
  AlertTriangle,
  CheckCircle,
  Brain,
  TrendingUp,
  Activity,
} from 'lucide-react'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import StatCard from '../components/StatCard'

const riesgoData = [
  { name: 'Sin riesgo', value: 127 },
  { name: 'En riesgo', value: 73 },
]

const indicadoresData = [
  { name: 'Promedio', valor: 78 },
  { name: 'Asistencia', valor: 84 },
  { name: 'Créditos', valor: 72 },
  { name: 'Avance', valor: 68 },
]

const ultimasPredicciones = [
  {
    estudiante: 'Alumno 4',
    nivel: 'Alto',
    probabilidad: 89,
    resultado: 'Riesgo alto de deserción',
  },
  {
    estudiante: 'Alumno 8',
    nivel: 'Medio',
    probabilidad: 56,
    resultado: 'Riesgo medio de deserción',
  },
  {
    estudiante: 'Alumno 1',
    nivel: 'Bajo',
    probabilidad: 18,
    resultado: 'Sin riesgo crítico',
  },
]

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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <Activity size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Distribución de riesgo
              </h3>
              <p className="text-sm text-slate-500">
                Comparación entre estudiantes en riesgo y sin riesgo.
              </p>
            </div>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riesgoData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  <Cell fill="#22c55e" />
                  <Cell fill="#ef4444" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-slate-600">Sin riesgo</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm text-slate-600">En riesgo</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 text-green-700 p-3 rounded-xl">
              <TrendingUp size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Indicadores académicos
              </h3>
              <p className="text-sm text-slate-500">
                Promedios generales del dataset simulado.
              </p>
            </div>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={indicadoresData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            EduPredict
          </h3>

          <p className="text-slate-600 leading-relaxed">
            EduPredict es un sistema web escolar que utiliza una red neuronal artificial
            para analizar datos académicos y socioeconómicos de estudiantes, con el objetivo
            de detectar posibles casos de riesgo de deserción escolar. Esta versión cuenta con
            interfaz visual, predicción simulada, historial, dataset y explicación del modelo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <MiniInfo title="Frontend" value="React + Vite" />
            <MiniInfo title="Diseño" value="Tailwind CSS" />
            <MiniInfo title="Modelo" value="MLPClassifier" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Últimas predicciones
          </h3>

          <div className="space-y-3">
            {ultimasPredicciones.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {item.estudiante}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      {item.resultado}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.nivel === 'Alto'
                        ? 'bg-red-100 text-red-700'
                        : item.nivel === 'Medio'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {item.probabilidad}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniInfo({ title, value }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <p className="text-sm text-slate-500">
        {title}
      </p>
      <h4 className="text-lg font-bold text-slate-800 mt-1">
        {value}
      </h4>
    </div>
  )
}

export default Dashboard