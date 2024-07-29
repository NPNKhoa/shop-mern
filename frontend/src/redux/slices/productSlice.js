import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from '../thunks/productThunk';

const initialState = {
  productList: [],
  product: {},
  loading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all products
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // get by id
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });

    // Add product
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (!state.productList) {
          state.productList = [];
        }
        state.productList.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete product
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        let filteredList;
        if (state.productList.length !== 0) {
          filteredList = state.productList.filter(
            (item) => item._id !== action.payload._id
          );
        }
        state.productList = filteredList;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
