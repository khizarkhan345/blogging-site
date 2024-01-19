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
    </div>
  );
};

export default Contact;
