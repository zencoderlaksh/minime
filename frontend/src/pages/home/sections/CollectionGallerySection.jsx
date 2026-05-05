import { Link } from "react-router-dom";
import { collectionGalleryItems } from "../../../data/home.data.js";

function CollectionGallerySection() {
  return (
    <section className="section-space collection-gallery-section">
      <div className="container">
        <div className="collection-gallery__top">
          <div>
            <p className="eyebrow">Just in</p>
            <h2 className="collection-gallery__title">
              Explore this season’s newest arrivals.
            </h2>
          </div>

          <Link to="/collections/new-arrivals" className="hero-pill">
            Shop now
          </Link>
        </div>

        <div className="collection-gallery-grid">
          {collectionGalleryItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="collection-gallery-card"
            >
              <div className="collection-gallery-card__media">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="collection-gallery-card__content">
                <span>{item.title}</span>
                <strong>{item.description}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionGallerySection;
