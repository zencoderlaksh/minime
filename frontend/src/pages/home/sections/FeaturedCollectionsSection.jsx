import { Link } from 'react-router-dom'
import SectionHeader from '../../../components/common/SectionHeader.jsx'
import { featuredCollections } from '../../../data/home.data.js'

function FeaturedCollectionsSection() {
  return (
    <section className="section-space">
      <div className="container">
        <SectionHeader
          eyebrow="Collections"
          title="Built for women, children, and the moments they dress for."
          description="A homepage structure like this gives MiniMe clear shopping paths without losing the editorial mood."
        />

        <div className="collection-grid">
          {featuredCollections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="collection-card"
            >
              <div className="collection-card__image">
                <img src={collection.image} alt={`${collection.title} collection`} loading="lazy" />
              </div>
              <div className="collection-card__content">
                <strong>{collection.title}</strong>
                <p>{collection.description}</p>
                <span>Explore edit</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollectionsSection
