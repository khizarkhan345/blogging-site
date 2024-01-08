import React from "react";
import design from "../../images/design1.png";

const BlogBox = () => {
  return (
    <div className="flex items-center justify-center relative w-[380px] h-[414px] bg-[#D3D3DB] ">
      <img
        src={design}
        alt="background"
        className="w-[92%] max-w-full max-h-full"
      />
      <div className="w-[325px] h-[108px] bg-[#fff] absolute bottom-[70px]">
        <p className="text-[24px] text-[#7C8093] pl-[3px]">
          The Design Pos about quality design
        </p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-[24px] text-[#4E9CA8] pl-[3px]">by khizar</p>
          <p className="text-[20px] text-[#B3B3B3] pr-[5px]">
            -- January 3rd, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
