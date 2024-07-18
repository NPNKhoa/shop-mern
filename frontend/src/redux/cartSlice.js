import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Thêm sản phẩm vào giỏ hàng
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (productData, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    return await response.json();
  }
);

// Xóa toàn bộ sản phẩm khỏi giỏ hàng
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cart/remove`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to remove from cart');
    }

    return await response.json();
  }
);

// Tạo slice cho giỏ hàng
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount;
        state.totalQuantity = action.payload.totalQuantity;
        state.status = 'succeeded';
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount;
        state.totalQuantity = action.payload.totalQuantity;
        state.status = 'succeeded';
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
