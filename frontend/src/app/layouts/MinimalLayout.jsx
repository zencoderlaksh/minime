import { Outlet } from 'react-router-dom'

function MinimalLayout() {
  return (
    <main className="minimal-shell">
      <Outlet />
    </main>
  )
}

export default MinimalLayout
