import { dCategories } from "../Enums/enums";
export interface IDrink {
  id: string;
  title: string;
  subTitle: string;
  ingrdients: string;
  category: dCategories;
  image: string;
  discount: number;
  sizes: string[];
  prices: number[];
}
