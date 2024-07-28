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
