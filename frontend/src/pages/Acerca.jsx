import {
  Brain,
  Database,
  GraduationCap,
  Layers,
  AlertTriangle,
  CheckCircle,
  Workflow,
} from 'lucide-react'

function Acerca() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Acerca del modelo
        </h2>
        <p className="text-slate-500 mt-2">
          Información general sobre EduPredict, las variables utilizadas y el funcionamiento de la red neuronal.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <InfoBlock
            icon={GraduationCap}
            title="¿Qué es EduPredict?"
            text="EduPredict es un sistema web escolar diseñado para apoyar la detección temprana de posibles casos de deserción escolar. El sistema analiza información académica y socioeconómica de un estudiante para estimar si podría encontrarse en riesgo de abandonar sus estudios."
          />

          <InfoBlock
            icon={Brain}
            title="Modelo de red neuronal artificial"
            text="El proyecto utiliza como base una red neuronal artificial de tipo Perceptrón Multicapa, también conocida como MLP. Este tipo de modelo es adecuado para problemas de clasificación, ya que puede aprender patrones a partir de diferentes variables de entrada y generar una salida, como riesgo o no riesgo de deserción."
          />

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
                <Database size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Variables utilizadas
                </h3>
                <p className="text-sm text-slate-500">
                  Datos académicos y socioeconómicos considerados por el sistema.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VariableCard title="Edad" description="Edad del estudiante." />
              <VariableCard title="Semestre" description="Nivel académico que cursa." />
              <VariableCard title="Promedio" description="Rendimiento académico general." />
              <VariableCard title="Faltas" description="Cantidad de inasistencias acumuladas." />
              <VariableCard title="Materias reprobadas" description="Número de materias no aprobadas." />
              <VariableCard title="Asistencia" description="Porcentaje de asistencia escolar." />
              <VariableCard title="Créditos aprobados" description="Avance académico del estudiante." />
              <VariableCard title="Tiempo de traslado" description="Minutos aproximados para llegar a la institución." />
              <VariableCard title="Beca" description="Indica si cuenta con apoyo económico." />
              <VariableCard title="Trabaja" description="Indica si trabaja mientras estudia." />
              <VariableCard title="Acceso a internet" description="Condición tecnológica del estudiante." />
              <VariableCard title="Apoyo familiar" description="Apoyo externo durante sus estudios." />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-purple-100 text-purple-700 p-3 rounded-xl">
                <Workflow size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Flujo del sistema
                </h3>
                <p className="text-sm text-slate-500">
                  Proceso general que sigue EduPredict para generar una predicción.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Step number="1" title="Captura de datos" text="El usuario ingresa los datos del estudiante desde el formulario de nueva predicción." />
              <Step number="2" title="Preparación de información" text="Los datos se organizan en variables académicas y socioeconómicas." />
              <Step number="3" title="Análisis del modelo" text="La red neuronal analiza los valores de entrada para estimar el riesgo de deserción." />
              <Step number="4" title="Resultado visual" text="El sistema muestra el nivel de riesgo, probabilidad estimada y factores detectados." />
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-blue-950 text-white rounded-2xl shadow-sm p-6">
            <div className="bg-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
              <Layers size={30} />
            </div>

            <h3 className="text-xl font-bold">
              Clasificación binaria
            </h3>

            <p className="text-blue-100 mt-3 leading-relaxed">
              El objetivo principal del modelo es clasificar al estudiante en dos posibles resultados:
              riesgo de deserción o sin riesgo crítico.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Salidas del sistema
            </h3>

            <div className="space-y-3">
              <OutputItem
                icon={CheckCircle}
                title="Riesgo bajo"
                text="El estudiante no presenta señales críticas."
                color="green"
              />

              <OutputItem
                icon={AlertTriangle}
                title="Riesgo medio"
                text="Existen factores que requieren seguimiento."
                color="orange"
              />

              <OutputItem
                icon={AlertTriangle}
                title="Riesgo alto"
                text="Se recomienda atención temprana."
                color="red"
              />
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-100 text-orange-700 p-3 rounded-xl">
                <AlertTriangle size={22} />
              </div>

              <h3 className="font-bold text-orange-900">
                Limitación importante
              </h3>
            </div>

            <p className="text-orange-800 leading-relaxed">
              Los datos utilizados en esta versión son simulados. Por lo tanto, los resultados deben interpretarse
              como una demostración académica del funcionamiento de una red neuronal, no como una herramienta definitiva
              para tomar decisiones reales.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function InfoBlock({ icon: Icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
          <Icon size={24} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-800">
            {title}
          </h3>
          <p className="text-slate-600 mt-3 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

function VariableCard({ title, description }) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
      <h4 className="font-semibold text-slate-800">
        {title}
      </h4>
      <p className="text-sm text-slate-500 mt-1">
        {description}
      </p>
    </div>
  )
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold shrink-0">
        {number}
      </div>

      <div>
        <h4 className="font-semibold text-slate-800">
          {title}
        </h4>
        <p className="text-slate-500 text-sm mt-1">
          {text}
        </p>
      </div>
    </div>
  )
}

function OutputItem({ icon: Icon, title, text, color }) {
  const styles = {
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700',
  }

  return (
    <div className="flex gap-3">
      <div className={`p-2 rounded-lg h-fit ${styles[color]}`}>
        <Icon size={18} />
      </div>

      <div>
        <h4 className="font-semibold text-slate-800">
          {title}
        </h4>
        <p className="text-sm text-slate-500">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Acerca