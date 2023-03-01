import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { productListReducer } from '../features/productList/productListSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        productList: productListReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
