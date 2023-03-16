import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetCartItemsService } from '../../services/cartServices';

const initialState = {
    cartItems: [],
}
export const getCartItems = createAsyncThunk(
    "cart/getCartItems",
    async (_, ThunkAPI) => {
        try {
            const response = await GetCartItemsService();
            return response.data
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
    },
})
export const { clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
