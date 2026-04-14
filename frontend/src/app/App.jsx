import AppRoutes from './AppRoutes.jsx'
import AppProviders from './providers/AppProviders.jsx'

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  )
}

export default App
