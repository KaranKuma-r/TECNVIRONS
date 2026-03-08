function SortDropdown({ setSort }) {

  return (
    <div className="sort-dropdown">

      <select
        className="sort-select"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="id">Default</option>
        <option value="price"> Sort by Price</option>
        <option value="name"> Sort by Name</option>
      </select>

    </div>
  );

}

export default SortDropdown;