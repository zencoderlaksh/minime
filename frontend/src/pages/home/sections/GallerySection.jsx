import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../store/useCartStore.js";
import { formatCurrency } from "../../../lib/utils/formatCurrency.js";
import { collectionVideoGroups } from "../../../data/home.data.js";

function GallerySection() {
  const addItem = useCartStore((state) => state.addItem);
  const [activeCollection, setActiveCollection] = useState("women");
  const activeGroup = collectionVideoGroups.find(
    (group) => group.id === activeCollection,
  );

  const handleAddToCart = (card) => {
    addItem({
      id: `cart-${card.id}`,
      name: card.name,
      size: card.size ?? "One size",
      price: card.price,
    });
  };

  return (
    <section className="section-space gallery-section gallery-video-section">
      <div className="container">
        <div className="gallery-header">
          <div>
            <span className="gallery-header__eyebrow">Collections</span>
            <h2 className="gallery-header__title">
              Dresses in motion for every edit
            </h2>
          </div>

          <div className="gallery-header__filters">
            {collectionVideoGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`gallery-filter ${
                  group.id === activeCollection ? "gallery-filter--active" : ""
                }`}
                onClick={() => setActiveCollection(group.id)}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        <div className="video-collection-grid">
          {activeGroup.cards.map((card) => (
            <article key={card.id} className="video-collection-card">
              <Link
                to={card.href}
                className="video-collection-card__link"
                aria-label={`View ${card.name}`}
              >
                <div className="video-collection-card__media">
                  <video
                    src={card.video}
                    poster={card.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>

                <div className="video-collection-card__overlay" />

                <div className="video-collection-card__details">
                  <span>{card.category}</span>
                  <strong>{card.name}</strong>
                </div>
              </Link>

              <div className="video-collection-card__footer">
                <span className="video-collection-card__price">
                  {formatCurrency(card.price)}
                </span>

                <button
                  type="button"
                  className="video-collection-card__bag"
                  onClick={() => handleAddToCart(card)}
                  aria-label={`Add ${card.name} to cart`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 6h14l-1.5 12.5a1 1 0 0 1-.99.9H8.49a1 1 0 0 1-.99-.9L6 6Zm4 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-8-8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v0h2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
