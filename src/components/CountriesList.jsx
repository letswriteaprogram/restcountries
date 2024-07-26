import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import CardShimmer from "./Card/CardShimmer";

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
    <>
      {loading ? (
        <CardShimmer />
      ) : (
        <div className="countries-list flex justify-center  flex-wrap gap-10 py-10 ">
          {filteredCountries.length === 0 && search && !region && (
            <p className="text-xl md:text-2xl lg:text-3xl m-10 dark:text-white dark:bg-transparent ">
              No countries match your search query.
            </p>
          )}
          {filteredCountries.length === 0 && region && search && (
            <p className="text-3xl m-10 dark:text-white dark:bg-transparent ">
              No countries found matching your search query in this region.
            </p>
          )}
          {filteredCountries.length > 0 &&
            filteredCountries.map((country) => <Card key={country.name.common} country={country}></Card>)}
        </div>
      )}
    </>
  );
}

export default CountriesList;
