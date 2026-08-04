import { HANDLE_ADD_PRODUCT, HANDLE_ITEM_CHANGE, HANDLE_LOT_FETCH_FAILURE, HANDLE_LOT_FETCH_SUCCESS, HANDLE_REMOVE_PRODUCT, HANDLE_WAREHOUSE_CHANGE } from "../constants/productActionEvents";
import type { ProductDetails, ProductError } from "../types/product";

export const handleAddProduct = () => {
    return {
        type: HANDLE_ADD_PRODUCT,
    };
};

export const handleRemoveProduct = (product_key: string) => {
    return {
        type: HANDLE_REMOVE_PRODUCT,
        payload: { product_key }
    };
};

export const handleItemChange = <T extends keyof ProductDetails>(key: string, name: T, value: ProductDetails[T]) => {
    return {
        type: HANDLE_ITEM_CHANGE,
        payload: { product_key: key, name, value }
    };
};

export const handleWarehouseChange = <T extends keyof ProductDetails>(key: string, name: T, value: ProductDetails[T]) => {
    return {
        type: HANDLE_WAREHOUSE_CHANGE,
        payload: { product_key: key, name, value }
    };
};

export const handleSetLotDetails = <T extends keyof ProductDetails>(key: string, name: T, lots: Array<{ value: number; label: string }>) => {
    return {
        type: HANDLE_LOT_FETCH_SUCCESS,
        payload: { product_key: key, name, value: lots }
    };
};

export const handleLotFailedFailure = (productKey: string, error: string) => {
    return {
        type: HANDLE_LOT_FETCH_FAILURE,
        payload: { product_key: productKey, error: error }
    };
};

export const handleProductError = (product_error: ProductError[]) => {
    return {
        type: 'HANDLE_PRODUCT_ERROR',
        payload: {
            errors: product_error
        }
    };
};