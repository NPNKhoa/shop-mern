import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../helpers/customFetch';

export const getCart = createAsyncThunk('cart/getCart', async (_, thunkAPI) => {
  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/cart`,
      'GET'
    );

    const data = await response.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    return data.data;
  } catch (error) {
    console.log(error);
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId, quantity }, thunkAPI) => {
    try {
      if (!productId || !quantity) {
        return thunkAPI.rejectWithValue('Missing property');
      }

      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/cart/add`,
        'POST',
        {
          'Content-Type': 'application/json',
        },
        JSON.stringify({ productId, quantity })
      );

      const data = await response.json();

      if (data.error) {
        console.log(data.error);
        return thunkAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId, thunkAPI) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/cart/remove`,
        'DELETE',
        { 'Content-Type': 'application/json' },
        JSON.stringify({ productId })
      );

      const data = await response.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
