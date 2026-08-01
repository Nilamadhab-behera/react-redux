import { useSelector, useDispatch } from "react-redux";
import CustomerPage from "./CustomerPage";
import ProductPage from "./ProductPage";
import Summary from "./Summary";
import type { RootStore } from "../../stores/store";
import { useMemo } from "react";
import type { CustomerDetails } from "../../types/customer";
import type { ProductError } from "../../types/product";
import { handleCustomerError } from "../../actions/customerActions";
import { handleProductError } from "../../actions/productActions";

const ReduxHome = () => {
    let dispatch = useDispatch();
    let products = useSelector((state: RootStore) => state.product.products);
    let { customer_details } = useSelector((state: RootStore) => state.customer);

    // Calculate Summary Totals
    const calculateSummaryTotals = () => {
        let subtotal = products.reduce((acc, product) => acc + (product.product_qty * product.product_rate), 0) ?? 0;
        let discount_total = products.reduce((acc, product) => acc + product.product_discount_value, 0) ?? 0;
        let total = Math.max(subtotal - discount_total, 0);
        return { subtotal, discount_total, total };
    };

    let summaryTotals = useMemo(() => calculateSummaryTotals(), [products]);

    // Handle For Submit
    const handleSubmit = async () => {
        let isSubmitted = true;

        // Validating Customer Section
        let customerErrData: CustomerDetails['customer_details_error'] = {
            customer_name_err: '',
            customer_type_err: '',
            customer_products_err: ''
        };

        let productError: ProductError[] = [];

        if (!customer_details.customer_name) {
            isSubmitted = false;
            customerErrData.customer_name_err = "Please Fill The Customer Name Field";
        };

        if (!customer_details.customer_type) {
            isSubmitted = false;
            customerErrData.customer_type_err = "Please Fill The Customer Type Field";
        };

        if (!customer_details.customer_products.length) {
            isSubmitted = false;
            customerErrData.customer_products_err = "Please Fill The Customer Products Field";
        };

        // Validating Products Section
        for (let elem of products) {
            let productErr: ProductError = { key: elem.key, product_name_err: '', product_warehouse_err: '', product_lot_err: '', product_qty_err: '', product_rate_err: '' };
            if (!elem.product_name) {
                isSubmitted = false;
                productErr.product_name_err = "Required Field";
            };

            if (!elem.product_warehouse) {
                isSubmitted = false;
                productErr.product_warehouse_err = "Required Field";
            };

            if (!elem.product_lot) {
                isSubmitted = false;
                productErr.product_lot_err = "Required Field";
            };

            if (!elem.product_qty) {
                isSubmitted = false;
                productErr.product_qty_err = "Required Field";
            };

            if (!elem.product_rate) {
                isSubmitted = false;
                productErr.product_rate_err = "Required Field";
            };

            productError.push(productErr);
        };

        if (!isSubmitted) {
            dispatch(handleCustomerError(customerErrData));
            dispatch(handleProductError(productError));
            return
        };

        if (isSubmitted) {
            console.log(customer_details);
            console.log(products);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <CustomerPage />
            <ProductPage />
            <Summary summary={summaryTotals} onPlaceOrder={handleSubmit} />
        </div>
    );
};

export default ReduxHome;