function SortBar() {
  return (
    <div className="sort-bar">
      <div>
        <p className="eyebrow">Merchandising</p>
        <h3>Curated discovery with backend-ready product cards</h3>
      </div>

      <div className="sort-bar__actions">
        <button type="button" className="filter-chip">
          Featured
        </button>
        <button type="button" className="filter-chip">
          Newest
        </button>
        <button type="button" className="filter-chip">
          Price
        </button>
      </div>
    </div>
  )
}

export default SortBar
