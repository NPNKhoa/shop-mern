import { createSlice } from '@reduxjs/toolkit';
import { addToCart, getCart } from '../thunks/cartThunk';

const initialState = {
  cart: {},
  cartItems: [],
  totalItems: 0,
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
        state.totalItems = action.payload.totalItems;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // add to cart
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
