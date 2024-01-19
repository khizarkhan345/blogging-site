import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BlogPost {
  post: import("@contentful/rich-text-types").Document;
}

const YourComponent: React.FC<{ blogPost: BlogPost }> = ({ blogPost }) => {
  return <div>1</div>;
};

export default YourComponent;
