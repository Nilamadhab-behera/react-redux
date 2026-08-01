import { useSelector, useDispatch } from "react-redux";
import { getCustomerProductList } from "../utils/helper";
import type { RootStore } from "../stores/store";
import type React from "react";
import { handleCustomerChangeAction } from "../actions/customerActions";

const CustomerPage = () => {
    const dispatch = useDispatch();
    const { customer_details, customer_details_error } = useSelector((state: RootStore) => state.customer);

    const handleCustomerProductsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;
        let products = [...customer_details.customer_products];

        if (checked) {
            if (!products.includes(value)) {
                products.push(value);
            }
        } else {
            products = products.filter((p) => p !== value);
        };

        dispatch(handleCustomerChangeAction('customer_products', products));
    };

    return (
        <>
            {/* Customer Details */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">Customer Details</h2>

                {/* Customer Name */}
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Customer Name {" "}
                        <span className="text-red-600">{customer_details_error.customer_name_err}</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter customer name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        value={customer_details?.customer_name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleCustomerChangeAction('customer_name', e.target.value))}
                    />
                </div>

                {/* Customer Type */}
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Customer Type {" "}
                        <span className="text-red-600">{customer_details_error.customer_type_err}</span>
                    </label>

                    <div className="flex gap-6">
                        <label className="flex cursor-pointer items-center gap-2">
                            <input type="radio" name="customerType" value="buyer" checked={customer_details?.customer_type === "buyer"} className="h-4 w-4"
                                onChange={(_) => dispatch(handleCustomerChangeAction('customer_type', 'buyer'))}
                            />
                            <span>Buyer</span>
                        </label>

                        <label className="flex cursor-pointer items-center gap-2">
                            <input type="radio" name="customerType" value="vendor" checked={customer_details?.customer_type === "vendor"} className="h-4 w-4"
                                onChange={(_) => dispatch(handleCustomerChangeAction('customer_type', 'vendor'))}
                            />
                            <span>Vendor</span>
                        </label>
                    </div>
                </div>

                {/* Customer Products */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Customer Products {" "}
                        <span className="text-red-600">{customer_details_error.customer_products_err}</span>
                    </label>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {getCustomerProductList().map((product) => (
                            <label key={product} className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white p-3 transition hover:border-blue-500 hover:bg-blue-50">
                                <input type="checkbox" value={product} className="h-4 w-4" checked={customer_details?.customer_products.includes(product)}
                                    onChange={handleCustomerProductsChange}
                                />
                                <span>{product}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default CustomerPage;