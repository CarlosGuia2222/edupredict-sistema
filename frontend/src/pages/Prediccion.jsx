import { useState } from 'react'
import {
  Brain,
  User,
  BookOpen,
  Wifi,
  Briefcase,
  HeartHandshake,
  Loader2,
} from 'lucide-react'
import axios from 'axios'
import ResultadoCard from '../components/ResultadoCard'

function Prediccion() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    semestre: '',
    promedio: '',
    faltas: '',
    materias_reprobadas: '',
    asistencia: '',
    creditos_aprobados: '',
    tiempo_traslado: '',
    beca: '1',
    trabaja: '0',
    acceso_internet: '1',
    apoyo_familiar: '1',
  })

  const [resultado, setResultado] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCargando(true)
    setError('')

    try {
      const respuesta = await axios.post('http://127.0.0.1:5000/predict', formData)

      const resultadoCompleto = {
        id: Date.now(),
        estudiante: formData.nombre || 'Estudiante sin nombre',
        promedio: formData.promedio,
        faltas: formData.faltas,
        asistencia: formData.asistencia,
        materias_reprobadas: formData.materias_reprobadas,
        fecha: new Date().toLocaleDateString('es-MX'),
        ...respuesta.data,
      }

      setResultado(resultadoCompleto)

      const historialActual =
        JSON.parse(localStorage.getItem('historialPredicciones')) || []

      const nuevoHistorial = [resultadoCompleto, ...historialActual]

      localStorage.setItem(
        'historialPredicciones',
        JSON.stringify(nuevoHistorial)
      )
    } catch (error) {
      console.error(error)
      setError(
        'No se pudo conectar con el backend. Verifica que Flask esté corriendo en http://127.0.0.1:5000/'
      )
    } finally {
      setCargando(false)
    }
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Nueva predicción
        </h2>
        <p className="text-slate-500 mt-2">
          Ingresa los datos académicos y socioeconómicos del estudiante para
          estimar su riesgo de deserción escolar usando la red neuronal del backend.
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <form
          onSubmit={handleSubmit}
          className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <Brain size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Datos del estudiante
              </h3>
              <p className="text-sm text-slate-500">
                Formulario conectado al modelo MLP entrenado en Python.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-slate-700 font-semibold mb-4">
              <User size={18} />
              Información general
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Nombre del estudiante"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Alumno 1"
              />

              <Input
                label="Edad"
                name="edad"
                type="number"
                value={formData.edad}
                onChange={handleChange}
                placeholder="18"
                required
              />

              <Input
                label="Semestre"
                name="semestre"
                type="number"
                value={formData.semestre}
                onChange={handleChange}
                placeholder="5"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-slate-700 font-semibold mb-4">
              <BookOpen size={18} />
              Datos académicos
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Promedio"
                name="promedio"
                type="number"
                value={formData.promedio}
                onChange={handleChange}
                placeholder="85"
                required
              />

              <Input
                label="Faltas"
                name="faltas"
                type="number"
                value={formData.faltas}
                onChange={handleChange}
                placeholder="10"
                required
              />

              <Input
                label="Materias reprobadas"
                name="materias_reprobadas"
                type="number"
                value={formData.materias_reprobadas}
                onChange={handleChange}
                placeholder="1"
                required
              />

              <Input
                label="Asistencia (%)"
                name="asistencia"
                type="number"
                value={formData.asistencia}
                onChange={handleChange}
                placeholder="90"
                required
              />

              <Input
                label="Créditos aprobados"
                name="creditos_aprobados"
                type="number"
                value={formData.creditos_aprobados}
                onChange={handleChange}
                placeholder="120"
                required
              />

              <Input
                label="Tiempo de traslado (min)"
                name="tiempo_traslado"
                type="number"
                value={formData.tiempo_traslado}
                onChange={handleChange}
                placeholder="45"
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-slate-700 font-semibold mb-4">
              <HeartHandshake size={18} />
              Datos socioeconómicos
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="¿Cuenta con beca?"
                name="beca"
                value={formData.beca}
                onChange={handleChange}
              />

              <Select
                label="¿Trabaja?"
                name="trabaja"
                value={formData.trabaja}
                onChange={handleChange}
              />

              <Select
                label="¿Tiene acceso a internet?"
                name="acceso_internet"
                value={formData.acceso_internet}
                onChange={handleChange}
                icon={Wifi}
              />

              <Select
                label="¿Cuenta con apoyo familiar?"
                name="apoyo_familiar"
                value={formData.apoyo_familiar}
                onChange={handleChange}
                icon={Briefcase}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-4 rounded-xl transition shadow-sm flex items-center justify-center gap-2"
          >
            {cargando && <Loader2 size={20} className="animate-spin" />}
            {cargando ? 'Analizando...' : 'Analizar estudiante'}
          </button>
        </form>

        <div className="xl:col-span-1">
          <ResultadoCard resultado={resultado} />
        </div>
      </div>
    </section>
  )
}

function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-600">
        {label}
      </span>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </label>
  )
}

function Select({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-600">
        {label}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        <option value="1">Sí</option>
        <option value="0">No</option>
      </select>
    </label>
  )
}

export default Prediccion