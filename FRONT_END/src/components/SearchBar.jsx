/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";


function SearchBar({ setSearch }) {

  const [value, setValue] = useState("");

  useEffect(() => {

    const timer = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timer);

  }, [value]);

  return (
    <div className="search-bar">

      <input
        className="search-input"
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

    </div>
  );

}

export default SearchBar;