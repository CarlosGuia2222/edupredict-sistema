import { useEffect, useState } from 'react'
import {
  History,
  Trash2,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react'

function Historial() {
  const [historial, setHistorial] = useState([])

  useEffect(() => {
    const datosGuardados =
      JSON.parse(localStorage.getItem('historialPredicciones')) || []

    setHistorial(datosGuardados)
  }, [])

  const limpiarHistorial = () => {
    localStorage.removeItem('historialPredicciones')
    setHistorial([])
  }

  const getBadgeStyles = (nivel) => {
    if (nivel === 'Alto') {
      return 'bg-red-100 text-red-700'
    }

    if (nivel === 'Medio') {
      return 'bg-orange-100 text-orange-700'
    }

    return 'bg-green-100 text-green-700'
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Historial
          </h2>
          <p className="text-slate-500 mt-2">
            Consulta las predicciones realizadas durante la sesión en el sistema.
          </p>
        </div>

        {historial.length > 0 && (
          <button
            onClick={limpiarHistorial}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition"
          >
            <Trash2 size={18} />
            Limpiar historial
          </button>
        )}
      </div>

      {historial.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mb-5">
            <History size={34} />
          </div>

          <h3 className="text-xl font-bold text-slate-800">
            No hay predicciones registradas
          </h3>

          <p className="text-slate-500 mt-3">
            Cuando analices estudiantes desde la sección “Nueva predicción”,
            los resultados aparecerán aquí.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800">
              Predicciones realizadas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Total de registros: {historial.length}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Estudiante
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Promedio
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Faltas
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Asistencia
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Nivel
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Probabilidad
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Fecha
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {historial.map((item) => {
                  const esRiesgo =
                    item.nivel === 'Alto' || item.nivel === 'Medio'

                  const Icon = esRiesgo ? AlertTriangle : CheckCircle

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">
                          {item.estudiante}
                        </div>
                        <div className="text-sm text-slate-500">
                          {item.resultado}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {item.promedio}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {item.faltas}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {item.asistencia}%
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeStyles(
                            item.nivel
                          )}`}
                        >
                          <Icon size={15} />
                          {item.nivel}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                item.nivel === 'Alto'
                                  ? 'bg-red-500'
                                  : item.nivel === 'Medio'
                                    ? 'bg-orange-500'
                                    : 'bg-green-500'
                              }`}
                              style={{ width: `${item.probabilidad}%` }}
                            />
                          </div>

                          <span className="text-sm font-semibold text-slate-700">
                            {item.probabilidad}%
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {item.fecha}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

export default Historial