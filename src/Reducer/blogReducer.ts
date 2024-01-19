import { obj1 } from "../Types/Types";
const blogData: obj1[] = [];

interface actionType {
    type: string,
    data: obj1
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = blogData, action: actionType) => {
   switch(action.type) {
    case "ADD_DATA": 
        return [...state, action.data];
    
    default:
        return state;  
        
   }
}