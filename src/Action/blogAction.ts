import { obj1 } from "../Types/Types";


export const addBlogData = (data: obj1) => ({
    type: "ADD_DATA",
    data,
});