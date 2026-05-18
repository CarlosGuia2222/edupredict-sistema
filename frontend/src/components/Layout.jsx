import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <main className="ml-72 min-h-screen p-8">
        {children}
      </main>
    </div>
  )
}

export default Layout