import axios from "axios";
import { headers } from "./options";
import { supabaseUrl } from "../supabaseClient";
import { dCategories } from "../Enums/DrinkCategories";
export async function getDrinksByCategory(category: string = dCategories.HOT) {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/drinks`, {
      headers: headers,
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
