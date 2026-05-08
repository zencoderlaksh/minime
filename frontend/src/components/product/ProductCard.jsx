import { Link } from "react-router-dom";
import { formatCurrency } from "../../lib/utils/formatCurrency.js";
import { useWishlistStore } from "../../store/useWishlistStore.js";

function ProductCard({ product, collectionLabel }) {
  const mediaLabel = collectionLabel || product.label;
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const wishlistItems = useWishlistStore((s) => s.items);

  const wishlistSelected = wishlistItems.some(
    (entry) => entry.id === product.id,
  );

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Product card doesn't know size. We store without size.
    toggleWishlist({
      id: product.id ?? `${product.slug}-UNSELECTED`,
      name: product.name,
      size: undefined,
      price: product.price,
      image: product.image,
    });
  };

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

          <button
            type="button"
            className="product-card__wishlist"
            aria-label="Toggle wishlist"
            onClick={handleWishlist}
          >
            {wishlistSelected ? "♥" : "♡"}
          </button>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
