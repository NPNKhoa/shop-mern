import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../helpers/customFetch';

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async ({ items, fullname, address, phone, paymentMethod }, thunkAPI) => {
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
        return thunkAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrders = createAsyncThunk(
  'orders/getOrders',
  async (_, thunkAPI) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/orders`
      );

      const data = await response.json();

      if (data.error) {
        console.log(data.error);
        return thunkAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  'orders/getOrderById',
  async (orderId, thunkAPI) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/orders/${orderId}`,
        'GET'
      );

      const data = await response.json();

      if (data.error) {
        console.log(data.error);
        return thunkAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
