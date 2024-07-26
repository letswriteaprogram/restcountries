import React, { memo } from 'react';

const Search = memo(({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="rounded-md w-60 md:min-w-72 bg-white text-gray-800 dark:text-white dark:bg-gray-800">
      <input
        type="search"
        className="w-full h-12 px-5 border-none outline-none rounded-md bg-transparent text-lg"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </div>
  );
});

export default Search;
