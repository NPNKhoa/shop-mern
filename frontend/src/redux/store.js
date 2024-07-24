import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authSlice,
  },
});

export default store;
