import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/nav.data.js'
import { routes } from '../../lib/constants/routes.js'
import { useUiStore } from '../../store/useUiStore.js'
import MegaMenu from './MegaMenu.jsx'
import MobileMenu from './MobileMenu.jsx'

function Header() {
  const [activeItem, setActiveItem] = useState(null)
  const isMobileMenuOpen = useUiStore((state) => state.isMobileMenuOpen)
  const toggleMobileMenu = useUiStore((state) => state.toggleMobileMenu)
  const closeMobileMenu = useUiStore((state) => state.closeMobileMenu)
  const openCart = useUiStore((state) => state.openCart)

  return (
    <header
      className="site-header"
      onMouseLeave={() => setActiveItem(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveItem(null)
        }
      }}
    >
      <div className="container site-header__inner">
        <button
          type="button"
          className="site-header__menu"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <Link className="site-header__brand" to={routes.home}>
          MiniMe
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onMouseEnter={() => setActiveItem(link)}
              onFocus={() => setActiveItem(link)}
              className={({ isActive }) =>
                isActive ? 'site-header__link is-active' : 'site-header__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to={routes.search}>Search</Link>
          <Link to={routes.wishlist}>Wishlist</Link>
          <button type="button" onClick={openCart}>
            Bag
          </button>
        </div>
      </div>

      <MegaMenu item={activeItem} visible={Boolean(activeItem)} />
      <MobileMenu items={navLinks} open={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  )
}

export default Header
