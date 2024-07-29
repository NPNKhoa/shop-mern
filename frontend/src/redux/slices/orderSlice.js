import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../thunks/orderThunk';

const initialState = {
  order: {},
  orderList: [],
  error: '',
  loading: false,
};

const orederSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orederSlice.reducer;
