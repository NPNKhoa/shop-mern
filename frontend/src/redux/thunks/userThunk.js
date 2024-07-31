import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWithAuth } from '../../helpers/customFetch.js';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (params = {}, thunkAPI) => {
    try {
      const { email = '', name = '', page = 1, limit = 10 } = params;
      const query = new URLSearchParams({
        email: email,
        name: name,
        page,
        limit,
      }).toString();

      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/users?${query}`,
        'GET'
      );

      const data = await response.json();
      console.log(data);

      if (data.error) {
        console.log(data.error);
        return thunkAPI.rejectWithValue(data.error);
      }

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.API_URL}/users?userId=${userId}}`,
        'GET'
      );

      const data = await response.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
  async ({ userId, name, email, phone }, thunkAPI) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.API_URL}/users?userId=${userId}}`,
        'GET',
        {
          body: JSON.stringify({
            name,
            email,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
