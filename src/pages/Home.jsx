import React, { useState } from "react";
import Container from "../components/Container";
import Filter from "../components/Filter";
import Search from "../components/Search";
import CountriesList from "../components/CountriesList";
function Home() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <section className="w-full h-[90vh]  bg-gray-300 dark:bg-gray-700">
      <Container className="bg-blue-400 flex justify-center items-center flex-wrap gap-8">
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