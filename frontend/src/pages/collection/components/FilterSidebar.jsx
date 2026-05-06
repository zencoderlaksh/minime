import { useFilterStore } from "../../../store/useFilterStore.js";

function FilterSidebar({ filters }) {
  const activeFilters = useFilterStore((state) => state.activeFilters);
  const pendingFilters = useFilterStore((state) => state.pendingFilters);
  const setPendingFilter = useFilterStore((state) => state.setPendingFilter);
  const applyFilters = useFilterStore((state) => state.applyFilters);
  const clearFilters = useFilterStore((state) => state.clearFilters);

  const hasSelectedFilters = Object.values(pendingFilters).some(
    (arr) => arr.length > 0,
  );
  const filtersChanged =
    JSON.stringify(activeFilters) !== JSON.stringify(pendingFilters);

  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar__card">
        <div className="filter-sidebar__header">
          <p className="eyebrow">Refine</p>
          <h3>Filters</h3>
          {hasSelectedFilters && (
            <button
              type="button"
              className="filter-sidebar__clear"
              onClick={clearFilters}
              aria-label="Clear all filters"
            >
              Clear
            </button>
          )}
        </div>

        <div className="filter-sidebar__groups">
          {filters.map((filter) => (
            <section key={filter.id} className="filter-group">
              <strong>{filter.title}</strong>
              <div className="filter-chips">
                {filter.options.map((option) => {
                  const isActive =
                    pendingFilters[filter.id]?.includes(option) || false;
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`filter-chip ${isActive ? "is-active" : ""}`}
                      onClick={() => setPendingFilter(filter.id, option)}
                      aria-pressed={isActive}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <button
          type="button"
          className="filter-sidebar__apply"
          onClick={applyFilters}
          disabled={!filtersChanged}
        >
          Apply filters
        </button>
      </div>
    </aside>
  );
}

export default FilterSidebar;
