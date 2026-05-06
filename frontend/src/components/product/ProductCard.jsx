import { Link } from "react-router-dom";
import { formatCurrency } from "../../lib/utils/formatCurrency.js";

function ProductCard({ product, collectionLabel }) {
  const mediaLabel = collectionLabel || product.label;

  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__link">
        <div className="product-card__media">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
          {product.label && (
            <span className="product-card__label">{product.label}</span>
          )}
          {mediaLabel && (
            <span className="product-card__collection">{mediaLabel}</span>
          )}
        </div>

        <div className="product-card__content">
          <p className="product-card__category">{product.category}</p>
          <h3 className="product-card__name">{product.name}</h3>
          <div className="product-card__footer">
            <strong className="product-card__price">
              {formatCurrency(product.price)}
            </strong>
            {product.badge && (
              <span className="product-card__badge">{product.badge}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
