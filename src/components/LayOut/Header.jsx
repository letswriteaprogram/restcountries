import React from "react";
import Container from "../Utils/Container";
import ThemeToggle from "../Utils/ThemeToggle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-[100%] h-[10vh] shadow-lg bg-white text-black  dark:text-white dark:bg-gray-800  flex justify-between items-center  text-md md:text-xl lg:text-2xl">
      <Container className="flex justify-between items-center">
        <Link to="/">Where in the world?</Link>
        <ThemeToggle/>
      </Container>
    </header>
  );
}

export default Header;
