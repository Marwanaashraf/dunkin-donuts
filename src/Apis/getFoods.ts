import axios from "axios";
import { supabaseUrl } from "../supabaseClient";
import { headers } from "./options";
import { fCategories } from "../Enums/FoodCategories";

export async function getFoodsByCategory(
  category: string = fCategories.SANDWITCHES
) {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/foods`, {
      headers,
      params: {
        select: "*",
        category: `eq.${category}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
