import {useState, useEffect} from 'react';
import {Document} from '@contentful/rich-text-types';

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
    id: string,
  title: string;
  author: string;
  post: any;
}

const useFetch = (query: string) => {
  const [blogPost, setBlogPost] = useState<obj1[]>([]);

    const query1 = `
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

  const access_token = process.env.REACT_APP_ACCESS_TOKEN;

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
        // const obj: obj1 = {
        //   id: "",
        //   title: "",
        //   author: "",
        //   post: Document
        // };

       // console.log("item", item.sys.id);
        const content: any = item.post.json.content;

        //obj.id = item.sys.id;
        //obj.title = item.title;

        //obj.author = item.author;

        //obj.post = content;

        const obj: obj1 = {
          id: item.sys.id,
          title: item.title,
          author: item.author,
          post: content
        };
        //console.log("content", content);

        // content.forEach((element: ContentArr) => {
        //   //console.log(element.content[0].value);

        //   obj.post.push(element.content[0].value);
        // });

        setBlogPost((prev) => {
            return [...prev, obj];
        })
        // props.dispatch(addBlogData(obj));
      });
    })();
  }, [query]);

  
  return blogPost;
}

export default useFetch;
