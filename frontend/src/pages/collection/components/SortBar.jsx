import { useFilterStore } from "../../../store/useFilterStore.js";

function SortBar({ productCount, totalCount, sortOptions = [] }) {
  const sortBy = useFilterStore((state) => state.sortBy);
  const setSortBy = useFilterStore((state) => state.setSortBy);

  return (
    <div className="sort-bar">
      <div>
        <p className="eyebrow">
          Showing {productCount || 0} of {totalCount || 0} items
        </p>
        <h3>Browse our curated selection</h3>
      </div>

      <div className="sort-bar__actions">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`filter-chip ${sortBy === option.value ? "is-active" : ""}`}
            onClick={() => setSortBy(option.value)}
            aria-pressed={sortBy === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortBar;
