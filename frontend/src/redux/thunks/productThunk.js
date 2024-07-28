import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchByAdmin } from '../../helpers/customFetch.js';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params = {}, thunkAPI) => {
    try {
      const { name = '', category = '', page = 1, limit = 10 } = params;

      const query = new URLSearchParams({
        name,
        category,
        page,
        limit,
      }).toString();

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products?${query}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();

      if (data.error) {
        thunkAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (
    { name, category, new_price, old_price, available = true, imageFile },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('new_price', new_price);
      formData.append('old_price', old_price);
      formData.append('available', available);
      formData.append('image', imageFile);

      const response = await fetchByAdmin(
        `${import.meta.env.VITE_API_URL}/products`,
        'POST',
        {
          Accept: '*/*',
        },
        formData
      );

      if (!response.ok) {
        return thunkAPI.rejectWithValue('Failed to add product');
      }

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

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await fetchByAdmin(
        `${import.meta.env.VITE_API_URL}/products/${productId}`,
        'DELETE'
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
