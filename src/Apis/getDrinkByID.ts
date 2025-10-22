import axios from "axios";
import { supabaseKey, supabaseUrl } from "../supabaseClient";

export async function getDrink(drinkId: string) {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/drinks`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      params: {
        select: "*",
        id: `eq.${drinkId}`,
      },
    });
    return data[0];
  } catch (error) {
    console.error(error);
  }
}
