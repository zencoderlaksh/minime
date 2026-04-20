import { Link } from 'react-router-dom'

function MegaMenu({ item, visible }) {
  if (!item) {
    return null
  }

  return (
    <div className={visible ? 'mega-menu is-visible' : 'mega-menu'} aria-hidden={!visible}>
      <div className="container mega-menu__inner">
        <div className="mega-menu__feature">
          <div className="mega-menu__image">
            <img src={item.featured.image} alt={item.featured.title} loading="lazy" decoding="async" />
          </div>
          <div className="mega-menu__copy">
            <p className="eyebrow">Curated Edit</p>
            <h3>{item.featured.title}</h3>
            <p>{item.featured.description}</p>
            <Link className="button button--secondary" to={item.to}>
              Shop this edit
            </Link>
          </div>
        </div>

        <div className="mega-menu__groups">
          {item.groups.map((group) => (
            <div key={group.title} className="mega-menu__group">
              <p className="eyebrow">{group.title}</p>
              <div className="mega-menu__links">
                {group.links.map((link) => (
                  <Link key={link.label} to={link.to}>
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

export default MegaMenu
