import type { ProductDetails, ProductError } from "../types/product";

export const getDefaultState = (key: string): ProductDetails => {
    return {
        key,
        product_name: '',
        product_warehouse: 0,
        product_lot: 0,
        product_qty: 0,
        product_rate: 0,
        product_discount_type: 'percent',
        product_discount_percent: 0,
        product_discount_value: 0,
        product_lots: []
    };
};

export const getDefaultProductError = (key: string): ProductError => ({
    key,
    product_name_err: "",
    product_lot_err: "",
    product_warehouse_err: "",
    product_qty_err: "",
    product_rate_err: "",
});

export const getCustomerProductList = () => {
    return ["Electronics", "Furniture", "Clothing", "Grocery", "Stationery", "Sports",];
};

export const getWarehouseDetails = (): Array<{ id: number; name: string }> => {
    return [{ id: 1, name: "India" }, { id: 2, name: "America" }, { id: 3, name: "Canada" }];
};

export const fetchLotDetails = async (warehouse_id: number): Promise<{ value: number; label: string }[]> => {
    try {
        if(warehouse_id === 2) throw new Error("Failed To Fecth Lots");
        // Give A Small Delay For Look Like Api Call
        await new Promise((resolve) => setTimeout(resolve, 800));

        let lotDetails: Record<number, { value: number, label: string }[]> = {
            1: [{ value: 1, label: "Lot-1" }, { value: 2, label: "Lot-2" }],
            2: [{ value: 3, label: "Lot-3" }, { value: 4, label: "Lot-4" }],
            3: [{ value: 5, label: "Lot-5" }],
        };

        return lotDetails[warehouse_id];
    } catch (error) {
        throw error;
    }
};

export const calculateDiscount = (product: ProductDetails): number => {
    const { product_qty, product_rate, product_discount_type, product_discount_percent } = product;

    if (product_qty <= 0 || product_rate <= 0 || !product_discount_type || product_discount_percent <= 0) return 0;

    const itemTotal = product_qty * product_rate;

    if (product_discount_type === "flat") return product_discount_percent;

    if (product_discount_type === "percent") return (itemTotal * product_discount_percent) / 100;

    return 0;
};
