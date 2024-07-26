import React from "react";
import { Link } from "react-router-dom";
function Card({ country }) {
  const { name: { common: name }, flags: { svg: flagSrc, alt: flagAlt }, population, region, capital } = country;
  return (
    <Link
      to={`/${name}`}
      state={country}
      className="min-w-60 max-w-80 flex-1  overflow-hidden  bg-white text-very-dark-blue  dark:text-white dark:bg-dark-blue  rounded-lg shadow-lg transition-all duration-200 ease-in-out hover:scale-105 animate-popup "
    >
      <div className="min-w-60 overflow-hidden flex justify-center items-center shadow-sm">
        <img
          className="w-full h-48 object-cover"
          src={flagSrc}
          alt={name + ' Flag'}
          loading="lazy"
        />
      </div>
      <div className="card-text p-4 border-t border-gray-500 ">
        <h3 className="card-title text-xl font-semibold mt-3">
          {name}
        </h3>
        <p className="text-base mt-3">
          <span className="font-semibold">Population: </span>
          {population.toLocaleString("en-IN")}
        </p>
        <p className="text-base mt-2">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p className="text-base mt-2">
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </Link>
  );
}

export default Card;
