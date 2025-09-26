import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDrinkState } from "../Interfaces/DrinkState";
import { getDrinksByCategory } from "../Apis/getDrinks";
export let getDrinks = createAsyncThunk(
  "drinks/getDrinks",
  getDrinksByCategory
);
let initialState: IDrinkState = {
  isLoading: true,
  drinks: [],
};
let DrinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrinks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDrinks.fulfilled, (state, action) => {
      state.drinks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getDrinks.rejected, (state, action) => {
      state.isLoading = true;
    });
  },
});
export let DrinkReducers = DrinkSlice.reducer;
