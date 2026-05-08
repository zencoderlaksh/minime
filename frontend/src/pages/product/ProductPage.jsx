import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore.js";
import { useWishlistStore } from "../../store/useWishlistStore.js";
import { formatCurrency } from "../../lib/utils/formatCurrency.js";
import { bestsellerProducts } from "../../data/home.data.js";
import SimilarProductsSection from "./components/SimilarProductsSection.jsx";

function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const wishlistItems = useWishlistStore((s) => s.items);

  const product = bestsellerProducts.find((p) => p.slug === slug);

  const [selectedSize, setSelectedSize] = useState("");

  const wishlistSelected =
    product ?
      wishlistItems.some(
        (entry) => entry.id === `${product.slug}-${selectedSize}`,
      )
    : false;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/404");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const activeImage =
    product.gallery?.[activeImageIndex] || product.gallery?.[0];

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }

    setIsAddingToCart(true);
    addItem({
      id: `${product.slug}-${selectedSize}`,
      name: product.name,
      size: selectedSize,
      price: product.price,
      image: product.image,
    });

    setTimeout(() => {
      setIsAddingToCart(false);
    }, 600);
  };

  return (
    <section className="section-space product-detail">
      <div className="container">
        <div className="product-detail__layout">
          {/* Gallery Section */}
          <div className="product-detail__gallery">
            <div className="product-detail__main-image">
              {activeImage?.type === "video" ?
                <video
                  src={activeImage.src}
                  poster={activeImage.poster}
                  controls
                  autoPlay
                  muted
                  playsInline
                />
              : <img
                  src={activeImage?.src || product.image}
                  alt={product.name}
                  decoding="async"
                />
              }
            </div>

            <div className="product-detail__thumbnails">
              {product.gallery?.map((media, index) => (
                <button
                  key={index}
                  type="button"
                  className={`product-detail__thumbnail ${
                    index === activeImageIndex ? "is-active" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  {media.type === "video" ?
                    <video
                      src={media.src}
                      poster={media.poster}
                      muted
                      playsInline
                      preload="none"
                    />
                  : <img src={media.src} alt="" decoding="async" />}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="product-detail__content">
            <div className="product-detail__header">
              <span className="product-detail__category">
                {product.category}
              </span>
              <h1 className="product-detail__name">{product.name}</h1>

              <div className="product-detail__meta">
                <strong className="product-detail__price">
                  {formatCurrency(product.price)}
                </strong>

                {product.badge && (
                  <span className="product-detail__badge">{product.badge}</span>
                )}
              </div>
            </div>

            {/* Size Selector */}
            <div className="product-detail__section">
              <label className="product-detail__label">Size</label>
              <div className="product-detail__sizes">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`product-detail__size ${
                      selectedSize === size ? "is-selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="product-detail__section">
              <button
                type="button"
                className={`product-detail__add-to-cart ${
                  isAddingToCart ? "is-loading" : ""
                } ${!selectedSize ? "is-disabled" : ""}`}
                onClick={handleAddToCart}
                disabled={!selectedSize || isAddingToCart}
              >
                {isAddingToCart ? "Adding to Bag..." : "Add to Bag"}
              </button>

              <button
                type="button"
                className="product-detail__wishlist"
                aria-label="Toggle wishlist"
                onClick={() => {
                  const sizeForWishlist = selectedSize || "UNSELECTED";
                  toggleWishlist({
                    id: `${product.slug}-${sizeForWishlist}`,
                    name: product.name,
                    size: selectedSize || undefined,
                    price: product.price,
                    image: product.image,
                  });
                }}
              >
                {wishlistSelected ? "♥" : "♡"}
              </button>
            </div>

            {/* Divider */}
            <hr className="product-detail__divider" />

            {/* Product Description */}
            <div className="product-detail__section">
              <h3 className="product-detail__section-title">Details</h3>
              <p className="product-detail__description">
                {product.label || "Premium collection crafted with care."}
              </p>

              <ul className="product-detail__features">
                <li>Premium fabric quality</li>
                <li>Expert tailoring and craftsmanship</li>
                <li>Season 2026 collection</li>
              </ul>
            </div>

            {/* Delivery Info */}
            <div className="product-detail__section">
              <h3 className="product-detail__section-title">Delivery</h3>
              <p className="product-detail__info-text">
                Standard delivery 5-7 working days. Express delivery available.
              </p>
            </div>
          </div>
        </div>

        <SimilarProductsSection product={product} />
      </div>
    </section>
  );
}

export default ProductPage;
