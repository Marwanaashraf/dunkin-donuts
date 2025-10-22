import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFoodState } from "../Interfaces/FoodState";
import { getAllFoods } from "../Apis/getFoods";
let initialState: IFoodState = {
  foods: [],
  isLoading: false,
};
export let getFoods = createAsyncThunk("foods/getFoods", getAllFoods);
let FoodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoods.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getFoods.fulfilled, (state, action) => {
      state.foods = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getFoods.rejected, (state, action) => {
      state.isLoading = true;
    });
  },
});
export let FoodReducer = FoodSlice.reducer;
