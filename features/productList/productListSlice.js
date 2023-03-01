import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    sizes: {
        XS: false,
        S: false,
        M: false,
        ML: false,
        L: false,
        XL: false,
        XXL: false,
    },
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        getProducts: (state, action) => {
            state.products = state.products
        },
    },
})
export const { setProducts, getProducts} = productListSlice.actions
export const productListReducer = productListSlice.reducer
