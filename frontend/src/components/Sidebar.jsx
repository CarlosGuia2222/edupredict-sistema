import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Brain,
  History,
  Database,
  Info,
  GraduationCap,
} from 'lucide-react'

const menuItems = [
  {
    path: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    path: '/prediccion',
    label: 'Nueva predicción',
    icon: Brain,
  },
  {
    path: '/historial',
    label: 'Historial',
    icon: History,
  },
  {
    path: '/dataset',
    label: 'Dataset',
    icon: Database,
  },
  {
    path: '/acerca',
    label: 'Acerca del modelo',
    icon: Info,
  },
]

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-blue-950 text-white fixed left-0 top-0">
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-2xl">
            <GraduationCap size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">EduPredict</h1>
            <p className="text-sm text-blue-200">
              Alerta Temprana Escolar
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-100 hover:bg-blue-900'
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-800">
        <p className="text-xs text-blue-200">
          Proyecto de Redes Neuronales Artificiales
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
