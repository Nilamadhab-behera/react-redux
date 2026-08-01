import type { CustomerDetails } from "../types/customer";

export const handleCustomerChangeAction = <K extends keyof CustomerDetails['customer_details']>(name: K, value: CustomerDetails['customer_details'][K]) => {
    return {
        type: "HandleCustomerChange",
        payload: { name, value },
    };
};

export const handleCustomerError = (customerError: CustomerDetails['customer_details_error']) => {
    return {
        type: "HANDLE_CUSTOMER_ERROR",
        payload: customerError
    };
};