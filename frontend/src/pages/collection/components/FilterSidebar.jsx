function FilterSidebar({ filters }) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar__card">
        <div className="filter-sidebar__header">
          <p className="eyebrow">Refine</p>
          <h3>Filters</h3>
        </div>

        <div className="filter-sidebar__groups">
          {filters.map((filter) => (
            <section key={filter.id} className="filter-group">
              <strong>{filter.title}</strong>
              <div className="filter-chips">
                {filter.options.map((option) => (
                  <button key={option} type="button" className="filter-chip">
                    {option}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
