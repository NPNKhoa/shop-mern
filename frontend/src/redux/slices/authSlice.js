import { createSlice } from '@reduxjs/toolkit';
import { login, signUp } from '../thunks/authThunk';

const initialState = {
  authUser: null,
  error: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // sign up
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
