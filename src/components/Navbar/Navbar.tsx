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
            className="sm:mr-[40px] md:mr-[60px] lg:mr-[80px] font-semibold text-offWhite text-[20px] hover:cursor-pointer hover:text-darkWhite"
          >
            Home
          </a>
          <a
            href="/blogs"
            className="sm:mr-[40px] md:mr-[60px] lg:mr-[80px] font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Blogs
          </a>
          <a
            href="/about"
            className="sm:mr-[40px] md:mr-[60px] lg:mr-[80px] font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            About
          </a>
          <a
            href="/contact"
            className="sm:mr-[40px] md:mr-[60px] lg:mr-[80px] p-[2px] font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Contact
          </a>
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
          href="/blogs"
          className="mb-[30px] text-offWhite text-[20px] font-semibold hover:cursor-pointer  hover:text-darkWhite"
        >
          Blogs
        </a>
        <a
          href="/about"
          className="mb-[30px] text-offWhite text-[20px] font-semibold hover:cursor-pointer  hover:text-darkWhite"
        >
          About
        </a>
        <a
          href="/contact"
          className="mb-[30px] p-[2px] font-semibold text-offWhite  text-[20px] hover:cursor-pointer  hover:text-darkWhite"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
