import React, { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import YourComponent from "../RichTextRenderer/RichTextRenderer";
import facebook from "../../images/facebook.png";
import linkedIn from "../../images/linkedIn.png";
import x from "../../images/x.png";
import printer from "../../images/printer.png";
import Desktop from "../../images/Desktop.png";
import BlogBox from "../BlogBox/BlogBox";

import useFetch from "../../Hooks/useFetch";

//const space_id = process.env.REACT_APP_SPACE_ID;
//const url = `https://graphql.contentful.com/content/v1/spaces/${space_id}/`;
const Blog = (props: any) => {
  const query = `
  {
  blogPost1Collection(limit:1) {
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
  // const blogpost1 = [
  //   {
  //     title: "Khizar",
  //     author: "khan",
  //     post: ["1", "2", "3"],
  //   },
  // ];
  // console.log(blogPost);

  //   const Bold = ({ children:any }) => <span className="bold">{children}</span>;

  // const Text = ({ children: any }) => <p className="align-center">{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-[18px] mb-[20px]">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-[36px] bold mb-[10px]">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-[28px]">{children}</h3>
      ),
    },
  };
  return (
    <div className="xs:px-[30px] sm:px-[10px] md:px-[20px] lg:px-[30px] py-[40px] mb-[40px]">
      {blogPost.length > 0 ? (
        <>
          <div>
            <h1 className="text-[32px] sm:text-[48px] font-semibold leading-[35px] sm:leading-[50px] ">
              {blogPost[0].title}
            </h1>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between lg:w-[80%] xl:w-[75%] mt-[30px]">
              <div>
                <p className="text-[40px] font-semibold text-center sm:text-left">
                  {blogPost[0].author}
                </p>
                <div className="flex flex-row">
                  <p className="text-[24px]">January 3rd, 2024</p>
                  <p className="text-[24px]"> - 6 min read</p>
                </div>
              </div>
              <div className="flex flex-row mt-[30px] sm:mt-0 justif-center items-center">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[48px] h-[48px] mr-[20px]"
                />
                <img
                  src={linkedIn}
                  alt="linkedIn"
                  className="w-[48px] h-[48px] mr-[20px]"
                />
                <img src={x} alt="X" className="w-[48px] h-[48px] mr-[30px]" />
                <img src={printer} alt="print" className="w-[48px] h-[48px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="lg:w-[80%] xl:w-[85%] mt-[30px]">
                <img src={Desktop} alt="main" />
              </div>
              <div className="lg:w-[80%] xl:w-[85%] mt-[30px]">
                {
                  // eslint-disable-next-line
                  //<YourComponent blogPost={blogPost}/>
                  blogPost[0].post.map((post: any) => (
                    <div>{documentToReactComponents(post, options)}</div>
                  ))
                }
              </div>
              <div className="flex flex-col justify-center items-center mt-[30px] sm:mt-[0] sm:flex-row   sm:justify-between lg:w-[82%]">
                <div className="mb-[30px] sm:mb-[0]">
                  <BlogBox
                    title={"The desing"}
                    author={"Khizar"}
                    blogWidth={"w-[380px]"}
                    boxWidth={"w-[340px]"}
                    mbleBoxWidth={"w-[340px]"}
                    boxHeight={"h-[110px]"}
                    mbleBoxHeight={"h-[110px]"}
                  />
                </div>
                <div>
                  <BlogBox
                    title={"The desing"}
                    author={"Khizar"}
                    blogWidth={"w-[380px]"}
                    boxWidth={"w-[340px]"}
                    mbleBoxWidth={"w-[340px]"}
                    boxHeight={"h-[110px]"}
                    mbleBoxHeight={"h-[110px]"}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[22px]">
              <div className="hidden xl:block mb-[50px]">
                <BlogBox
                  title={"The desing"}
                  author={"Khizar"}
                  blogWidth={"w-[380px]"}
                  boxWidth={"w-[340px]"}
                  mbleBoxWidth={"w-[340px]"}
                  boxHeight={"h-[110px]"}
                  mbleBoxHeight={"h-[110px]"}
                />
              </div>
              <div className="hidden xl:block">
                <BlogBox
                  title={"The desing"}
                  author={"Khizar"}
                  blogWidth={"w-[380px]"}
                  boxWidth={"w-[340px]"}
                  mbleBoxWidth={"w-[340px]"}
                  boxHeight={"h-[110px]"}
                  mbleBoxHeight={"h-[110px]"}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Blog;
// const mapStateToProps = (state: any) => {
//   console.log(state);
//   return {
//     blogData: state.blogReducer,
//   };
// };

// export default connect(mapStateToProps)(Blog);
