import { Link } from 'react-router-dom'
import { formatCurrency } from '../../lib/utils/formatCurrency.js'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span>{product.label}</span>
      </Link>

      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-card__meta">
          <strong>{formatCurrency(product.price)}</strong>
          <span>{product.badge}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
