import React from "react";
import { BiSolidImage } from "react-icons/bi";
function CardShimmer() {
  const arr = [...Array(8).keys()];
  return (
    <div className="w-full flex justify-center gap-10 flex-wrap ">
      {arr.map((value) => (
        <div key={value} className="min-w-60 max-w-80 rounded-md overflow-hidden flex-1 animate-pulse">
          <div className="w-full h-48 bg-gray-400 dark:bg-gray-600 flex justify-center items-center" >
          <BiSolidImage className="text-6xl text-white dark:text-gray-800"/>
          </div>
          <div className="card-text px-4 py-8 bg-white dark:bg-gray-800 ">
            <div className="w-full h-6 bg-gray-400 dark:bg-gray-600  rounded-lg"></div>
            <div className="w-5/6 h-4 bg-gray-400 dark:bg-gray-600 mt-4 rounded-lg"></div>
            <div className="w-4/5 h-4 bg-gray-400 dark:bg-gray-600 mt-4 rounded-lg"></div>
            <div className="w-4/5 h-4 bg-gray-400 dark:bg-gray-600 mt-4 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardShimmer;
