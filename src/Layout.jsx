import React, { Suspense } from "react";
import Header from "./components/LayOut/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet /> 
      </Suspense>
     
    </>
  );
}

export default Layout;
