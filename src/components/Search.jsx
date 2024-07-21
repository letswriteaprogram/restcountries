import React from "react";

function Search({setSearch}) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
}

export default Search;
