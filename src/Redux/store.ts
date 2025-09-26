import { configureStore } from "@reduxjs/toolkit";
import { DrinkReducers } from "./DrinkSlice";
import { FoodReducer } from "./FoodSlice";

export const configStore = configureStore({
  reducer: {
    drink: DrinkReducers,
    food: FoodReducer,
  },
});
export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
