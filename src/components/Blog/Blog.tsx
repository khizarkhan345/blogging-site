import React, { useContext } from "react";
import { useParams } from "react-router";
import RichTextRenderer from "../RichTextRenderer/RichTextRenderer";
import facebook from "../../images/facebook.png";
import linkedIn from "../../images/linkedIn.png";
import x from "../../images/x.png";
import printer from "../../images/printer.png";
import Desktop from "../../images/Desktop.png";
import BlogBox from "../BlogBox/BlogBox";
import { blog, blogPost, suggestedPost } from "../../Types/Types";
import MyContext from "../../Context/MyContext";

const Blog = () => {
  //const [suggestedPosts, setSuggestedPosts] = useState<any>(null);
  const { id } = useParams();
  console.log(id);

  let blogPost = useContext(MyContext);

  console.log(blogPost);
  // if (blogPost.length > 0) {
  //   console.log(blogPost[0].post);
  // }

  const suggestedPosts = id
    ? blogPost.filter((blog: blog) => blog.id !== id)
    : [];

  blogPost = id ? blogPost.filter((blog: blog) => blog.id === id) : blogPost;

  return (
    <div className="xs:px-[5px] sm:px-[10px] md:px-[20px] lg:px-[30px] py-[40px] mb-[40px]">
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
              <div className="lg:w-[80%] xl:w-[85%] mt-[30px] pr-[5px]">
                {blogPost[0].post.map((post: blogPost) => (
                  <RichTextRenderer post={post} />
                ))}
              </div>
              <div className="flex flex-col justify-center items-center mt-[30px] sm:mt-[0] sm:flex-row   sm:justify-between lg:w-[82%]">
                {suggestedPosts.length > 0
                  ? suggestedPosts.map((post: suggestedPost) => (
                      <div
                        className="mb-[30px] md:mr-[10px] sm:mb-[0]"
                        key={post.id}
                      >
                        <BlogBox
                          id={post.id}
                          title={post.title}
                          author={post.author}
                          blogWidth={"lg:w-[450px]"}
                          mbleBlogWidth={"w-[380px]"}
                          boxWidth={"lg:w-[370px]"}
                          mbleBoxWidth={"w-[340px]"}
                          boxHeight={"lg:h-[140px]"}
                          mbleBoxHeight={"h-[160px]"}
                        />
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="mt-[22px]">
              {suggestedPosts.length > 0
                ? suggestedPosts.map((post: suggestedPost) => (
                    <div className="hidden xl:block mb-[50px]" key={post.id}>
                      <BlogBox
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        blogWidth={"lg:w-[450px]"}
                        mbleBlogWidth={"w-[380px]"}
                        boxWidth={"lg:w-[370px]"}
                        mbleBoxWidth={"w-[340px]"}
                        boxHeight={"lg:h-[140px]"}
                        mbleBoxHeight={"h-[140px]"}
                      />
                    </div>
                  ))
                : ""}
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
