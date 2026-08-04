export interface ProductDetails {
    key: string;
    product_id?: number;
    product_name: string;
    product_warehouse: number;
    product_lot: number;
    product_lots: Array<{ value: number; label: string }>
    product_qty: number;
    product_rate: number;
    product_discount_type: 'flat' | 'percent';
    product_discount_percent: number;
    product_discount_value: number;
    product_loading?: boolean;
    product_lot_error?: string;
};

export interface ProductError {
    key: string;
    product_name_err: string;
    product_lot_err: string;
    product_warehouse_err: string;
    product_qty_err: string;
    product_rate_err: string;
}

export interface ProductReducerState {
    products: Array<ProductDetails>;
    products_err: Array<ProductError>
};

interface HandleAddProduct {
    type: 'HANDLE_ADD_PRODUCT';
};

interface HandleRemoveProduct {
    type: 'HANDLE_REMOVE_PRODUCT',
    payload: { product_key: string }
};

interface HandleItemChange<K extends keyof ProductDetails = keyof ProductDetails> {
    type: "HANDLE_ITEM_CHANGE";
    payload: {
        product_key: string;
        name: K;
        value: ProductDetails[K];
    };
};

interface HandleWarehouseChange {
    type: 'HANDLE_WAREHOUSE_CHANGE',
    payload: { product_key: string; name: string; value: number }
};

interface HandleFetchLotSuccess {
    type: 'HANDLE_LOT_FETCH_SUCCESS',
    payload: { product_key: string; name: string; value: Array<{ valie: number; label: string }> };
};

interface HandleFetchLotFailure {
    type: 'HANDLE_LOT_FETCH_FAILURE',
    payload: { product_key: string; error: string }
}

interface HandleProductError {
    type: "HANDLE_PRODUCT_ERROR";
    payload: {
        errors: ProductError[];
    };
}

export type ProductReducerAction = HandleAddProduct | HandleRemoveProduct | HandleItemChange | HandleWarehouseChange | HandleFetchLotSuccess | HandleFetchLotFailure | HandleProductError;

export interface SummaryProps {
    summary: {
        subtotal: number;
        discount_total: number;
        total: number;
    };

    onPlaceOrder: () => Promise<void>;
};