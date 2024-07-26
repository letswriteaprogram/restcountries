import React, { useContext } from "react";
import { ThemeContext } from "../../context/DarkThhemeContext";
import { IoSunny, IoMoon } from "react-icons/io5";
const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="m-2">
      {darkTheme ? <IoSunny /> : <IoMoon />}
    </div>
  );
};

export default ThemeToggle;
