import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard.jsx'
import { bestsellerProducts } from '../../data/home.data.js'
import { collectionFilters, collectionHero } from '../../data/collection.data.js'
import FilterSidebar from './components/FilterSidebar.jsx'
import SortBar from './components/SortBar.jsx'

function CollectionPage() {
  const { slug } = useParams()
  const hero = collectionHero[slug] ?? collectionHero.default

  return (
    <section className="section-space">
      <div className="container">
        <div className="collection-hero">
          <div className="collection-hero__copy">
            <p className="eyebrow">Collection</p>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
          </div>

          <div className="collection-hero__media">
            <img src={hero.image} alt={hero.title} />
          </div>
        </div>

        <div className="collection-layout">
          <FilterSidebar filters={collectionFilters} />

          <div className="collection-results">
            <SortBar />

            <div className="collection-results__grid">
              {bestsellerProducts.concat(bestsellerProducts).map((product, index) => (
                <ProductCard
                  key={`${product.id}-${index}`}
                  product={{
                    ...product,
                    id: `${product.id}-${index}`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionPage
