import React from "react";
import { connect } from "react-redux";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-[80%] sm:w-[80%] md:w-[80%] lg:w-[60%] mx-auto">
      <h1 className="text-[40px] text'-center mb-[20px]">Contact Us</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-[20px]">
        <input
          type="text"
          placeholder="First Name"
          className="w-[300px] sm:w-[210px] sm:mr-[20px] h-[50px] pl-[20px] mb-[20px] sm:mb-[0] border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-[300px] sm:w-[210px] h-[50px] pl-[20px] border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
        />
      </div>
      <div className="mb-[20px]">
        <input
          type="text"
          placeholder="Email"
          className="w-[300px] sm:w-[440px] h-[50px] pl-[20px] border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
        />
      </div>
      <div className="mb-[20px]">
        <textarea
          placeholder="Your message"
          className="w-[300px] sm:w-[440px] h-[300px] pl-[20px] pt-[10px] placeholder-start border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
        />
      </div>
      <div className="flex flex-row justify-even mb-[30px]">
        <div className="w-[170px] sm:w-[290px]"></div>
        <div>
          <button className="text-white text-[20px] float-right bg-[#4E9CA8] w-[130px] sm:w-[150px] h-[70px] text-center rounded-[50px] hover:bg-[#366d75]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
