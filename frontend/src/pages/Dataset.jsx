import { Database, Download, Info } from 'lucide-react'

const estudiantes = [
  {
    id: 1,
    nombre: 'Alumno 1',
    edad: 18,
    semestre: 2,
    promedio: 88,
    faltas: 3,
    materias_reprobadas: 0,
    asistencia: 95,
    creditos_aprobados: 80,
    tiempo_traslado: 30,
    beca: 'Sí',
    trabaja: 'No',
    acceso_internet: 'Sí',
    apoyo_familiar: 'Sí',
    riesgo: 'No riesgo',
  },
  {
    id: 2,
    nombre: 'Alumno 2',
    edad: 20,
    semestre: 5,
    promedio: 62,
    faltas: 15,
    materias_reprobadas: 3,
    asistencia: 75,
    creditos_aprobados: 55,
    tiempo_traslado: 70,
    beca: 'No',
    trabaja: 'Sí',
    acceso_internet: 'Sí',
    apoyo_familiar: 'No',
    riesgo: 'Riesgo',
  },
  {
    id: 3,
    nombre: 'Alumno 3',
    edad: 19,
    semestre: 3,
    promedio: 75,
    faltas: 8,
    materias_reprobadas: 1,
    asistencia: 86,
    creditos_aprobados: 95,
    tiempo_traslado: 45,
    beca: 'Sí',
    trabaja: 'Sí',
    acceso_internet: 'Sí',
    apoyo_familiar: 'Sí',
    riesgo: 'No riesgo',
  },
  {
    id: 4,
    nombre: 'Alumno 4',
    edad: 21,
    semestre: 6,
    promedio: 55,
    faltas: 20,
    materias_reprobadas: 4,
    asistencia: 68,
    creditos_aprobados: 40,
    tiempo_traslado: 90,
    beca: 'No',
    trabaja: 'Sí',
    acceso_internet: 'No',
    apoyo_familiar: 'No',
    riesgo: 'Riesgo',
  },
  {
    id: 5,
    nombre: 'Alumno 5',
    edad: 18,
    semestre: 1,
    promedio: 91,
    faltas: 2,
    materias_reprobadas: 0,
    asistencia: 97,
    creditos_aprobados: 45,
    tiempo_traslado: 25,
    beca: 'Sí',
    trabaja: 'No',
    acceso_internet: 'Sí',
    apoyo_familiar: 'Sí',
    riesgo: 'No riesgo',
  },
  {
    id: 6,
    nombre: 'Alumno 6',
    edad: 22,
    semestre: 7,
    promedio: 60,
    faltas: 18,
    materias_reprobadas: 3,
    asistencia: 70,
    creditos_aprobados: 65,
    tiempo_traslado: 80,
    beca: 'No',
    trabaja: 'Sí',
    acceso_internet: 'No',
    apoyo_familiar: 'No',
    riesgo: 'Riesgo',
  },
  {
    id: 7,
    nombre: 'Alumno 7',
    edad: 20,
    semestre: 4,
    promedio: 84,
    faltas: 5,
    materias_reprobadas: 0,
    asistencia: 92,
    creditos_aprobados: 120,
    tiempo_traslado: 35,
    beca: 'Sí',
    trabaja: 'No',
    acceso_internet: 'Sí',
    apoyo_familiar: 'Sí',
    riesgo: 'No riesgo',
  },
  {
    id: 8,
    nombre: 'Alumno 8',
    edad: 19,
    semestre: 3,
    promedio: 70,
    faltas: 10,
    materias_reprobadas: 2,
    asistencia: 82,
    creditos_aprobados: 85,
    tiempo_traslado: 60,
    beca: 'No',
    trabaja: 'Sí',
    acceso_internet: 'Sí',
    apoyo_familiar: 'Sí',
    riesgo: 'No riesgo',
  },
]

function Dataset() {
  const total = estudiantes.length
  const enRiesgo = estudiantes.filter((item) => item.riesgo === 'Riesgo').length
  const sinRiesgo = total - enRiesgo

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Dataset
        </h2>
        <p className="text-slate-500 mt-2">
          Base de datos simulada utilizada como referencia para el entrenamiento del modelo EduPredict.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-500">
            Registros mostrados
          </p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">
            {total}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-500">
            Estudiantes en riesgo
          </p>
          <h3 className="text-3xl font-bold text-red-600 mt-2">
            {enRiesgo}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-500">
            Estudiantes sin riesgo
          </p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {sinRiesgo}
          </h3>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
            <Info size={22} />
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              Nota sobre los datos
            </h3>
            <p className="text-blue-800 mt-1 leading-relaxed">
              Los datos mostrados son simulados y tienen fines académicos. En la versión final,
              el backend utilizará un CSV mejorado con más registros para entrenar la red neuronal artificial.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <Database size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Vista previa del dataset
              </h3>
              <p className="text-sm text-slate-500">
                Variables académicas y socioeconómicas de estudiantes.
              </p>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl transition">
            <Download size={18} />
            CSV simulado
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Estudiante</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Edad</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Semestre</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Promedio</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Faltas</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Reprobadas</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Asistencia</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Créditos</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Traslado</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Beca</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Trabaja</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Internet</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Apoyo</th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-600">Resultado</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {estudiantes.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-4 font-semibold text-slate-800">
                    {item.nombre}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{item.edad}</td>
                  <td className="px-5 py-4 text-slate-600">{item.semestre}</td>
                  <td className="px-5 py-4 text-slate-600">{item.promedio}</td>
                  <td className="px-5 py-4 text-slate-600">{item.faltas}</td>
                  <td className="px-5 py-4 text-slate-600">{item.materias_reprobadas}</td>
                  <td className="px-5 py-4 text-slate-600">{item.asistencia}%</td>
                  <td className="px-5 py-4 text-slate-600">{item.creditos_aprobados}</td>
                  <td className="px-5 py-4 text-slate-600">{item.tiempo_traslado} min</td>
                  <td className="px-5 py-4 text-slate-600">{item.beca}</td>
                  <td className="px-5 py-4 text-slate-600">{item.trabaja}</td>
                  <td className="px-5 py-4 text-slate-600">{item.acceso_internet}</td>
                  <td className="px-5 py-4 text-slate-600">{item.apoyo_familiar}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                        item.riesgo === 'Riesgo'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {item.riesgo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Dataset