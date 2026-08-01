import type { SummaryProps } from "../types/product";

const Summary = ({ summary, onPlaceOrder }: SummaryProps) => {
    return (
        <div className="flex justify-end p-4">
            <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">
                    Order Summary
                </h2>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>₹{(summary?.subtotal ?? 0).toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-red-500">- ₹{(summary?.discount_total ?? 0).toFixed(2)}</span>
                    </div>

                    <hr />

                    <div className="flex justify-between text-base font-semibold">
                        <span>Total</span>
                        <span className="text-blue-600">₹{(summary?.total ?? 0).toFixed(2)}</span>
                    </div>
                </div>

                <button onClick={onPlaceOrder} className="mt-5 w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Summary;