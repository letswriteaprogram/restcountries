import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Container from "../components/Utils/Container";
import { IoMdArrowRoundBack } from "react-icons/io";
function CountryDetail() {
  const params = useParams();
  const countryName = params.name;
  const { state } = useLocation();
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.official,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      alt: data.flags.alt,

      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div className="text-3xl flex justify-center mt-40   text-very-dark-blue  dark:text-white">Country Not Found</div>;
  }

  return (
    <main>
      <Container>
        
        <div className="mt-10">
          <span
            className="back-button w-20  border-2 border-very-dark-blue  dark:border-white flex items-center gap-1 p-2 rounded-md  bg-white text-very-dark-blue  dark:text-white dark:bg-dark-blue hover:scale-105 "
            onClick={() => history.back()}
          >
            <IoMdArrowRoundBack /> <p>Back</p>
          </span>
        </div>

        {countryData === null ? (
          " Country Detail Shimmer effect"
        ) : (
          <div className="w-full flex  flex-col lg:flex-row mt-16 gap-5 text-very-dark-blue  dark:text-white rounded-lg  mb-10">
            <div className="w-full min-w-60 min-h-60 flex justify-center items-center">
              <img
                className="w-full max-h-80  object-contain"
                src={countryData.flag}
                alt={countryData.name + ' Flag'}
                loading="lazy"
              />
            </div>
            <div className="w-full   md:pl-10">
              <h1 className="text-2xl my-2 font-semibold">
                {countryData.name}
              </h1>
              <div>
              <div className="md:flex gap-x-10 mb-8">
                <div className="flex max-w-80 flex-col gap-4">
                  <p>
                    Native Name : {countryData.nativeName || countryData.name}
                  </p>
                  <p>
                    Population :{" "}
                    {countryData.population.toLocaleString("en-IN")}
                  </p>
                  <p>Region : {countryData.region}</p>
                  <p>Sub Region : {countryData.subregion}</p>
                  <p>Capital : {countryData.capital?.join(", ")}</p>
                </div>
                <div className="flex max-w-80 flex-col gap-4">
                  <p>Top Level Domain : {countryData.tld}</p>
                  <p>Currencies : {countryData.currencies}</p>
                  <p>Languages : {countryData.languages}</p>
                </div>
                </div>

                {countryData.borders.length !== 0 && (
                  <div className="border-countries">
                    <span className="text-[18px]">Border Countries: </span>&nbsp;
                    {countryData.borders.map((border) => (
                      <Link
                        key={border}
                        to={`/${border}`}
                        className="inline-block border border-gray-400 p-1 m-2 
                        bg-white dark:bg-gray-700 rounded-md"
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}

export default CountryDetail;
