import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const RichTextRenderer = (props: any) => {
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
  return <div>{documentToReactComponents(props.post, options)}</div>;
};

export default RichTextRenderer;
