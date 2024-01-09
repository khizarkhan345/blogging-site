import React from "react";
import design from "../../images/design1.png";

interface blogDataType {
  title: string;
  author: string;
}
const BlogBox = ({ title, author }: blogDataType) => {
  return (
    <div className="flex items-center justify-center relative w-[350px] h-[414px]  shadow-md offset-x-10 offset-y-5 bg-[#D3D3DB]">
      <img
        src={design}
        alt="background"
        className="w-[92%] max-w-full max-h-full"
      />
      <div className="w-[325px] h-[108px] bg-[#fff] absolute bottom-[70px]">
        <p className="text-[24px] text-[#7C8093] pl-[3px]">{title}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-[24px] text-[#4E9CA8] pl-[3px]">by {author}</p>
          <p className="text-[20px] text-[#B3B3B3] pr-[5px]">
            -- January 3rd, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
