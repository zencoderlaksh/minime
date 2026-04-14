import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import MinimalLayout from './layouts/MinimalLayout.jsx'
import AccountLayout from './layouts/AccountLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'
import CollectionPage from '../pages/collection/CollectionPage.jsx'
import ProductPage from '../pages/product/ProductPage.jsx'
import SearchPage from '../pages/search/SearchPage.jsx'
import WishlistPage from '../pages/wishlist/WishlistPage.jsx'
import CartPage from '../pages/cart/CartPage.jsx'
import CheckoutPage from '../pages/checkout/CheckoutPage.jsx'
import LoginPage from '../pages/auth/LoginPage.jsx'
import RegisterPage from '../pages/auth/RegisterPage.jsx'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage.jsx'
import AccountPage from '../pages/account/AccountPage.jsx'
import OrdersPage from '../pages/account/OrdersPage.jsx'
import OrderDetailsPage from '../pages/account/OrderDetailsPage.jsx'
import AddressesPage from '../pages/account/AddressesPage.jsx'
import ProfilePage from '../pages/account/ProfilePage.jsx'
import AboutPage from '../pages/about/AboutPage.jsx'
import ContactPage from '../pages/contact/ContactPage.jsx'
import ShippingPolicyPage from '../pages/policies/ShippingPolicyPage.jsx'
import ReturnsPage from '../pages/policies/ReturnsPage.jsx'
import FaqPage from '../pages/policies/FaqPage.jsx'
import NotFoundPage from '../pages/not-found/NotFoundPage.jsx'
import { routes } from '../lib/constants/routes.js'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.collection} element={<CollectionPage />} />
        <Route path={routes.product} element={<ProductPage />} />
        <Route path={routes.search} element={<SearchPage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.shippingPolicy} element={<ShippingPolicyPage />} />
        <Route path={routes.returns} element={<ReturnsPage />} />
        <Route path={routes.faq} element={<FaqPage />} />
        <Route path={routes.wishlist} element={<WishlistPage />} />
        <Route path={routes.cart} element={<CartPage />} />
        <Route path={routes.checkout} element={<CheckoutPage />} />
      </Route>

      <Route element={<MinimalLayout />}>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />
      </Route>

      <Route element={<AccountLayout />}>
        <Route path={routes.account} element={<AccountPage />} />
        <Route path={routes.accountOrders} element={<OrdersPage />} />
        <Route path={routes.accountOrderDetails} element={<OrderDetailsPage />} />
        <Route path={routes.accountProfile} element={<ProfilePage />} />
        <Route path={routes.accountAddresses} element={<AddressesPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
