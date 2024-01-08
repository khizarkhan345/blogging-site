import React from "react";

const Footer = () => {
  return (
    <div className="px-[30px] sm:px-[10px] md:px-[20px] lg:px-[100px] py-[40px] py-[80px] bg-[#fff]">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-10">
        <div className="flex flex-col items-center order-2 md:order-1 sm:col-span-1 md:col-span-2 mt-[30px] md:mt-0">
          <a
            href="/"
            className="text-[32px] bold uppercase hover:cursor-pointer"
          >
            Face
          </a>
        </div>
        <div className="order-3 md:order-2 flex flex-col items-center sm:col-span-1 md:col-span-2 mt-[30px] sm:mt-0">
          <a
            href="/"
            className="font-semibold text-offWhite text-[20px] mb-[15px] hover:cursor-pointer hover:text-darkWhite"
          >
            Home
          </a>
          <a
            href="/blogs"
            className="font-semibold text-offWhite text-[20px] mb-[15px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Blogs
          </a>
          <a
            href="/about"
            className=" font-semibold text-offWhite text-[20px] mb-[15px] hover:cursor-pointer  hover:text-darkWhite"
          >
            About
          </a>
          <a
            href="/contact"
            className="font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Contact
          </a>
        </div>
        <div className="order-4 md:order-3 flex flex-col items-center sm:col-span-1 md:col-span-2 mt-[30px] sm:mt-0">
          <a
            href="/privacy"
            className="font-semibold text-offWhite text-[20px] mb-[15px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className=" font-semibold text-offWhite text-[20px] mb-[15px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Terms
          </a>
          <a
            href="/cookies"
            className="font-semibold text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            Cookies
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start order-1 md:order-4 mx-auto sm:col-span-3 md:col-span-4 w-[230px] xs:w-[300px] sm:w-[350px] mb-[50px] md:mb-0">
          <p className="text-[24px] mb-[15px]">Subscribe to our newsletter</p>
          <div className="flex flex-row relative">
            <input
              type="text"
              placeholder="Email"
              className="w-[230px] xs:w-[300px] sm:w-[350px] h-[70px] bg-[#f3f4f8] rounded-[50px] pl-[20px] focus:border-0 focus:outline-none"
            />
            <button className="text-white bg-[#4E9CA8] w-[90px] xs:w-[130px] sm:w-[150px] h-[70px] text-center absolute right-0 sm:right-0 rounded-[50px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
