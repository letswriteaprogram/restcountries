import React, { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// import CountryDetail from "./pages/CountryDetail";
const CountryDetail = lazy(()=>import(`./pages/CountryDetail`))

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/:name" element={<CountryDetail/>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
