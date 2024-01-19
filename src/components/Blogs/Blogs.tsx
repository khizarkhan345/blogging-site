import React from "react";
//import { connect } from "react-redux";
import useFetch from "../../Hooks/useFetch";
import BlogBox from "../BlogBox/BlogBox";

type YourElementType = string;

// type YourElementType1 = {
//   title:
// }

interface ContentValue {
  value: string;
}

interface ContentArr {
  content: ContentValue[];
}
interface ContentItem {
  sys: {
    id: string;
  };
  post: {
    json: {
      nodeType: string;
      data: any;
      content: any[]; // Adjust the type based on your actual content structure
    };
  };
  title: string;
  author: string;
}

interface obj1 {
  id: string;
  title: string;
  author: string;
  post: YourElementType[];
}

const space_id = process.env.REACT_APP_SPACE_ID;
const url = `https://graphql.contentful.com/content/v1/spaces/${space_id}/`;

const Blogs = (props: any) => {
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
      <div className="grid grid-cols-1 justify-center justify-items-center gap-x-2 gap-y-[60px] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {blogPost.map((blog: obj1) => (
          <div key={blog.id}>
            <BlogBox title={blog.title} author={blog.author} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
// const mapStateToProps = (state: any) => {
//   console.log(state);
//   return {
//     blogData: state.blogReducer,
//   };
// };

// export default connect(mapStateToProps)(Blogs);
