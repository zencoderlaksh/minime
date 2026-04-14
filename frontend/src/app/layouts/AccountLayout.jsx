import { Outlet } from 'react-router-dom'
import Header from '../../components/navigation/Header.jsx'
import Footer from '../../components/navigation/Footer.jsx'

function AccountLayout() {
  return (
    <div className="account-shell">
      <Header />
      <main className="page-shell page-shell--narrow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AccountLayout
