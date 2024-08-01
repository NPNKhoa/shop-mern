import { createSlice } from '@reduxjs/toolkit';
import {
  createOrder,
  getOrderById,
  getOrders,
  getOrdersByAdmin,
  updateOrderStatus,
} from '../thunks/orderThunk';

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
    // create order
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

    // get orders
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orderList = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // get orders by admin
    builder
      .addCase(getOrdersByAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrdersByAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.orderList = action.payload;
      })
      .addCase(getOrdersByAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // get order by id
    builder
      .addCase(getOrderById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // update order
    builder
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;

        state.loading = false;

        // update order list
        console.log(updatedOrder);
        console.log(state.orderList);
        const orderIndex = state.orderList.findIndex((order) => {
          return order._id === updatedOrder._id;
        });
        console.log(orderIndex);
        if (orderIndex !== -1) {
          state.orderList[orderIndex] = updatedOrder;
        }

        // update order
        state.order = updatedOrder;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orederSlice.reducer;
