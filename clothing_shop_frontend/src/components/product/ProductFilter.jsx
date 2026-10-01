function ProductFilter({
  sort,
  setSort,
  category,
  setCategory
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Category</label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          <option value="">
            All Categories
          </option>

          <option value="men">
            Men
          </option>

          <option value="women">
            Women
          </option>

          <option value="kids">
            Kids
          </option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By</label>

        <select
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value
            )
          }
        >
          <option value="default">
            Recommended
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;

