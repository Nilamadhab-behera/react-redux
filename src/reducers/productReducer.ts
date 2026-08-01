import { HANDLE_ADD_PRODUCT, HANDLE_ITEM_CHANGE, HANDLE_LOT_FETCH, HANDLE_PRODUCT_ERROR, HANDLE_REMOVE_PRODUCT, HANDLE_WAREHOUSE_CHANGE } from "../constants/productActionEvents";
import type { ProductReducerAction, ProductReducerState } from "../types/product";
import { calculateDiscount, getDefaultProductError, getDefaultState } from "../utils/helper";

const key = crypto.randomUUID();

const initialProductState: ProductReducerState = {
    products: [getDefaultState(key)],
    products_err: [getDefaultProductError(key)]
};

const ProducerReducer = (state = initialProductState, action: ProductReducerAction): ProductReducerState => {
    if (action.type === HANDLE_ADD_PRODUCT) {
        const key = crypto.randomUUID();
        return {
            ...state,
            products: [...state.products, getDefaultState(key)],
            products_err: [...state.products_err, getDefaultProductError(key)]
        };
    } else if (action.type === HANDLE_REMOVE_PRODUCT) {
        return {
            ...state,
            products: state.products.filter((product) => product.key !== action.payload.product_key),
            products_err: state.products_err.filter((product) => product.key !== action.payload.product_key),
        }
    } else if (action.type === HANDLE_ITEM_CHANGE) {
        return {
            ...state,
            products: state.products.map((product) => {
                if (product.key !== action.payload.product_key) {
                    return product;
                };

                let updatedData = {
                    ...product,
                    [action.payload.name]: action.payload.value
                };

                return {
                    ...updatedData,
                    product_discount_value: calculateDiscount(updatedData),
                };
            }),
            products_err: state.products_err.map((product) => {
                if (product.key !== action.payload.product_key) return product;
                return {
                    ...product,
                    [action.payload.name + "_err"]: ""
                }
            })
        };
    } else if (action.type === HANDLE_WAREHOUSE_CHANGE) {
        return {
            ...state,
            products: state.products.map((product) => {
                if (product.key !== action.payload.product_key) return product;

                return {
                    ...product,
                    [action.payload.name]: action.payload.value,
                    product_loading: true,
                }
            }),
            products_err: state.products_err.map((product) => {
                if (product.key !== action.payload.product_key) return product;
                return {
                    ...product,
                    [action.payload.name + "_err"]: ""
                }
            })
        };
    } else if (action.type === HANDLE_LOT_FETCH) {
        return {
            ...state,
            products: state.products.map((product) => {
                if (product.key !== action.payload.product_key) return product;

                return {
                    ...product,
                    [action.payload.name]: action.payload.value,
                    product_loading: false,
                }
            })
        };
    } else if (action.type === HANDLE_PRODUCT_ERROR) {
        return {
            ...state,
            products_err: [...action.payload.errors]
        }
    } else {
        return state;
    }
};

export default ProducerReducer;