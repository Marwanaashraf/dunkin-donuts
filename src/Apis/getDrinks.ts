import axios from "axios";
import { headers } from "./options";
import { supabaseUrl } from "../supabaseClient";
export async function getAllDrinks() {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/drinks`, {
      headers: headers,
      params: {
        select: "*",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
