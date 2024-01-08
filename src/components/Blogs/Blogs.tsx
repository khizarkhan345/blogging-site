import React from "react";
import BlogBox from "../BlogBox/BlogBox";

const Blogs = () => {
  return (
    <div className="pt-[30px] pb-[80px]">
      <h1 className="text-[40px] text-center mb-[60px]">Feature blogs</h1>
      <div className="grid grid-cols-1 justify-center justify-items-center gap-x-2 gap-y-[60px] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <BlogBox />
        </div>
        <div>
          <BlogBox />
        </div>

        <div>
          <BlogBox />
        </div>

        <div>
          <BlogBox />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
