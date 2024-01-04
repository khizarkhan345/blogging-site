import React, { useState } from "react";
import Menu from "../../images/Menu-icon.png";
import icon from "../../images/search-icon.png";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className=" px-[30px] sm:px-[10px] md:px-[20px] lg:px-[100px] py-[40px] mb-[40px] bg-[#fff] border-b-[2px]">
      <div className="flex flex-row justify-between items-center ">
        <div>
          <a
            href="/"
            className="text-offWhite text-[32px] bold uppercase hover:cursor-pointer"
          >
            Face
          </a>
        </div>
        <div className="sm:hidden mt-[10px]">
          <button onClick={toggleNavBar}>
            <img src={Menu} alt="Menu" />
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center sm:block">
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] font-semibold text-offWhite text-[20px] hover:cursor-pointer hover:text-darkWhite"
          >
            Home
          </a>
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Blogs
          </a>
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            About
          </a>
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] p-[2px] font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Contact
          </a>
          <div className="flex flex-row relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[150px] xl:w-[280px] h-[50px] rounded-[30px] border-1 pl-[10px] bg-[#F3F4F8] focus:border-0 focus:outline-none"
            />
            <button className="absolute top-[4px] right-[10px]">
              <img src={icon} alt="search" className="w-[50px] h-[40px]" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center mt-[30px] sm:hidden ${
          showNavBar ? "block" : "hidden"
        }`}
      >
        <a
          href="/"
          className="mb-[30px] text-offWhite text-[20px] font-semibold hover:cursor-pointer  hover:text-darkWhite"
        >
          Home
        </a>
        <a
          href="/"
          className="mb-[30px] text-offWhite text-[20px] font-semibold hover:cursor-pointer  hover:text-darkWhite"
        >
          Blogs
        </a>
        <a
          href="/"
          className="mb-[30px] text-offWhite text-[20px] font-semibold hover:cursor-pointer  hover:text-darkWhite"
        >
          About
        </a>
        <a
          href="/"
          className="mb-[30px] p-[2px] font-semibold text-offWhite  text-[20px] hover:cursor-pointer  hover:text-darkWhite"
        >
          Contact
        </a>
        <div className="flex flex-row relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[250px] h-[60px] rounded-[30px] border-1 pl-[10px] bg-[#F3F4F8] focus:border-0 focus:outline-none"
          />
          <button className="absolute top-[10px] right-[10px]">
            <img src={icon} alt="search" className="w-[50px] h-[40px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
