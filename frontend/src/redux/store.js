import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authSlice from './slices/authSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authSlice,
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;
