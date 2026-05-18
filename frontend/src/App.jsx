import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Prediccion from './pages/Prediccion'
import Historial from './pages/Historial'
import Dataset from './pages/Dataset'
import Acerca from './pages/Acerca'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/prediccion" element={<Prediccion />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App