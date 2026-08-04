import { handleLotFailedFailure, handleSetLotDetails } from "../actions/productActions";
import { fetchLotDetails } from "../utils/helper";

export const fetchLots = (product_key: string, warehouseId: number) => {
    return async (dispatch: any) => {
        try {
            let lotDetails = await fetchLotDetails(warehouseId);
            dispatch(handleSetLotDetails(product_key, 'product_lots', lotDetails));
        } catch (error: any) {
            dispatch(handleLotFailedFailure(product_key, error.message));
        }
    };
};