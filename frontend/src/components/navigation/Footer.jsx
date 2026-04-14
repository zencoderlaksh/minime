import { Link } from 'react-router-dom'
import { routes } from '../../lib/constants/routes.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="eyebrow">MiniMe</p>
          <h3>Soft luxury for women and little ones.</h3>
          <p>
            Built to feel editorial, warm, and easy to shop across every scroll.
          </p>
        </div>

        <div>
          <p className="eyebrow">Shop</p>
          <div className="footer-links">
            <Link to="/collections/women">Women</Link>
            <Link to="/collections/kids">Kids</Link>
            <Link to="/collections/new-arrivals">New Arrivals</Link>
            <Link to="/collections/bestsellers">Bestsellers</Link>
          </div>
        </div>

        <div>
          <p className="eyebrow">Support</p>
          <div className="footer-links">
            <Link to={routes.contact}>Contact</Link>
            <Link to={routes.shippingPolicy}>Shipping Policy</Link>
            <Link to={routes.returns}>Returns</Link>
            <Link to={routes.faq}>FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
