import React from "react";
//import { connect } from "react-redux";

import useFetch from "../../Hooks/useFetch";
import BlogBox from "../BlogBox/BlogBox";
import { blog } from "../../Types/Types";

const Blogs = () => {
  const query = `
  {
  blogPost1Collection {
    items {
      sys {
        id
      }      
      title
      author
      post {
        json 
      }
    }
  }
 }
  `;

  const blogPost = useFetch(query);

  console.log(blogPost);
  return (
    <div className="pt-[30px] pb-[80px]">
      <h1 className="text-[40px] text-center mb-[60px]">Feature blogs</h1>
      <div className="grid grid-cols-1 justify-center justify-items-center gap-x-2 gap-y-[60px] md:grid-cols-2">
        {blogPost.map((blog: blog) => (
          <div key={blog.id}>
            <BlogBox
              id={blog.id}
              title={blog.title}
              author={blog.author}
              blogWidth="sm:w-[500px]"
              mbleBlogWidth="w-[380px]"
              boxWidth="sm:w-[420px]"
              mbleBoxWidth="w-[340px]"
              boxHeight="sm:h-[180px]"
              mbleBoxHeight="h-[110px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
