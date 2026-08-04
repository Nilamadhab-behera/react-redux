import { combineReducers } from "redux";
import ProductReducer from "../reducers/productReducer";
import CustomerReducer from "../reducers/customerReducer";
import UserPostReducer from "../reducers/userPostReducer";

const rootReducer = combineReducers({
    customer: CustomerReducer,
    product: ProductReducer,
    userPost: UserPostReducer
});

export default rootReducer;