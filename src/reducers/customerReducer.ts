import type { CustomerDetails, CustomerReducerPayLoad } from "../types/customer";

const initalCustomerState: CustomerDetails = {
    customer_details: {
        customer_name: '',
        customer_type: '',
        customer_products: []
    },

    customer_details_error: {
        customer_name_err: '',
        customer_type_err: '',
        customer_products_err: ''
    }
};

const CustomerReducer = (state = initalCustomerState, action: CustomerReducerPayLoad): CustomerDetails => {
    if (action.type === "HandleCustomerChange") {
        return {
            ...state,
            customer_details: {
                ...state.customer_details,
                [action.payload.name]: action.payload.value
            },
            customer_details_error: {
                ...state.customer_details_error,
                [action.payload.name + "_err"]: ""
            }
        }
    } else if (action.type === "HANDLE_CUSTOMER_ERROR") {
        return {
            ...state,
            customer_details_error: {
                ...action.payload
            }
        }
    } else {
        return state;
    }
};

export default CustomerReducer;