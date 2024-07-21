import React from "react";

function Filter({ setRegion }) {
  return (
    <div>
      <select onChange={(e) => setRegion(e.target.value.toLowerCase())}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
