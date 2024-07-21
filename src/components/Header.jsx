import React from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-[10vh] shadow-lg text-gray-800  dark:text-white dark:bg-gray-800  flex justify-between items-center font-lora text-md md:text-xl lg:text-2xl">
      <Container className="flex justify-between items-center">
        <Link to="/">Where in the world?</Link>
        <ThemeToggle />
      </Container>
    </header>
  );
}

export default Header;
