import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJoke = createAsyncThunk(
    'joke/fetchJoke',
    async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return response.data;
      } catch (error) {
        return console.log("error in api fetching...");
      }
    }
  );

  const jokeSlice = createSlice({
    name: 'joke',
    initialState: { data: null, isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchJoke.pending, (state) => { state.isLoading = true; })
        .addCase(fetchJoke.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        })
        .addCase(fetchJoke.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default jokeSlice.reducer;