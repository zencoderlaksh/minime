import { useMemo } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/product/ProductCard.jsx";
import { bestsellerProducts } from "../../../data/home.data.js";

function SimilarProductsSection({ product }) {
  const similarProducts = useMemo(() => {
    if (!product) return [];

    // Use the same in-memory catalog as the Product page.
    const categoryMatches = bestsellerProducts.filter(
      (p) => p.id !== product.id && p.category === product.category,
    );

    const fallback = bestsellerProducts.filter((p) => p.id !== product.id);

    const pool = categoryMatches.length > 0 ? categoryMatches : fallback;
    return pool.slice(0, 6);
  }, [product]);

  if (!similarProducts.length) return null;

  return (
    <section className="similar-products-section">
      <div className="similar-products-section__header">
        <h2>Similar suggestions</h2>
        <Link to="/collections" className="similar-products-section__more-link">
          Shop more
        </Link>
      </div>

      <div className="similar-products-section__rail">
        {similarProducts.map((p) => (
          <div key={p.id} className="similar-products-section__item">
            <ProductCard product={p} collectionLabel={undefined} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SimilarProductsSection;
