import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;