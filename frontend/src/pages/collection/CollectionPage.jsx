import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard.jsx";
import { bestsellerProducts } from "../../data/home.data.js";
import {
  buildCollectionFilters,
  collectionFilters,
  collectionHero,
  collectionSortOptions,
  filterCollectionProducts,
  getCollectionProducts,
  sortCollectionProducts,
} from "../../data/collection.data.js";
import { useFilterStore } from "../../store/useFilterStore.js";
import FilterSidebar from "./components/FilterSidebar.jsx";
import SortBar from "./components/SortBar.jsx";

function CollectionPage() {
  const { slug } = useParams();
  const hero = collectionHero[slug] ?? collectionHero.default;
  const activeFilters = useFilterStore((state) => state.activeFilters);
  const sortBy = useFilterStore((state) => state.sortBy);
  const clearFilters = useFilterStore((state) => state.clearFilters);
  const collectionProducts = getCollectionProducts(bestsellerProducts, slug);
  const filters = buildCollectionFilters(collectionProducts, collectionFilters);
  const filteredProducts = useMemo(() => {
    const filtered = filterCollectionProducts(
      collectionProducts,
      filters,
      activeFilters,
    );

    return sortCollectionProducts(filtered, sortBy);
  }, [activeFilters, collectionProducts, filters, sortBy]);

  useEffect(() => {
    clearFilters();
  }, [clearFilters, slug]);

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
            <img
              src={hero.image}
              alt={hero.title}
              fetchPriority="high"
              decoding="async"
            />
            <span>{hero.imageLabel}</span>
          </div>
        </div>

        <div className="collection-layout">
          <FilterSidebar filters={filters} />

          <div className="collection-results">
            <SortBar
              productCount={filteredProducts.length}
              totalCount={collectionProducts.length}
              sortOptions={collectionSortOptions}
            />

            {filteredProducts.length > 0 ?
              <div className="collection-results__grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    collectionLabel={hero.imageLabel}
                  />
                ))}
              </div>
            : <div className="collection-empty">
                <p className="eyebrow">No matches</p>
                <h3>Try clearing a filter.</h3>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionPage;
