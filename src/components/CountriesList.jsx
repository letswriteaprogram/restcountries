import React, { useEffect, useState } from "react";

function CountriesList({ region, search }) {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await fetch("https://restcountries.com/v3.1/all");
        const data = await result.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);
  useEffect(() => {
    let filtered = countries;

    if (search) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter(
        (country) => country.region.toLowerCase() === region
      );
    }

    setFilteredCountries(filtered);
  }, [search, region, countries]);
  return (
    <>{loading ? "loading" : "true"}</>
    // <div className="countries-list">
    //   {filteredCountries.length === 0 && search && !region && (
    //     <p>No countries match your search query.</p>
    //   )}
    //   {filteredCountries.length === 0 && region && search && (
    //     <p>No countries found in this region.</p>
    //   )}
    //   {filteredCountries.length > 0 &&
    //     filteredCountries.map((country) => (
    //       <div key={country.cca3} className="country-card">
    //         <h3>{country.name.common}</h3>
    //         <p>{country.region}</p>
    //       </div>
    //     ))}
    // </div>
  );
}

export default CountriesList;
