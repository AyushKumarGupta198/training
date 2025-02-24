import { createSlice } from "@reduxjs/toolkit";

const coinsSlice = createSlice({
    name: "coins",
    initialState: {
      coins:0,
      latestReward:null,
      loading: false,
      error: null,
    },
    reducers: {
      fetchCoinRequest: (state) => {
        state.loading = true;
      },
      fetchCoinSuccess: (state, action) => {
        state.loading = false;
        state.coins=state.coins+action.payload;
        state.latestReward=action.payload;
      },
      fetchCoinFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { fetchCoinRequest, fetchCoinSuccess, fetchCoinFailure } =coinsSlice.actions;
  export default coinsSlice.reducer;
  