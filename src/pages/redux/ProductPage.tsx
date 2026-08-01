import { useSelector, useDispatch } from "react-redux";
import type { RootStore } from "../../stores/store";
import { handleAddProduct, handleItemChange, handleRemoveProduct, handleSetLotDetails, handleWarehouseChange } from "../../actions/productActions";
import type React from "react";
import type { ProductDetails } from "../../types/product";
import { fetchLotDetails, getWarehouseDetails } from "../../utils/helper";

const ProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootStore) => state.product.products);
    const productsErr = useSelector((state: RootStore) => state.product.products_err);

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, field: "product_qty" | "product_rate" | "product_discount_percent") => {
        const value = e.target.value;

        // Allow empty while typing
        if (value === "") {
            dispatch(handleItemChange(key, field, 0));
            return;
        }

        const number = Number(value);

        if (Number.isNaN(number)) return;

        dispatch(handleItemChange(key, field, number));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, key: string, name: keyof ProductDetails) => {
        let value = e.target.value;
        dispatch(handleItemChange(key, name, value));
    };

    const handleOnWarehouseChange = async (e: React.ChangeEvent<HTMLSelectElement>, key: string, name: keyof ProductDetails) => {
        let value = e.target.value;
        if (value) {
            dispatch(handleWarehouseChange(key, name, value));
        };

        let lotDetails = await fetchLotDetails(Number(value));

        dispatch(handleSetLotDetails(key, 'product_lots', lotDetails));
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                    Product Details
                </h2>

                <button
                    type="button"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    onClick={() => dispatch(handleAddProduct())}
                >
                    + Add Item
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-xs font-semibold text-gray-700">
                            <th className="border-b px-3 py-2 min-w-56">Product Name</th>
                            <th className="border-b px-3 py-2 w-40">Warehouse</th>
                            <th className="border-b px-3 py-2 w-40">Lot</th>
                            <th className="border-b px-3 py-2 w-20">Qty</th>
                            <th className="border-b px-3 py-2 w-24">Rate</th>
                            <th className="border-b px-3 py-2 w-28">Disc Type</th>
                            <th className="border-b px-3 py-2 w-24">Discount</th>
                            <th className="border-b px-3 py-2 w-28 text-right">
                                Item Total
                            </th>
                            <th className="border-b px-3 py-2 w-24 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.key} className="hover:bg-gray-50">
                                {/* Product Name */}
                                <td className="border-b p-2">
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                        value={product.product_name}
                                        onChange={(e) => dispatch(handleItemChange(product.key, 'product_name', e.target.value))}
                                    />
                                    <span className="mt-1 block text-xs text-red-500">
                                        {productsErr[index]?.product_name_err}
                                    </span>
                                </td>

                                {/* Product Warehouse */}
                                <td className="border-b p-2">
                                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" value={product.product_warehouse}
                                        onChange={(e) => handleOnWarehouseChange(e, product.key, 'product_warehouse')}
                                    >
                                        <option value="">Nothing Selected</option>
                                        {
                                            getWarehouseDetails().length > 0 && (
                                                getWarehouseDetails().map((warehouse) => (
                                                    <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                                                ))
                                            )
                                        }
                                    </select>
                                    <span className="mt-1 block text-xs text-red-500">
                                        {productsErr[index]?.product_warehouse_err}
                                    </span>
                                </td>

                                {/* Products Lot */}
                                <td className="border-b p-2">
                                    <select disabled={product.product_loading} className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" value={product.product_lot}
                                        onChange={(e) => dispatch(handleItemChange(product.key, 'product_lot', Number(e.target.value)))}
                                    >
                                        {
                                            product.product_loading === true ? (
                                                <option value="">Loading...</option>
                                            ) : (
                                                <>
                                                    <option value="">Nothing Selected</option>
                                                    {
                                                        product.product_lots.length > 0 && (
                                                            product.product_lots.map((lot) => (
                                                                <option key={lot.value} value={lot.value}>{lot.label}</option>
                                                            ))
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </select>

                                    <span className="mt-1 block text-xs text-red-500">
                                        {productsErr[index]?.product_lot_err}
                                    </span>
                                </td>

                                {/* Products Qty */}
                                <td className="border-b p-2">
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-right text-sm"
                                        value={product.product_qty}
                                        onChange={(e) => handleNumberChange(e, product.key, 'product_qty')}
                                    />

                                    <span className="mt-1 block text-xs text-red-500">
                                        {productsErr[index]?.product_qty_err}
                                    </span>
                                </td>

                                {/* Products Rate */}
                                <td className="border-b p-2">
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-right text-sm"
                                        value={product.product_rate}
                                        onChange={(e) => handleNumberChange(e, product.key, 'product_rate')}
                                    />

                                    <span className="mt-1 block text-xs text-red-500">
                                        {productsErr[index]?.product_rate_err}
                                    </span>
                                </td>

                                {/* Products Discount Type */}
                                <td className="border-b p-2">
                                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" value={product.product_discount_type}
                                        onChange={(e) => handleSelectChange(e, product.key, 'product_discount_type')}>
                                        <option value="">Nothing Selected</option>
                                        <option value="percent">%</option>
                                        <option value="flat">Flat</option>
                                    </select>
                                </td>

                                {/* Products Discount Value */}
                                <td className="border-b p-2">
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-right text-sm"
                                        value={product.product_discount_percent}
                                        onChange={(e) => handleNumberChange(e, product.key, 'product_discount_percent')}
                                    />
                                </td>

                                {/* Products Item Total */}
                                <td className="border-b px-4 py-2 text-right font-semibold text-green-600">
                                    {(product.product_qty * product.product_rate).toFixed(2)}
                                </td>

                                <td className="border-b px-4 py-2 text-center">
                                    <button
                                        type="button"
                                        onClick={() => dispatch(handleRemoveProduct(product.key))}
                                        className="rounded-md bg-red-500 px-3 py-2 text-sm text-white transition hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {products.length === 0 && (
                            <tr>
                                <td
                                    colSpan={7}
                                    className="py-8 text-center text-gray-500"
                                >
                                    No Products Added
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductPage;