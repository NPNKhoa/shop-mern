import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (params = {}, thunkAPI) => {
    try {
      const { email, password } = params;

      if (!email || !password) {
        return alert('Please fill in all required field');
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (data.error) {
        console.log(data.error);
        return thunkAPI.rejectWithValue(data.error);
      }

      localStorage.setItem('loggedInUser', JSON.stringify(data.data));
      return data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/signup',
  async (params = {}, thunkAPI) => {
    try {
      const { name, email, password, confirmPassword, phone } = params;

      if (!name || !email || !password || !confirmPassword || !phone) {
        return thunkAPI.rejectWithValue('Please fill in all required field');
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      localStorage.setItem('loggedInUser', JSON.stringify(data.data));
      return data.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  // eslint-disable-next-line no-unused-vars
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/logout`
      );

      const data = await response.json();

      if (data.error) {
        console.log(data.error);
        thunkAPI.rejectWithValue(data.error);
      }

      return null;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
