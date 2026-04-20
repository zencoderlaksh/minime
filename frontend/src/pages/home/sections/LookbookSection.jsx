import { Link } from 'react-router-dom'
import { lookbookCards } from '../../../data/home.data.js'

function LookbookSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="lookbook-grid">
          {lookbookCards.map((card) => (
            <Link key={card.id} to={card.href} className="lookbook-card">
              <img src={card.image} alt={card.title} loading="lazy" />
              <span>{card.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LookbookSection
