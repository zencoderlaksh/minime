import { Link } from 'react-router-dom'

import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'

function MobileMenu({ items, open, onClose }) {
  useLockBodyScroll(open)

  return (
    <div className={open ? 'mobile-menu is-open' : 'mobile-menu'}>
      <div className="mobile-menu__backdrop" aria-hidden="true" onClick={onClose} />
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <strong>Browse MiniMe</strong>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="mobile-menu__body">
          {items.map((item) => (
            <div key={item.label} className="mobile-menu__section">
              <Link to={item.to} onClick={onClose}>
                <h3>{item.label}</h3>
              </Link>
              <p>{item.featured.description}</p>
              <div className="mobile-menu__links">
                {item.groups.flatMap((group) => group.links).slice(0, 4).map((link) => (
                  <Link key={`${item.label}-${link.label}`} to={link.to} onClick={onClose}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
