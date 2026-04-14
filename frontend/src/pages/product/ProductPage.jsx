import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import { formatCurrency } from '../../lib/utils/formatCurrency.js'

function ProductPage() {
  const { slug } = useParams()

  return (
    <section className="section-space">
      <div className="container product-page">
        <div className="product-page__gallery">
          <div className="product-media product-media--large">Look 01</div>
          <div className="product-media-grid">
            <div className="product-media">Look 02</div>
            <div className="product-media">Detail</div>
          </div>
        </div>

        <div className="product-page__content">
          <p className="eyebrow">Product Detail</p>
          <h1>{slug?.replaceAll('-', ' ')}</h1>
          <strong className="product-page__price">{formatCurrency(4899)}</strong>
          <p>
            This product template is ready for variants, size guides, accordions,
            delivery timelines, and richer styling recommendations.
          </p>
          <div className="hero-section__actions">
            <Button>Add to Bag</Button>
            <Button variant="secondary">Size Guide</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
