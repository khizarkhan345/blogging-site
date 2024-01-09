import React, { useState, useEffect } from "react";
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
  title: string;
  author: string;
  post: YourElementType[];
}

const Blogs = () => {
  const [blogPost, setBlogPost] = useState<obj1[]>([]);

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

  const space_id = process.env.REACT_APP_SPACE_ID;
  console.log(space_id);
  const access_token = process.env.REACT_APP_ACCESS_TOKEN;

  console.log(access_token);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${space_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${access_token}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      );

      let data = await response.json();

      const items: ContentItem[] = data.data.blogPost1Collection.items;

      items.forEach((item: ContentItem) => {
        const obj: obj1 = {
          title: "",
          author: "",
          post: [""],
        };
        const content = item.post.json.content;

        obj.title = item.title;

        obj.author = item.author;

        content.forEach((element: ContentArr) => {
          //console.log(element.content[0].value);

          obj.post.push(element.content[0].value);
        });

        setBlogPost((prev) => {
          return [...prev, obj];
        });
      });
    })();
  }, []);

  //console.log(obj);
  console.log(blogPost);

  return (
    <div className="pt-[30px] pb-[80px]">
      <h1 className="text-[40px] text-center mb-[60px]">Feature blogs</h1>
      <div className="grid grid-cols-1 justify-center justify-items-center gap-x-2 gap-y-[60px] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {blogPost.map((blog: obj1) => (
          <div>
            <BlogBox title={blog.title} author={blog.author} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
