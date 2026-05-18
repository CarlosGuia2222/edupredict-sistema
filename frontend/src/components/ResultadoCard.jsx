import { AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'

function ResultadoCard({ resultado }) {
  if (!resultado) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-500 mb-5">
          <HelpCircle size={34} />
        </div>

        <h3 className="text-xl font-bold text-slate-800">
          Resultado del análisis
        </h3>

        <p className="text-slate-500 mt-3 leading-relaxed">
          Completa el formulario y presiona “Analizar estudiante” para visualizar el nivel de riesgo estimado.
        </p>
      </div>
    )
  }

  const esAlto = resultado.nivel === 'Alto'
  const esMedio = resultado.nivel === 'Medio'

  const estilos = esAlto
    ? {
        bg: 'bg-red-50',
        text: 'text-red-700',
        badge: 'bg-red-100 text-red-700',
        icon: AlertTriangle,
      }
    : esMedio
      ? {
          bg: 'bg-orange-50',
          text: 'text-orange-700',
          badge: 'bg-orange-100 text-orange-700',
          icon: AlertTriangle,
        }
      : {
          bg: 'bg-green-50',
          text: 'text-green-700',
          badge: 'bg-green-100 text-green-700',
          icon: CheckCircle,
        }

  const Icon = estilos.icon

  return (
    <div className={`rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-8 ${estilos.bg}`}>
      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${estilos.badge} mb-5`}>
        <Icon size={34} />
      </div>

      <p className="text-sm text-slate-500">
        Estudiante analizado
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-1">
        {resultado.estudiante}
      </h3>

      <div className="mt-6">
        <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${estilos.badge}`}>
          Riesgo {resultado.nivel}
        </span>
      </div>

      <h4 className={`text-xl font-bold mt-5 ${estilos.text}`}>
        {resultado.resultado}
      </h4>

      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-600">
            Probabilidad estimada
          </span>
          <span className="text-sm font-bold text-slate-800">
            {resultado.probabilidad}%
          </span>
        </div>

        <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-slate-200">
          <div
            className={`h-full ${
              esAlto ? 'bg-red-500' : esMedio ? 'bg-orange-500' : 'bg-green-500'
            }`}
            style={{ width: `${resultado.probabilidad}%` }}
          />
        </div>
      </div>

      <div className="mt-6">
        <h5 className="font-semibold text-slate-700 mb-3">
          Factores detectados
        </h5>

        <ul className="space-y-2">
          {resultado.factores.map((factor, index) => (
            <li
              key={index}
              className="text-sm text-slate-600 bg-white/70 rounded-lg px-3 py-2"
            >
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResultadoCard