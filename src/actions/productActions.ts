import type { ProductDetails, ProductError } from "../types/product";

export const handleAddProduct = () => {
    return {
        type: 'HANDLE_ADD_PRODUCT',
    };
};

export const handleRemoveProduct = (product_key: string) => {
    return {
        type: 'HANDLE_REMOVE_PRODUCT',
        payload: { product_key }
    };
};

export const handleItemChange = <T extends keyof ProductDetails>(key: string, name: T, value: ProductDetails[T]) => {
    return {
        type: 'HANDLE_ITEM_CHANGE',
        payload: { product_key: key, name, value }
    }
};

export const handleWarehouseChange = <T extends keyof ProductDetails>(key: string, name: T, value: ProductDetails[T]) => {
    return {
        type: 'HANDLE_WAREHOUSE_CHANGE',
        payload: { product_key: key, name, value }
    };
};

export const handleSetLotDetails = <T extends keyof ProductDetails>(key: string, name: T, lots: Array<{ value: number; label: string }>) => {
    return {
        type: 'HANDLE_LOT_FETCH',
        payload: { product_key: key, name, value: lots }
    }
};


export const handleProductError = (product_error: ProductError[]) => {
    return {
        type: 'HANDLE_PRODUCT_ERROR',
        payload: {
            errors: product_error
        }
    }
}