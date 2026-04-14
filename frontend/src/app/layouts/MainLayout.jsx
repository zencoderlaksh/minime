import { Outlet } from 'react-router-dom'
import AnnouncementBar from '../../components/navigation/AnnouncementBar.jsx'
import Header from '../../components/navigation/Header.jsx'
import Footer from '../../components/navigation/Footer.jsx'
import CartDrawer from '../../components/cart/CartDrawer.jsx'

function MainLayout() {
  return (
    <div className="app-shell">
      <AnnouncementBar />
      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default MainLayout
