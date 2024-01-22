import React from "react";
import design from "../../images/design1.png";

interface blogDataType {
  title: string;
  author: string;
  blogWidth: string;
  mbleBlogWidth: string;
  boxWidth: string;
  mbleBoxWidth: string;
  boxHeight: string;
  mbleBoxHeight: string;
}
const BlogBox = ({
  title,
  author,
  blogWidth,
  mbleBlogWidth,
  boxWidth,
  mbleBoxWidth,
  boxHeight,
  mbleBoxHeight,
}: blogDataType) => {
  console.log(blogWidth);
  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div
      className={`flex items-center justify-center relative ${mbleBlogWidth} h-[400px] ${blogWidth}  shadow-md offset-x-10 offset-y-5 bg-[#D3D3DB]`}
    >
      <img
        src={design}
        alt="background"
        className="w-[92%] max-w-full max-h-full"
      />
      <div
        className={`${mbleBoxWidth} ${mbleBoxHeight} p-[5px] ${boxWidth} ${boxHeight} bg-[#fff] absolute bottom-[30px] sm:bottom-[30px]`}
      >
        <p className="text-[20px] sm:text-[24px] text-[#7C8093] pl-[3px]">
          {title}
        </p>
        <div className="flex flex-row justify-between items-center mt-[10px]">
          <p className="text-[20px] sm:text-[24px] text-[#4E9CA8] pl-[3px]">
            by {author}
          </p>
          <p className="text-[20px] text-[#B3B3B3] pr-[5px]">
            -- January 3rd, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
