import { IDrink } from "./drink";

export interface IDrinkState {
  isLoading: boolean;
  drinks: IDrink[];
}
