import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    jokes: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchJokeRequest: (state) => {
      state.loading = true;
    },
    fetchJokeSuccess: (state, action) => {
      state.loading = false;
      state.jokes.push(action.payload);
    },
    fetchJokeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchJokeRequest, fetchJokeSuccess, fetchJokeFailure } =jokeSlice.actions;
export default jokeSlice.reducer;

