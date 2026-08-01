
// Creating All Customer Types
export interface CustomerDetails {
    customer_details: {
        customer_name: string;
        customer_type: '' | 'buyer' | 'vendor';
        customer_products: string[];
    };

    customer_details_error: {
        customer_name_err: string;
        customer_type_err: string;
        customer_products_err: string;
    }
};

interface HandleCustomerChange<K extends keyof CustomerDetails = keyof CustomerDetails> {
    type: "HANDLE_CUSTOMER_CHANGE";
    payload: {
        name: K;
        value: CustomerDetails[k]
    }
};

interface HandleCustomerError {
    type: "HANDLE_CUSTOMER_ERROR",
    payload: CustomerDetails['customer_details_error']
}

export type CustomerReducerPayLoad = HandleCustomerChange | HandleCustomerError;
