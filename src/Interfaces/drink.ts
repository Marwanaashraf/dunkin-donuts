import { dCategories } from "../Enums/DrinkCategories";
export interface IDrink {
  title: string;
  subTitle: string;
  ingrdients: string;
  category: dCategories;
  image: string;
  discount: number;
  sizes: string[];
  prices: number[];
}
