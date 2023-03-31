import { ActionTypes } from "../Constants/ActionTypes"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}