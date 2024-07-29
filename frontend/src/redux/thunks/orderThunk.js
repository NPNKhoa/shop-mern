import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../helpers/customFetch';

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async ({ items, fullname, address, phone, paymentMethod }, thunAPI) => {
    try {
      if (!items || !fullname || !address || !phone || !paymentMethod) {
        return;
      }

      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/orders`,
        'POST',
        { 'Content-Type': 'application/json' },
        JSON.stringify({ items, fullname, address, phone, paymentMethod })
      );

      const data = await response.json();

      if (data.error) {
        return thunAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      console.log(error);
      thunAPI.rejectWithValue(error.message);
    }
  }
);
