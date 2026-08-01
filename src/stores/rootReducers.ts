import { combineReducers } from "redux";
import ProductReducer from "../reducers/productReducer";
import CustomerReducer from "../reducers/customerReducer";

const rootReducer = combineReducers({
    product: ProductReducer,
    customer: CustomerReducer,
});

export default rootReducer;