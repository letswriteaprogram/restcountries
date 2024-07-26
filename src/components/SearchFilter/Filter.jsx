import React, { memo } from 'react';

const options = [
  { value: "", text: "Filter by Region" },
  { value: "Africa", text: "Africa" },
  { value: "Americas", text: "Americas" },
  { value: "Asia", text: "Asia" },
  { value: "Europe", text: "Europe" },
  { value: "Oceania", text: "Oceania" },
];

const Filter = memo(({ setRegion }) => {
  const handleChange = (e) => {
    setRegion(e.target.value.toLowerCase());
  };

  return (
    <div className="bg-white w-60 md:min-w-72 text-gray-800 dark:text-white dark:bg-gray-800 rounded-md overflow-hidden px-3">
    <select
      id="state"
      aria-label="Region Filter" // Provides an accessible name for the select element
      className="w-full h-12 border-none outline-none bg-transparent text-lg"
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.text} className="dark:bg-gray-800" value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
  
  );
});

export default Filter;
