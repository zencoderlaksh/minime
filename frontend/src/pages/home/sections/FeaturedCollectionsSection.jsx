import { Link } from 'react-router-dom'
import { bestsellerProducts } from '../../../data/home.data.js'
import { formatCurrency } from '../../../lib/utils/formatCurrency.js'

function FeaturedCollectionsSection() {
  const galleryProducts = [...bestsellerProducts, ...bestsellerProducts]

  return (
    <section className="section-space section-space--gallery">
      <div className="infinite-gallery">
        <div className="container infinite-gallery__header">
          <h2>A Touch of Warmth</h2>
        </div>

        <div className="infinite-gallery__viewport">
          <div className="infinite-gallery__track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="infinite-gallery__group"
                aria-hidden={groupIndex === 1}
              >
                {galleryProducts.map((product, productIndex) => (
                  <Link
                    key={`${groupIndex}-${product.id}-${productIndex}`}
                    to={`/product/${product.slug}`}
                    className="infinite-gallery__card"
                  >
                    <div className="infinite-gallery__media">
                      <img src={product.image} alt={product.name} loading="lazy" />
                    </div>

                    <div className="infinite-gallery__details">
                      <strong>{product.name}</strong>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollectionsSection
