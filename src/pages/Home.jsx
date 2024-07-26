import React, { useState } from "react";
import Container from "../components/Utils/Container";
import Filter from "../components/SearchFilter/Filter";
import Search from "../components/SearchFilter/Search";
import CountriesList from "../components/CountriesList";
function Home() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <section className="w-full  min-h-[90vh]  bg-gray-300 dark:bg-gray-700">
      <Container className="flex flex-col items-center md:flex-row md:justify-between py-6 gap-6 ">
        <Search search={search} setSearch={setSearch}></Search>
        <Filter region={region} setRegion={setRegion}></Filter>
      </Container>
      <Container>
        <CountriesList region={region} search={search}></CountriesList>
      </Container>
    </section>
  );
}

export default Home;