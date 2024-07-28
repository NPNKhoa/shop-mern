import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../thunks/cartThunk';

const initialState = {
  cart: {},
  cartItems: [],
  error: '',
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get cart
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.cartItems = action.payload.cartItems;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
