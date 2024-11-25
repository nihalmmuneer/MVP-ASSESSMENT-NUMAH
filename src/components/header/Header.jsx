import React from "react";
import { Button } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center bg-white p-3 px-6 gap-3 border-b">
      <div className="flex items-center justify-between w-full md:flex-1 md:px-4">
        <div className="flex items-center space-x-2 text-sm">
          <FaChevronLeft className="text-black" />
          <FaChevronRight className="text-gray-300" />
        </div>
      </div>

      <div className="flex items-center w-full md:w-[300px] lg:w-[400px] gap-2 justify-center md:justify-center">
        <div className="md:flex items-center bg-gray-100 p-2 rounded-full md:w-640 hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm px-2 py-1 outline-none border-none w-full"
          />
          <FaSearch className="text-gray-400 text-base" />
        </div>
      </div>

      <div className="flex items-center w-full md:w-auto gap-3 justify-between md:justify-end">
        <div className="mt-2 md:mt-0 flex-shrink-0 border-l-2 border-gray-300 px-3">
          <Button
            type="button"
            className="bg-yellow-300 rounded-full shadow-md text-black px-4 py-2 text-xs md:text-sm"
          >
            Go Premium
          </Button>
        </div>

        <div className="flex gap-3">
          <div className="text-sm bg-white rounded-full p-2 shadow-md flex items-center justify-center">
            <BsHandbag className="text-gray-400 text-base md:text-lg" />
          </div>
          <div className="text-sm bg-white rounded-full p-2 shadow-md flex items-center justify-center">
            <AiOutlineUser className="text-gray-400 text-base md:text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
