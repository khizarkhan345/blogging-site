import { Document } from "@contentful/rich-text-types";
type YourElementType = string;

export interface obj1 {

        title: string;
        author: string;
        post: YourElementType[];  
}

export interface blog {
        id: string;
        title: string;
        author: string;
        post: Document;
}

export interface blogPost {
        data: [];
        marks: [];
        nodeType: string;
        value: string;
}

export interface suggestedPost {
        id: string;
        author: string;
        title: string;
}
      