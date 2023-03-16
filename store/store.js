import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { cartReducer } from '../features/cart/cartSlice';
import { productListReducer } from '../features/productList/productListSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        productList: productListReducer,
        cart : cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
