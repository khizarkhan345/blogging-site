import {combineReducers} from "redux";
import blogReducer from "./blogReducer";

const RootReducer = combineReducers({
    blogReducer: blogReducer
});

export default RootReducer;