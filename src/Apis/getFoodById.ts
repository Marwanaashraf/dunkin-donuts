import axios from "axios";
import { supabaseKey, supabaseUrl } from "../supabaseClient";

export async function getFood(foodId: string) {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/foods`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      params: {
        select: "*",
        id: `eq.${foodId}`,
      },
    });
    return data[0];
  } catch (error) {
    console.error(error);
  }
}
