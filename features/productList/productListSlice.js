import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProductsService } from '../../services/productServices';
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
    productsLoading: false,
}

export const getAllProducts = createAsyncThunk(
    "products/getProducts",
    async (_, ThunkAPI) => {
        try {
            const response = await getAllProductsService();
            return response.data
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        // setProducts: (state, action) => {
        //     state.products = action.payload
        // },
        
    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            state.productsLoading = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.products = action.payload
        },
    }
})
export const productListReducer = productListSlice.reducer
