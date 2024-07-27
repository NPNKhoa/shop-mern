import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authSlice from './slices/authSlice';
import productSlice from './slices/productSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authSlice,
    products: productSlice,
  },
});

export default store;
